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
    '我把复杂的桌面应用开发流程拆开、重组，再做成清晰、稳定、可维护的工具窗口。小窗同学这个名字，代表我对 C# 桌面端、WPF、AI 工具链和 BIM/CAD 自动化的长期表达。',
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
      name: 'NarakaBladepoint-WPF',
      title: '永劫无间客户端 WPF 复刻',
      description: '一个用 .NET 6、WPF 和 Prism 复刻《永劫无间》客户端 UI/UX 的项目，目标是用 WPF 还原 Unity 游戏客户端的界面质感、动画和交互体验。',
      url: 'https://github.com/ViewSuSu/NarakaBladepoint-WPF',
      category: 'WPF Game UI',
      impact: '项目严格遵循 MVVM，使用 Prism 做模块化分层，所有自定义控件纯手写且不依赖第三方 UI 库。',
      stars: 27,
      forks: 1,
      tags: ['C#', 'WPF', '.NET 6', 'Prism', 'MVVM', '自定义控件'],
    },
    {
      name: 'Su.WPF.TreeViewEx',
      title: 'WPF TreeView 封装库',
      description: '面向 WPF TreeView 的完整封装库，提供面向对象的树节点操作方式，让开发者从复杂模板、数据绑定和事件处理中释放出来，专注业务逻辑。',
      url: 'https://github.com/ViewSuSu/Su.WPF.TreeViewEx',
      category: 'WPF 控件库',
      impact: '项目零第三方依赖，支持树结构管理、三态复选框、右键菜单、快捷键、样式配置、多选、节点复制和数据绑定。',
      stars: 26,
      forks: 3,
      tags: ['C#', 'WPF', 'TreeView', 'NuGet', '零依赖'],
    },
    {
      name: 'Su.Revit.UI.StatusBarEx',
      title: 'Revit 进度条封装组件',
      description: '专为 Revit 二次开发设计的进度条封装组件，基于 ricaun.Revit.UI.StatusBar 扩展，重点解决旧版本 Revit、中文 UI 和进度条可定制需求。',
      url: 'https://github.com/ViewSuSu/Su.Revit.UI.StatusBarEx',
      category: 'Revit UI 组件',
      impact: '项目支持 Revit 2011 到 Revit 2026，支持自定义选项和长耗时任务取消。',
      stars: 8,
      forks: 1,
      tags: ['C#', 'Revit', 'ProgressBar', 'NuGet', 'Revit 2011-2026'],
    },
    {
      name: 'Su.AutoCAD2Revit',
      title: 'AutoCAD 到 Revit 数据读取库',
      description: '基于 Teigha 的 Revit 插件扩展库，可在无需安装或打开 AutoCAD 的情况下读取 DWG 文件，包括 Revit 链接 CAD 图纸与本地 DWG。',
      url: 'https://github.com/ViewSuSu/Su.AutoCAD2Revit',
      category: 'BIM 自动化',
      impact: '项目围绕坐标转换、DWG 读取、块解析和图层信息提取展开。',
      stars: 10,
      forks: 2,
      tags: ['C#', 'AutoCAD', 'Revit', 'DWG', 'Teigha'],
    },
    {
      name: 'Su.Revit.HelixToolkit.SharpDX',
      title: 'Revit 高性能 3D 可视化工具库',
      description: '专为 Revit 插件开发设计的高性能 3D 可视化工具库，基于 HelixToolkit.Wpf.SharpDX，为 Revit 插件创建可交互的 3D 视图窗口。',
      url: 'https://github.com/ViewSuSu/Su.Revit.HelixToolkit.SharpDX',
      category: 'Revit 3D 可视化',
      impact: '项目支持海量三角面渲染、鼠标交互、Revit 与 Helix 坐标转换和内存释放优化。',
      stars: 8,
      forks: 4,
      tags: ['C#', 'Revit', 'HelixToolkit', 'SharpDX', '3D'],
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
      role: 'C# 桌面应用开发',
      period: '2023-06 - 2026-02',
      location: '浙江杭州',
      highlights: [
        '主导 WPF 桌面应用架构设计，使用 MVVM、Prism 和依赖注入提升可维护性。',
        '负责 AutoCAD/Revit 插件研发，实现桌面工具与业务系统、云平台的数据协同。',
        '建设内部工具、插件模块和工程化流程，提高团队研发效率。',
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
