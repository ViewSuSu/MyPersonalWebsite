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
    '我是小窗同学（苏畅），C# 中级开发工程师，3.5 年工作经验。主要技术栈 C# / WPF / Avalonia / C++。目前在 牛股王 负责 PC 客户端维护与新功能开发，主攻新业务产线"量化业务" PC 端。',
  intro: [
    'C# 中级开发工程师，3.5 年工作经验。主要技术栈 C# / WPF / Avalonia / C++。目前在 牛股王 负责 PC 客户端维护与新功能开发，主攻新业务产线"量化业务" PC 端。',
    '熟悉 WPF / Avalonia 桌面端开发，熟悉基于 MVVM 的大型桌面端应用方法论，熟练使用 Prism、CommunityToolkit 等主流框架，熟悉自定义控件。',
    '擅长借助 Claude Code、OpenCode、Copilot 和 MCP 等 AI 编程工具解决实际工程问题；探索过 Figma 原型还原到 WPF 界面的 AI 工作流，提升设计与前端的对接效率。',
    '另有 1.5 年全栈开发经历，熟悉 C/S、B/S 架构与 Spring Boot、.NET Core、HTTP / GraphQL、WebAPI、Nginx 等技术栈。热爱编程，开源项目累计 100+ Star，NuGet 组件累计 4w+ 下载量。',
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
    { label: '3.5年', value: '工作经验', caption: 'C# / WPF / Avalonia / 桌面方向' },
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
      icon: 'stack',
    },
    {
      title: '桌面应用开发',
      stack: 'MVVM / Prism / 自定义控件',
      description: '参与大型桌面应用与工程软件研发，关注架构拆分、模块边界、性能和可维护性。',
      points: ['负责 WPF 桌面应用架构设计与模块化开发', '处理复杂交互、动态加载、缓存和列表渲染性能问题', '沉淀 TreeView、进度条、Canvas 绘图等可复用组件'],
      keywords: ['MVVM', 'Prism', 'CommunityToolkit', 'Canvas'],
      icon: 'desktop',
    },
    {
      title: 'AI 工程效率',
      stack: 'Claude Code / OpenCode / Copilot / MCP',
      description: '把 AI 编程工具用于真实工程问题，覆盖代码生成、调试测试、设计稿还原和组件迭代。',
      points: ['使用 AI 辅助代码生成、优化、调试与测试', '通过 Figma 原型还原到 WPF 界面，提高前后端对接效率', '将 AI 能力融入开源组件设计与迭代流程'],
      keywords: ['Claude Code', 'OpenCode', 'Copilot', 'MCP'],
      icon: 'ai',
    },
    {
      title: 'Web/API 与工程化',
      stack: 'C/S / B/S / .NET Core / GraphQL',
      description: '具备全栈协作经验，能够对接服务端接口、数据库和部署流程，支撑桌面端与业务系统联动。',
      points: ['熟悉 HTTP / GraphQL / WebAPI 接口开发与联调', '熟悉 MySQL、SQL Server 与数据结构设计', '熟悉 Git 工作流、NuGet 组件封装和 GitLab CI/CD'],
      keywords: ['WebAPI', 'GraphQL', 'SQL Server', 'GitLab CI/CD'],
      icon: 'api',
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
  workProjects: [
    {
      name: '牛股王量化 · PC 客户端',
      title: '量化业务 PC 端 · 0 → 1 建设',
      company: '牛股王',
      role: 'PC 端开发工程师',
      period: '2026-06 — 至今',
      location: '浙江杭州',
      stack: ['C#', 'WPF', 'Avalonia', 'MVVM'],
      description:
        '承接公司新业务产线"量化业务"的 PC 端从 0 到 1 建设，搭建桌面客户端架构与核心模块，对接量化策略与服务端数据，承载量化交易场景下的桌面端交互。',
      highlights: [
        '主导量化业务 PC 客户端的架构选型与目录分层，沉淀通用基础设施。',
        '负责核心模块开发：行情/策略数据接入、策略管理、量化交易工作流界面。',
        '与服务端、量化策略团队协同设计接口与数据契约，保证桌面端与策略服务端的稳定联动。',
      ],
    },
    {
      name: '牛股王 PC 客户端',
      title: '牛股王 PC 端维护与新功能开发',
      company: '牛股王',
      role: 'PC 端开发工程师',
      period: '2026-06 — 至今',
      location: '浙江杭州',
      stack: ['C#', 'WPF', 'Avalonia'],
      description:
        '负责牛股王 PC 客户端的日常维护、性能优化与新功能迭代，保证现有桌面端业务稳定上线，并配合产品/服务端推进新功能在 PC 端的落地。',
      highlights: [
        '承接 PC 客户端的 bug 修复、性能调优与版本迭代。',
        '推进新需求在 PC 端的功能落地，覆盖从方案评审、开发自测到灰度上线全流程。',
        '梳理历史代码并按模块逐步重构，降低长期维护成本。',
      ],
    },
    {
      name: 'Chaos 引擎 · UI/UX 框架',
      title: 'Chaos 引擎工具链 C# / WPF UI/UX 框架',
      company: '不鸣科技',
      role: '自研引擎工具链开发工程师 · ET-引擎工具组',
      period: '2026-03 — 2026-05',
      location: '浙江杭州',
      stack: ['C#', 'WPF', 'Figma MCP', 'Claude Code', 'XAML'],
      description:
        '主导 Chaos 引擎工具链中的 C#/WPF UI/UX 平台框架开发，把 Figma 设计稿 → XAML 的转换自动化，并接入 AI 工具链优化控件排布、尺寸与设计还原度。',
      highlights: [
        'Figma 设计稿到 WPF 界面的自动还原流水线：解析 Figma 布局生成符合规范的 XAML，结合 MCP 与 Claude Code 反馈循环。',
        '接入可停靠窗口、动态加载、自定义控件等关键能力，承接复杂引擎工具的交互需求。',
        'UI 开发周期 -20%，自动化代码生成与资源复用带来约 10% 成本优化。',
        '核心 UI 模块性能优化：内存占用 -15%、列表/表格响应时间 -30%、CPU 密集型操作并行化重构。',
      ],
    },
    {
      name: '大型 WPF 装饰行业插件平台',
      title: '装饰行业大型 WPF 应用程序插件（500 天工期）',
      company: '浙江慧远工程数据技术',
      role: '主程序 · 研发中心',
      period: '工期约 500 天',
      location: '浙江杭州',
      stack: ['C#', 'WPF', 'AutoCAD API', 'Revit API', 'Canvas', 'Inno Setup'],
      description:
        '主导一个面向装饰行业的超大型 WPF 应用插件平台。组建并带领 2 名开发 + 2 名实习生团队，覆盖从需求调研、原型、架构、开发、测试到上线的完整生命周期，个人代码贡献约 70%。',
      highlights: [
        '模块化代码架构搭建，可维护性与可扩展性提升约 30%。',
        '多版本 Config 配置体系，多环境灵活部署，部署耗时 -20%。',
        'CAD 翻模主线：基于 AutoCAD API + 自研几何/模式识别算法，墙梁板柱与机电管线识别准确率达 95%。',
        'CAD 图纸 → Revit 模型自动转换，人工干预减少约 50%。',
        '独立封装 Canvas 二维绘图等复杂控件，承接墙/地砖二维铺贴、矩形二维装箱与 RevitAPI 动态展示。',
        '基于 Inno Setup + bat 的自动化打包部署脚本，定时任务打包，部署耗时 -40%。',
      ],
    },
    {
      name: 'Revit 协同插件系统',
      title: 'Revit 协同插件系统与 Web 应用',
      company: '浙江慧远工程数据技术',
      role: '主程序 · 研发中心',
      period: '慧远任职期间',
      location: '浙江杭州',
      stack: ['C#', 'WPF', 'Revit Server', 'HTTP', 'Java 后端', 'TreeView', 'Canvas'],
      description:
        '主导技术选型与 SDK 协同方案，基于 Revit Server 开发协同 API，WPF 客户端通过 HTTP 与 Java 后端联动，解决 Revit 插件与 Web 应用之间的数据同步与功能协同问题。',
      highlights: [
        '封装 TreeView 嵌套树与 Canvas 绘图控件，结合 HTTP 异步加载 Web 端数据，用户操作效率 +20%。',
        '可停靠窗口结合 HTTP 异步动态加载 + 动态右键菜单，提升 WPF / Web 协同体验。',
        '负责协同接口调研与文档编写，明确 WPF / Java 后端的数据契约与 HTTP 调用规范。',
        '与后端协作编写测试用例与联调文档，保障 HTTP 接口稳定性，降低集成风险。',
      ],
    },
    {
      name: '工程建设管理平台',
      title: '工程建设管理平台（B/S）',
      company: '浙江慧远工程数据技术',
      role: '后端开发工程师 · 研发中心',
      period: '慧远任职早期',
      location: '浙江杭州',
      stack: ['Spring Boot', 'Spring Security', '.NET Core', 'GraphQL', 'GitLab CI/CD', 'MySQL'],
      description:
        '参与产品调研与数据库表结构设计，独立负责上传、短信、登录、权限、组织架构等核心模块，沉淀脚手架与代码生成工具链。',
      highlights: [
        '三范式优化数据关系，常用查询速度 +15%。',
        '封装转换器、全局校验、服务注册、缓存预热、事件总线等脚手架，开发效率 +30%，新项目启动时间 -20%。',
        '统一 RESTful / GraphQL HTTP 规范，编写 Maven 插件从表结构与模板自动生成 Controller / Service / Mapper，重复代码 -50%。',
        '开发并维护 GitLab CI/CD 部署工具，部署耗时 -50%，部署错误率 -15%。',
        '基于 .NET Core 开发路线数据解析服务，承接结构化数据的存储与 HTTP 传输。',
      ],
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
      company: '牛股王',
      role: 'PC 端开发工程师',
      period: '2026-06 - 至今',
      location: '浙江杭州',
      logo: 'niuguwang.png',
      highlights: [
        '负责牛股王 PC 客户端的日常维护、性能优化与新功能开发，保障现有桌面端业务持续稳定迭代。',
        '主导新业务产线"量化业务"PC 端从 0 到 1 的建设：架构搭建、核心模块开发、服务端联调。',
        '与产品、服务端、量化策略团队协同，明确桌面端在量化交易工作流中的能力边界与交互方案。',
      ],
    },
    {
      company: '不鸣科技',
      role: '自研引擎工具链开发工程师 / ET-引擎工具组',
      period: '2026-03 - 2026-05',
      location: '浙江杭州',
      logo: 'booming.png',
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
      logo: 'huiyuan.png',
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
