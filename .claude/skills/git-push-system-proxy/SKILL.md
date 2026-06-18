---
name: git-push-system-proxy
description: GitHub 推送/拉取的代理 fallback：本机直连 + GitHub Desktop 自带 git 都不通时，复用 Windows 系统代理通过 `git -c` 临时注入完成推送。优先用全局 skill [[github-desktop-git-push]]；只有那条路径也失败时才走这条。
---

# git-push-system-proxy（fallback）

## 优先级提示

> 本 skill 是 **fallback**。GitHub 推送的首选是全局 skill **[[github-desktop-git-push]]**（用 GitHub Desktop 自带 git 的 schannel TLS 直连）。只有自带 git 也连不通时，才回到这条用系统代理的路径。

## 触发场景

满足以下**全部**条件：

- 用户要求向 `github.com` 推送 / 拉取。
- 已经尝试过 [[github-desktop-git-push]]，仍然报 `Failed to connect`、`Could not resolve host`、`Recv failure: Connection was reset`。

如果用户网络环境直连 GitHub 正常（无报错先例、显式声明不走代理），**不要主动注入代理**。

## 背景（写给未来的 Claude）

- 本机是 Windows + MINGW64，常态下命令行 `git` 直连 `github.com:443` 失败。
- 用户装了 **GitHub Desktop**，它在桌面正常推送 —— 因为 Electron + 自带 git **会读 Windows 系统代理（WinINet）**。
- 命令行 `git.exe` 默认 **不读** WinINet，所以两边一个能通一个不通。
- Windows 系统代理在注册表：`HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings`，关键字段 `ProxyEnable`（DWORD，1=启用）和 `ProxyServer`（形如 `127.0.0.1:9098`）。
- 端口可能因代理软件（Clash / V2Ray / Surge for Windows）配置而变化，**每次现读，不要硬编码**。

## 执行步骤

### 1. 读取系统代理

用 `pwsh`（PowerShell 7+，全局 CLAUDE.md 已要求）：

```bash
pwsh -NoProfile -Command "$p = Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings'; if ($p.ProxyEnable -eq 1 -and $p.ProxyServer) { 'http://' + $p.ProxyServer } else { '' }"
```

输出形如 `http://127.0.0.1:9098`；空串表示系统代理未启用。

### 2. 用 `-c` 临时注入并执行 git 命令

读到 `<PROXY_URL>` 之后，用 `-c` 把代理**只注入到本次 git 进程**：

```bash
git -c http.proxy=<PROXY_URL> -c https.proxy=<PROXY_URL> push
```

`git fetch` / `git pull` / `git clone` 同理。

### 3. 不需要任何清理

`-c` 只对当前进程生效，命令结束就消失，**不写入任何 git 配置文件**。这就是"推送时走代理，推送完清除代理"的最优实现 —— 进程退出即等价清除，零残留、零并发干扰、零中断风险。

## 禁止的反模式

**不要**用"写全局配置 → 推送 → unset"的流程：

```bash
# 反模式 ❌
git config --global http.proxy http://127.0.0.1:9098
git config --global https.proxy http://127.0.0.1:9098
git push
git config --global --unset http.proxy
git config --global --unset https.proxy
```

理由：

- 推送被 Ctrl-C / 网络中断 / 鉴权失败打断时，全局配置残留，下次直连用户其他仓库会被错误地走代理。
- 多个 git 操作并发时互相影响。
- 多两次写盘 + 多两个出错点，没有任何收益。

`-c` 方案已完整满足"推送时走代理、推送完清除"的意图，**永远优先选它**。

## 失败排查

| 现象 | 处理 |
| --- | --- |
| `ProxyEnable=0` 但 GitHub Desktop 仍能推 | 它可能走 PAC 文件，读 `AutoConfigURL` 字段；或走系统级 VPN（不需要 git 代理，直接 `git push` 试一次） |
| `curl: (7) Failed to connect to 127.0.0.1 port 9098` | 代理软件没启动，让用户先开 Clash/V2Ray 客户端 |
| 拿到代理 URL 但 push 仍超时 | 用 `curl -x <PROXY_URL> https://github.com -I` 验证代理本身可达 |
| 端口和上次记忆的不一样 | 正常，每次都现读注册表，不要相信缓存 / 记忆里的旧端口 |

## 一次性范例

```bash
# 1) 现读代理
PROXY=$(pwsh -NoProfile -Command "$p = Get-ItemProperty 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings'; if ($p.ProxyEnable -eq 1 -and $p.ProxyServer) { 'http://' + $p.ProxyServer } else { '' }")

# 2) 走代理推送；为空则直推
if [ -n "$PROXY" ]; then
  git -c http.proxy="$PROXY" -c https.proxy="$PROXY" push
else
  git push
fi
```
