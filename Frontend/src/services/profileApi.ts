import type { ProfileResponse } from '../types/profile'

const profile: ProfileResponse = {
  name: '苏畅',
  brandName: '小窗同学',
  role: 'C# / WPF / 桌面应用开发者',
  headline: '为桌面应用开发打开一扇更清晰的小窗。',
  location: '中国浙江杭州',
  contact: {
    phone: '15077649093',
    qq: '1614754563',
    wechat: '15077649093',
    email: '1614754563@qq.com',
    gitHub: 'https://github.com/ViewSuSu',
    bilibili: '小窗同学',
    blog: '小窗同学',
  },
  socialLinks: [
    { platform: 'GitHub', handle: 'ViewSuSu', url: 'https://github.com/ViewSuSu' },
    { platform: 'Bilibili', handle: '小窗同学', url: 'https://space.bilibili.com/381527816?spm_id_from=333.1365.0.0' },
    { platform: '小红书', handle: '小窗同学', url: null },
    { platform: '微信公众号', handle: '小窗同学', url: null },
    { platform: '知乎', handle: '小窗同学', url: null },
  ],
  summary:
    '我是小窗同学（苏畅），3.5 年 C# / WPF 桌面工程师。常年和 WPF、Revit / CAD 插件、AI 工具链打交道，把工程软件里的界面、插件和数据流，整理成清晰、稳定、可维护的桌面工具。目前在 不鸣科技 做引擎工具链中的 WPF UI 平台框架。',
  intro: [
    '写代码十年（其中桌面方向 3.5 年）。从 C++ 起步、走 C# 主线，做过工程软件主程、控件库设计、CAD/Revit 插件、3D 可视化，目前在 不鸣科技 Chaos 引擎工具组做内部的 WPF UI 平台框架。',
    '我喜欢把复杂的工作流拆开、再重新组装成清晰的工具。比起写聪明的代码，更在意可读性、稳定性，以及"明确为某个用户解决某个问题"。同样的需求，能用一个小工具解决，就不开一个大平台。',
    '不喜欢花哨没用的抽象、为了套框架而套框架、和"差不多就行了"。如果说我有什么风格，大概是：先把问题搞清楚，再让代码足够无聊。',
  ],
  beliefs: [
    {
      title: '先把问题搞清楚',
      body: '宁可在白板前多花一小时，也不要写 800 行还在原地踏步。需求模糊的代码，永远在重写。',
    },
    {
      title: '原生体验是底线',
      body: '桌面应用不该比网页慢、不该比浏览器卡。能用 60fps，就不接受 30fps；能用 50MB，就不要 500MB。',
    },
    {
      title: '让代码足够无聊',
      body: '克制的抽象、清晰的命名、显式的依赖。聪明的代码三个月后没人看得懂，"无聊"的代码两年后还在跑。',
    },
    {
      title: '工具，而不是平台',
      body: '小工具解决具体问题；大平台解决简历问题。我倾向于做前者，再看是否真的有必要做后者。',
    },
  ],
  metrics: [
    { label: '3.5年', value: '工作经验', caption: '桌面应用开发、WPF、Revit、CAD' },
    { label: '5', value: '精选开源项目', caption: '从控件库到 BIM 自动化' },
    { label: '79', value: '开源星标', caption: '来自精选公开仓库' },
    { label: '9', value: '公开仓库', caption: '持续沉淀工具项目' },
  ],
  focusAreas: [
    {
      title: '主要技术栈',
      stack: 'C# / WPF / Avalonia / C++',
      description: '围绕桌面客户端、工程插件和工具链开发，长期使用 C# 与 WPF 构建复杂业务界面。',
      points: ['熟悉 WPF / Avalonia 桌面端开发', '熟悉 MVVM、Prism、CommunityToolkit 等常用框架', '有自定义控件、组件库和工程工具平台开发经验'],
      keywords: ['C#', 'WPF', 'Avalonia', 'C++'],
    },
    {
      title: '桌面应用开发',
      stack: 'MVVM / Prism / 自定义控件',
      description: '参与大型桌面应用与工程软件研发，关注架构拆分、模块边界、性能和可维护性。',
      points: ['负责 WPF 桌面应用架构设计与模块化开发', '处理复杂交互、动态加载、缓存和列表渲染性能问题', '沉淀 TreeView、进度条、Canvas 绘图等可复用组件'],
      keywords: ['MVVM', 'Prism', 'CommunityToolkit', 'Canvas'],
    },
    {
      title: 'AI 工程效率',
      stack: 'Claude Code / OpenCode / Copilot / MCP',
      description: '把 AI 编程工具用于真实工程问题，覆盖代码生成、调试测试、设计稿还原和组件迭代。',
      points: ['使用 AI 辅助代码生成、优化、调试与测试', '通过 Figma 原型还原到 WPF 界面，提高前后端对接效率', '将 AI 能力融入开源组件设计与迭代流程'],
      keywords: ['Claude Code', 'OpenCode', 'Copilot', 'MCP'],
    },
    {
      title: 'Web/API 与工程化',
      stack: 'C/S / B/S / .NET Core / GraphQL',
      description: '具备全栈协作经验，能够对接服务端接口、数据库和部署流程，支撑桌面端与业务系统联动。',
      points: ['熟悉 HTTP / GraphQL / WebAPI 接口开发与联调', '熟悉 MySQL、SQL Server 与数据结构设计', '熟悉 Git 工作流、NuGet 组件封装和 GitLab CI/CD'],
      keywords: ['WebAPI', 'GraphQL', 'SQL Server', 'GitLab CI/CD'],
    },
  ],
  openSourceProjects: [
    {
      name: 'BlackGoldAncientSword',
      title: '黑金古刀 · 永劫无间战绩助手',
      description:
        '运行在 Windows 上的《永劫无间》桌面辅助。自动检测游戏状态、OCR 识别英雄选择界面的队友昵称、实时拉取战绩与段位，并并排展示队伍数据。OBS 同源截屏 + PaddleOCR + 系统托盘 + 多语言。',
      url: 'https://github.com/ViewSuSu/BlackGoldAncientSword',
      category: '桌面应用 · 游戏辅助',
      impact:
        '自包含 .NET 10 发布，集成 PaddleOCR、OpenCV、Intel MKL 等原生库；覆盖战绩查询、队伍识别、对局锁定与系统托盘等完整工作流。',
      stars: 1,
      forks: 0,
      tags: ['C#', '.NET 10', 'WPF', 'PaddleOCR', 'Tray', 'i18n'],
    },
    {
      name: 'NarakaBladepoint-WPF',
      title: '永劫无间客户端 · WPF 复刻',
      description:
        '用 .NET 6 + WPF + Prism 复刻《永劫无间》Unity 客户端的界面质感、动画与交互。所有自定义控件纯手写、零第三方 UI 库依赖，严格 MVVM 与模块化分层。',
      url: 'https://github.com/ViewSuSu/NarakaBladepoint-WPF',
      category: 'WPF · Game UI',
      impact: '社区 ★30；展示如何用 WPF 还原现代游戏客户端的视觉与交互体验。',
      stars: 30,
      forks: 1,
      tags: ['C#', 'WPF', '.NET 6', 'Prism', 'MVVM'],
    },
    {
      name: 'Su.WPF.TreeViewEx',
      title: 'WPF / Avalonia TreeView 完整封装',
      description:
        '面向 WPF（同设计也适配 Avalonia）TreeView 的面向对象封装，把模板、数据绑定与事件细节全部隐藏，开发者只关心业务结构。三态复选框、右键菜单、快捷键、多选、节点复制全在内。',
      url: 'https://github.com/ViewSuSu/Su.WPF.TreeViewEx',
      category: 'WPF · 控件库',
      impact: '零第三方依赖；同一套设计同时覆盖 WPF 与 Avalonia 的 TreeView 体验。',
      stars: 26,
      forks: 3,
      tags: ['C#', 'WPF', 'Avalonia', 'NuGet', 'TreeView'],
    },
    {
      name: 'Su.AutoCAD2Revit',
      title: 'Revit 端读取 DWG 的扩展库',
      description:
        '基于 Teigha 的 Revit 插件扩展库，无需安装或打开 AutoCAD 即可读取 DWG（含 Revit 链接图纸与本地 DWG）。自动处理 ImportInstance Transform、嵌套块矩阵、Revit 标高，输出可直接使用的 Revit 世界坐标。',
      url: 'https://github.com/ViewSuSu/Su.AutoCAD2Revit',
      category: 'BIM · 自动化',
      impact: 'NuGet 包；支持 Revit 2013–2024，覆盖坐标转换、块解析与文本/图层提取。',
      stars: 12,
      forks: 2,
      tags: ['C#', 'Revit', 'AutoCAD', 'Teigha', 'DWG', 'NuGet'],
    },
    {
      name: 'Su.Revit.HelixToolkit.SharpDX',
      title: 'Revit 高性能 3D 可视化',
      description:
        '为 Revit 插件开发设计的 3D 可视化工具库，基于 HelixToolkit.Wpf.SharpDX。开箱即可在 Revit 插件里创建可交互 3D 视图窗口，支持海量三角面、鼠标交互、Revit ↔ Helix 坐标互转与内存释放优化。',
      url: 'https://github.com/ViewSuSu/Su.Revit.HelixToolkit.SharpDX',
      category: 'Revit · 3D 可视化',
      impact: '把 HelixToolkit.SharpDX 的 GPU 渲染能力接入 Revit 插件工作流。',
      stars: 10,
      forks: 4,
      tags: ['C#', 'Revit', 'HelixToolkit', 'SharpDX', '3D'],
    },
    {
      name: 'Su.Revit.UI.StatusBarEx',
      title: 'Revit 进度条扩展',
      description:
        '为 Revit 二次开发设计的进度条组件，基于 ricaun.Revit.UI.StatusBar 扩展。重点解决旧版本 Revit、中文 UI 与长耗时任务的取消问题，覆盖 Revit 2011 → 2026 全系列。',
      url: 'https://github.com/ViewSuSu/Su.Revit.UI.StatusBarEx',
      category: 'Revit · UI 组件',
      impact: '一行调用获得带取消按钮、可定制样式的 Revit 状态栏进度条。',
      stars: 8,
      forks: 1,
      tags: ['C#', 'Revit', 'NuGet', 'ProgressBar'],
    },
  ],
  skills: [
    {
      title: 'C# 桌面端',
      tags: ['C#', 'WPF', 'Avalonia', 'MVVM', 'Prism', 'CommunityToolkit'],
      description: '构建大型客户端、复杂业务界面、控件库和工具平台。',
    },
    {
      title: '桌面应用集成',
      tags: ['Revit API', 'AutoCAD API', 'BIM', 'CAD', 'HelixToolkit'],
      description: '对接桌面应用开发中的 API、模型数据、二维 / 三维联动和插件工作流。',
    },
    {
      title: '服务端与工程化',
      tags: ['ASP.NET Core', 'WebAPI', '.NET 10', 'SQL Server', 'MySQL', 'Docker', 'GitLab CI/CD'],
      description: '提供前后端分离接口、数据服务、构建发布和团队协作基础设施。',
    },
  ],
  experiences: [
    {
      company: '不鸣科技',
      role: '自研引擎工具链开发工程师 / ET-引擎工具组',
      period: '2026-03 - 至今',
      location: '浙江杭州',
      highlights: [
        '参与 Chaos 引擎工具链中的 C#/WPF UI/UX 平台框架研发。',
        '推进 AI、Figma 设计稿转 WPF 界面、配置编辑和自动化开发链路。',
        '优化复杂 WPF UI 的加载、响应和缓存策略。',
      ],
    },
    {
      company: '浙江慧远工程数据技术有限公司',
      role: '主程序',
      period: '2023-06 - 2026-02',
      location: '浙江杭州',
      highlights: [
        '主导 C#/.NET/WPF 桌面端架构设计，落地 MVVM、Prism、依赖注入和常用设计模式，支撑复杂工程业务流程。',
        '负责核心模块、任务拆分和代码架构，参与现场调研、原型设计、开发测试到上线交付的完整研发流程。',
        '封装 CommunityToolkit、HandyControl、自定义控件与 Canvas 绘图能力，沉淀可复用组件库，降低重复开发和维护成本。',
        '负责 AutoCAD/Revit 插件、CAD 图纸识别和数据读取方向，实现桌面端、B/S 系统与云平台的数据协同。',
        '建设内网 NuGet 包管理、代码审查、编码规范和自动化打包流程，并参与实习生培养与团队协作机制建设。',
      ],
    },
  ],
  gitHubProfile: {
    achievements: [
      {
        name: 'Starstruck',
        slug: 'starstruck',
        imageUrl: 'https://github.githubassets.com/assets/starstruck-default-b6610abad518.png',
        url: 'https://github.com/ViewSuSu?achievement=starstruck&tab=achievements',
      },
    ],
    organizations: [],
  },
}

export async function getProfile(): Promise<ProfileResponse> {
  return profile
}
