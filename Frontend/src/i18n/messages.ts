import type {
  ExperienceItem,
  Project,
  WorkProject,
} from '../types/profile'

export type Locale = 'zh' | 'en'

const zh = {
  // skip link
  'a11y.skip': '跳到主要内容',

  // nav
  'nav.home': '首页',
  'nav.projects': '项目经历',
  'nav.opensource': '开源',
  'nav.experience': '工作经历',
  'nav.nuget': 'NuGet',
  'nav.contact': '联系',
  'nav.brand.sub': '/ 小窗同学',

  // tooltips
  'tt.nav.home': '回到首页',
  'tt.nav.projects': '查看工作中的项目经历',
  'tt.nav.opensource': '查看 GitHub 开源仓库',
  'tt.nav.experience': '查看工作经历时间线',
  'tt.nav.nuget': '查看已发布的 NuGet 组件',
  'tt.nav.contact': '跳转至首页联系方式',
  'tt.brand': '回到首页',
  'tt.lang.toggle': '切换语言 (中文 / English)',
  'tt.hero.cta.about': '滚动到下面 我是谁 部分',
  'tt.hero.cta.github': '打开我的 GitHub 主页 (新窗口)',
  'tt.hero.pulse': '滚动到底部联系方式',
  'tt.entry.projects': '进入项目经历页',
  'tt.entry.opensource': '进入开源页',
  'tt.entry.experience': '进入工作经历页',
  'tt.entry.nuget': '进入 NuGet 页',
  'tt.contact.email': '通过默认邮件客户端写邮件给我',
  'tt.contact.github': '打开我的 GitHub 主页 (新窗口)',
  'tt.channel.copy': '点击复制',
  'tt.channel.open': '在新窗口打开',
  'tt.nuget.refresh': '重新拉取最新下载数据',
  'tt.nuget.refresh.with.time': '上次更新 {time}',
  'tt.nuget.item': '在 nuget.org 打开此包 (新窗口)',
  'tt.pager.back': '返回首页',
  'tt.pager.next': '进入下一个章节',
  'tt.pager.back.exp': '返回工作经历页',
  'tt.pager.back.opensource': '返回开源页',
  'tt.pager.next.opensource': '前往开源页',
  'tt.pager.next.nuget': '前往 NuGet 页',
  'tt.os.open': '在 GitHub 打开 {name} (新窗口)',

  // hero
  'hero.eyebrow.status': '在职 · 接商业合作',
  'hero.eyebrow.tech': '// c# · wpf · 桌面工具链',
  'hero.h1.lead': '打开一扇',
  'hero.h1.accent': '清晰',
  'hero.h1.tail': '的小窗。',
  'hero.summary.name': '小窗同学 / 苏畅',
  'hero.summary.role': 'C# 中级开发工程师',
  'hero.summary.years': '3.5',
  'hero.summary.expBefore': '年工作经验，主要技术栈 C# / WPF / Avalonia / C++。目前在',
  'hero.summary.companyName': '上海海能证券投资顾问有限公司',
  'hero.summary.expAfter': '负责旗下产品 牛股王 的 PC 客户端维护与新功能开发，主攻新业务产线"量化业务" PC 端。',
  'hero.cta.about': '了解我',
  'hero.cta.github': 'GitHub',

  // hero meta
  'meta.label.location': '坐标',
  'meta.label.now': '当下',
  'meta.label.years': '经验',
  'meta.label.github': 'GitHub',
  'meta.value.location': '浙江杭州',
  'meta.value.now': '牛股王 · PC 端 / 量化业务',
  'meta.value.years': '3.5 年',
  'meta.value.github': '@ViewSuSu',

  // section headings
  'section.about.h2': '我是谁',
  'section.about.index': '— intro',
  'section.focus.h2': '关注的方向',
  'section.focus.index': '— focus',
  'section.work.h2': '探索',
  'section.work.index': '— work',
  'section.contact.h2': '聊点什么',
  'section.contact.index': '— contact',

  // entry cards
  'entry.projects.title': '项目经历',
  'entry.projects.excerpt': '在公司任职期间主导或参与的工程项目，按领域归类。',
  'entry.opensource.title': '开源',
  'entry.opensource.excerpt': 'GitHub 上 pin 的 6 个仓库，覆盖控件库、插件与桌面应用。',
  'entry.experience.title': '工作经历',
  'entry.experience.excerpt': '三段工作经历按时间排列，每段下方完整展开任职期间的项目经历。',
  'entry.nuget.title': 'NuGet 组件',
  'entry.nuget.excerpt': '发布在 NuGet 的 C# / WPF / Revit 组件，下载量实时拉取。',
  'entry.enter': '进入',

  // contact block
  'contact.lead':
    '桌面端项目、WPF 控件库、Revit / CAD 插件或 AI 工具链相关的合作和交流，邮我，或在任意平台找我都可以。',
  'channel.email': '邮箱',
  'channel.github': 'GitHub',
  'channel.bilibili': '哔哩哔哩',
  'channel.qq': 'QQ',
  'channel.wechat': '微信',
  'channel.phone': '电话',
  'channel.copy': '复制',

  // footer
  'footer.copy': '© {year}',
  'footer.brand': 'ViewSuSu',
  'footer.alias': '小窗同学',

  // experience page
  'exp.index': '01 / 工作经历',
  'exp.h1': '工作经历',
  'exp.lead':
    '三段工作经历按时间倒序排列，每段下方完整展开任职期间主导或参与的项目经历。出于保密考虑，下文仅描述角色、做了什么、技术栈与可量化的成果，不涉及客户信息与内部界面。',
  'exp.projects.eyebrow': '— projects',
  'exp.projects.h4': '项目经历',
  'exp.project.role': '角色',
  'exp.project.period': '周期',
  'exp.project.location': '坐标',
  'exp.pager.back': '← 回首页',
  'exp.pager.next': '02 / 开源 →',

  // opensource page
  'os.index': '02 / 开源',
  'os.h1': '开源项目',
  'os.lead.prefix': '固定在 GitHub 主页的 6 个仓库，全部 C# 系。覆盖控件库、Revit / CAD 插件、3D 可视化与桌面应用。',
  'os.lead.stats': '{count} repos · {stars}★',
  'os.repo.stars': '星标 {n}',
  'os.repo.forks': '分支 {n}',
  'os.repo.thumb': '{title} 缩略图',
  'os.repo.link': '查看仓库',
  'os.pager.back': '← 01 / 工作经历',
  'os.pager.next': '03 / NuGet →',

  // nuget page
  'nuget.index': '03 / NuGet',
  'nuget.h1': 'NuGet 组件',
  'nuget.lead': '已发布的 C# / WPF / Revit NuGet 组件包。',
  'nuget.stats.count': '已发布组件',
  'nuget.stats.downloads': '累计下载',
  'nuget.state.loading': '正在拉取 NuGet 数据…',
  'nuget.state.error': '拉取失败：{msg}',
  'nuget.state.retry': '重试',
  'nuget.refresh.label.loading': '刷新中',
  'nuget.refresh.label': '刷新',
  'nuget.metric.downloads': 'downloads',
  'nuget.metric.authors': 'authors',
  'nuget.badge.alt': '{id} downloads badge',
  'nuget.pager.back': '← 02 / 开源',
  'nuget.pager.next': '回首页 →',
}

const en: typeof zh = {
  // skip link
  'a11y.skip': 'Skip to main content',

  // nav
  'nav.home': 'Home',
  'nav.projects': 'Projects',
  'nav.opensource': 'Open Source',
  'nav.experience': 'Experience',
  'nav.nuget': 'NuGet',
  'nav.contact': 'Contact',
  'nav.brand.sub': '/ Susu',

  // tooltips
  'tt.nav.home': 'Back to homepage',
  'tt.nav.projects': 'See projects shipped at work',
  'tt.nav.opensource': 'Browse my open-source repos on GitHub',
  'tt.nav.experience': 'View work history timeline',
  'tt.nav.nuget': 'Browse my published NuGet packages',
  'tt.nav.contact': 'Jump to contact section on homepage',
  'tt.brand': 'Back to homepage',
  'tt.lang.toggle': 'Switch language (中文 / English)',
  'tt.hero.cta.about': 'Scroll to the About Me section',
  'tt.hero.cta.github': 'Open my GitHub profile (new tab)',
  'tt.hero.pulse': 'Scroll to contact section',
  'tt.entry.projects': 'Open Projects page',
  'tt.entry.opensource': 'Open Open Source page',
  'tt.entry.experience': 'Open Experience page',
  'tt.entry.nuget': 'Open NuGet page',
  'tt.contact.email': 'Email me via your default mail client',
  'tt.contact.github': 'Open my GitHub profile (new tab)',
  'tt.channel.copy': 'Click to copy',
  'tt.channel.open': 'Open in new tab',
  'tt.nuget.refresh': 'Refresh download stats',
  'tt.nuget.refresh.with.time': 'Updated at {time}',
  'tt.nuget.item': 'Open this package on nuget.org (new tab)',
  'tt.pager.back': 'Back to homepage',
  'tt.pager.next': 'Go to next section',
  'tt.pager.back.exp': 'Back to experience page',
  'tt.pager.back.opensource': 'Back to open source page',
  'tt.pager.next.opensource': 'Go to open source page',
  'tt.pager.next.nuget': 'Go to NuGet page',
  'tt.os.open': 'Open {name} on GitHub (new tab)',

  // hero
  'hero.eyebrow.status': 'Employed · open to consulting',
  'hero.eyebrow.tech': '// c# · wpf · desktop tooling',
  'hero.h1.lead': 'Open a',
  'hero.h1.accent': 'clearer',
  'hero.h1.tail': 'little window.',
  'hero.summary.name': 'Susu / Su Chang',
  'hero.summary.role': 'Mid-level C# Engineer',
  'hero.summary.years': '3.5',
  'hero.summary.expBefore':
    ' years of experience. Main stack: C# / WPF / Avalonia / C++. Currently at',
  'hero.summary.companyName': 'Shanghai Haineng Securities Investment Advisory Co., Ltd.',
  'hero.summary.expAfter':
    ', maintaining the Niuguwang PC client and shipping the new "Quant" product line on desktop.',
  'hero.cta.about': 'About me',
  'hero.cta.github': 'GitHub',

  // hero meta
  'meta.label.location': 'Location',
  'meta.label.now': 'Now',
  'meta.label.years': 'Experience',
  'meta.label.github': 'GitHub',
  'meta.value.location': 'Hangzhou, China',
  'meta.value.now': 'Niuguwang · PC client / Quant',
  'meta.value.years': '3.5 yrs',
  'meta.value.github': '@ViewSuSu',

  // section headings
  'section.about.h2': 'Who am I',
  'section.about.index': '— intro',
  'section.focus.h2': 'What I focus on',
  'section.focus.index': '— focus',
  'section.work.h2': 'Explore',
  'section.work.index': '— work',
  'section.contact.h2': 'Say hi',
  'section.contact.index': '— contact',

  // entry cards
  'entry.projects.title': 'Projects',
  'entry.projects.excerpt':
    'Engineering projects led or contributed to during my full-time roles, grouped by domain.',
  'entry.opensource.title': 'Open Source',
  'entry.opensource.excerpt':
    'Six pinned GitHub repos — control libraries, plugins, and desktop apps.',
  'entry.experience.title': 'Experience',
  'entry.experience.excerpt':
    'Three roles, listed chronologically — each one expands into the projects shipped during that role.',
  'entry.nuget.title': 'NuGet Packages',
  'entry.nuget.excerpt':
    'C# / WPF / Revit packages on NuGet. Download counts fetched live.',
  'entry.enter': 'Enter',

  // contact block
  'contact.lead':
    'For desktop projects, WPF controls, Revit / CAD plugins, or AI-tooling work — email me, or reach me on any platform below.',
  'channel.email': 'Email',
  'channel.github': 'GitHub',
  'channel.bilibili': 'Bilibili',
  'channel.qq': 'QQ',
  'channel.wechat': 'WeChat',
  'channel.phone': 'Phone',
  'channel.copy': 'Copy',

  // footer
  'footer.copy': '© {year}',
  'footer.brand': 'ViewSuSu',
  'footer.alias': 'Susu',

  // experience page
  'exp.index': '01 / Experience',
  'exp.h1': 'Work Experience',
  'exp.lead':
    'Three roles in reverse-chronological order. Each role expands into the projects I led or contributed to. For confidentiality I describe role, work, stack, and measurable outcomes only — no client names or internal screens.',
  'exp.projects.eyebrow': '— projects',
  'exp.projects.h4': 'Projects',
  'exp.project.role': 'Role',
  'exp.project.period': 'Period',
  'exp.project.location': 'Location',
  'exp.pager.back': '← Home',
  'exp.pager.next': '02 / Open Source →',

  // opensource page
  'os.index': '02 / Open Source',
  'os.h1': 'Open Source',
  'os.lead.prefix':
    'Six repos pinned on my GitHub profile — all C#. Control libraries, Revit / CAD plugins, 3D visualization, and desktop apps.',
  'os.lead.stats': '{count} repos · {stars}★',
  'os.repo.stars': '{n} stars',
  'os.repo.forks': '{n} forks',
  'os.repo.thumb': '{title} thumbnail',
  'os.repo.link': 'View repo',
  'os.pager.back': '← 01 / Experience',
  'os.pager.next': '03 / NuGet →',

  // nuget page
  'nuget.index': '03 / NuGet',
  'nuget.h1': 'NuGet Packages',
  'nuget.lead': 'Published C# / WPF / Revit NuGet packages.',
  'nuget.stats.count': 'Packages',
  'nuget.stats.downloads': 'Total downloads',
  'nuget.state.loading': 'Fetching NuGet data…',
  'nuget.state.error': 'Failed: {msg}',
  'nuget.state.retry': 'Retry',
  'nuget.refresh.label.loading': 'Refreshing',
  'nuget.refresh.label': 'Refresh',
  'nuget.metric.downloads': 'downloads',
  'nuget.metric.authors': 'authors',
  'nuget.badge.alt': '{id} downloads badge',
  'nuget.pager.back': '← 02 / Open Source',
  'nuget.pager.next': 'Home →',
}

export const messages: Record<Locale, typeof zh> = { zh, en }

export type MessageKey = keyof typeof zh

// Locale-aware homepage profile content (intro paragraphs, focus areas, beliefs).

export interface HomeFocusArea {
  title: string
  stack: string
  description: string
  keywords: string[]
  icon: 'stack' | 'desktop' | 'ai' | 'api'
}

export interface HomeBelief {
  title: string
  body: string
}

export interface HomeChannel {
  key: string
  label: string
  value: string
}

interface HomeProfileBundle {
  intro: string[]
  focusAreas: HomeFocusArea[]
  beliefs: HomeBelief[]
}

const homeProfile: Record<Locale, HomeProfileBundle> = {
  zh: {
    intro: [
      'C# 中级开发工程师，3.5 年工作经验。主要技术栈 C# / WPF / Avalonia / C++。目前在 上海海能证券投资顾问有限公司 负责旗下产品 牛股王 的 PC 客户端维护与新功能开发，主攻新业务产线"量化业务" PC 端。',
      '熟悉 WPF / Avalonia 桌面端开发，熟悉基于 MVVM 的大型桌面端应用方法论，熟练使用 Prism、CommunityToolkit 等主流框架，熟悉自定义控件。',
      '擅长借助 Claude Code、OpenCode、Copilot 和 MCP 等 AI 编程工具解决实际工程问题；探索过 Figma 原型还原到 WPF 界面的 AI 工作流，提升设计与前端的对接效率。',
      '另有 1.5 年全栈开发经历，熟悉 C/S、B/S 架构与 Spring Boot、.NET Core、HTTP / GraphQL、WebAPI、Nginx 等技术栈。热爱编程，开源项目累计 100+ Star，NuGet 组件累计 4w+ 下载量。',
    ],
    focusAreas: [
      {
        title: '主要技术栈',
        stack: 'C# / WPF / Avalonia / C++',
        description:
          '围绕桌面客户端、工程插件和工具链开发，长期使用 C# 与 WPF 构建复杂业务界面。',
        keywords: ['C#', 'WPF', 'Avalonia', 'C++'],
        icon: 'stack',
      },
      {
        title: '桌面应用开发',
        stack: 'MVVM / Prism / 自定义控件',
        description:
          '参与大型桌面应用与工程软件研发，关注架构拆分、模块边界、性能和可维护性。',
        keywords: ['MVVM', 'Prism', 'CommunityToolkit', 'Canvas'],
        icon: 'desktop',
      },
      {
        title: 'AI 工程效率',
        stack: 'Claude Code / OpenCode / Copilot / MCP',
        description:
          '把 AI 编程工具用于真实工程问题，覆盖代码生成、调试测试、设计稿还原和组件迭代。',
        keywords: ['Claude Code', 'OpenCode', 'Copilot', 'MCP'],
        icon: 'ai',
      },
      {
        title: 'Web/API 与工程化',
        stack: 'C/S / B/S / .NET Core / GraphQL',
        description:
          '具备全栈协作经验，能够对接服务端接口、数据库和部署流程，支撑桌面端与业务系统联动。',
        keywords: ['WebAPI', 'GraphQL', 'SQL Server', 'GitLab CI/CD'],
        icon: 'api',
      },
    ],
    beliefs: [
      { title: '先把问题搞清楚', body: '宁可在白板前多花一小时，也不要写 800 行还在原地踏步。需求模糊的代码，永远在重写。' },
      { title: '原生体验是底线', body: '桌面应用不该比网页慢、不该比浏览器卡。能用 60fps，就不接受 30fps；能用 50MB，就不要 500MB。' },
      { title: '让代码足够无聊', body: '克制的抽象、清晰的命名、显式的依赖。聪明的代码三个月后没人看得懂，"无聊"的代码两年后还在跑。' },
      { title: '工具，而不是平台', body: '小工具解决具体问题；大平台解决简历问题。我倾向于做前者，再看是否真的有必要做后者。' },
    ],
  },
  en: {
    intro: [
      'Mid-level C# engineer with 3.5 years of experience. Main stack: C# / WPF / Avalonia / C++. Currently at Shanghai Haineng Securities Investment Advisory Co., Ltd., maintaining its Niuguwang PC client and driving the new "Quant" desktop product from scratch.',
      'Hands-on with WPF and Avalonia desktop development; comfortable with large-scale MVVM architectures, Prism, CommunityToolkit, and custom controls.',
      'Heavy user of AI coding tools — Claude Code, OpenCode, Copilot, and MCP — for real engineering tasks. Built a Figma-to-WPF reproduction pipeline to tighten the design-to-frontend loop.',
      'Plus 1.5 years of full-stack background across C/S and B/S apps with Spring Boot, .NET Core, HTTP / GraphQL, WebAPI, and Nginx. I love shipping — 100+ stars across open-source repos and 40k+ NuGet downloads.',
    ],
    focusAreas: [
      {
        title: 'Core Stack',
        stack: 'C# / WPF / Avalonia / C++',
        description:
          'Desktop clients, engineering plugins, and tooling — built around C# and WPF for complex business UIs.',
        keywords: ['C#', 'WPF', 'Avalonia', 'C++'],
        icon: 'stack',
      },
      {
        title: 'Desktop App Engineering',
        stack: 'MVVM / Prism / Custom Controls',
        description:
          'Shipping large desktop apps and engineering software. I care about architecture seams, module boundaries, performance, and long-term maintenance.',
        keywords: ['MVVM', 'Prism', 'CommunityToolkit', 'Canvas'],
        icon: 'desktop',
      },
      {
        title: 'AI-Powered Productivity',
        stack: 'Claude Code / OpenCode / Copilot / MCP',
        description:
          'Pointing AI coding tools at real engineering problems — codegen, debugging, design-to-code, and library iteration.',
        keywords: ['Claude Code', 'OpenCode', 'Copilot', 'MCP'],
        icon: 'ai',
      },
      {
        title: 'Web / API & DevX',
        stack: 'C/S / B/S / .NET Core / GraphQL',
        description:
          'Full-stack background — comfortable wiring desktop clients to backends, databases, and CI/CD.',
        keywords: ['WebAPI', 'GraphQL', 'SQL Server', 'GitLab CI/CD'],
        icon: 'api',
      },
    ],
    beliefs: [
      {
        title: 'Understand the problem first',
        body:
          "I'd rather spend an extra hour at the whiteboard than write 800 lines and end up nowhere. Code built on fuzzy requirements is always rewrite candidate.",
      },
      {
        title: 'Native feel is the baseline',
        body:
          "Desktop apps shouldn't be slower than a webpage or jankier than a browser. If 60 fps is possible, 30 fps is unacceptable. If 50 MB works, don't ship 500 MB.",
      },
      {
        title: 'Make the code boring',
        body:
          'Restrained abstractions, clear names, explicit dependencies. Clever code is unreadable in three months. "Boring" code still runs two years later.',
      },
      {
        title: 'Tools, not platforms',
        body:
          'Small tools solve real problems; big platforms solve résumé problems. I lean toward the former, then ask whether the latter is actually justified.',
      },
    ],
  },
}

export function getHomeProfile(locale: Locale): HomeProfileBundle {
  return homeProfile[locale]
}

// Channel labels by key — used to localize contact channels while keeping
// the same icons and values from the source profile.
export function getChannelLabel(locale: Locale, key: string): string {
  const dict = messages[locale]
  switch (key) {
    case 'email':
      return dict['channel.email']
    case 'github':
      return dict['channel.github']
    case 'bilibili':
      return dict['channel.bilibili']
    case 'qq':
      return dict['channel.qq']
    case 'wechat':
      return dict['channel.wechat']
    case 'phone':
      return dict['channel.phone']
    default:
      return key
  }
}

// =========================================================
// Sub-page data overlays — English translations of profile content,
// keyed by primary identifier. zh locale returns source as-is.
// =========================================================

interface ExperienceOverlay {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

interface WorkProjectOverlay {
  name: string
  title: string
  company: string
  role: string
  period: string
  location: string
  description: string
  highlights: string[]
}

interface OpenSourceOverlay {
  title: string
  description: string
  category: string
  impact: string
}

// Experiences keyed by source company name (zh).
const experienceEn: Record<string, ExperienceOverlay> = {
  '上海海能证券投资顾问有限公司': {
    company: 'Shanghai Haineng Securities Investment Advisory',
    role: 'PC Client Engineer · Niuguwang',
    period: '2026-06 – Present',
    location: 'Hangzhou, China',
    highlights: [
      'Own day-to-day maintenance, performance tuning, and feature work on the Niuguwang PC client — keeping existing desktop business shipping steadily.',
      'Lead the new "Quant" product line on PC from zero to one: architecture, core modules, and server integration.',
      'Partner with product, backend, and quant-strategy teams to define what the desktop client must own in the quant-trading workflow.',
    ],
  },
  '不鸣科技': {
    company: 'Booming Tech',
    role: 'Engine Tooling Engineer / ET Engine Tools Group',
    period: '2026-03 – 2026-05',
    location: 'Hangzhou, China',
    highlights: [
      'Built the C# / WPF UI/UX platform framework inside the Chaos engine toolchain.',
      'Drove the AI-assisted Figma → WPF translation and the automated config-editing pipeline.',
      'Tuned load, response, and caching strategies of complex WPF UIs.',
    ],
  },
  '浙江慧远工程数据技术有限公司': {
    company: 'Zhejiang Huiyuan Engineering Data',
    role: 'Lead Engineer',
    period: '2023-06 – 2026-02',
    location: 'Hangzhou, China',
    highlights: [
      'Owned the C# / .NET / WPF desktop architecture — MVVM, Prism, DI, and the usual design patterns — supporting complex engineering workflows.',
      'Drove core modules, task breakdown, and code structure across the full delivery cycle: discovery, prototype, build, test, ship.',
      'Wrapped CommunityToolkit, HandyControl, custom controls, and Canvas drawing into a reusable component library — cutting duplicate work and ongoing maintenance.',
      'Owned the AutoCAD / Revit plugin track plus CAD drawing parsing — connecting desktop, B/S, and cloud-platform data.',
      'Stood up internal NuGet hosting, code review, coding standards, and automated packaging; mentored interns and shaped team workflows.',
    ],
  },
}

// Work projects keyed by source project name (zh).
const workProjectEn: Record<string, WorkProjectOverlay> = {
  '牛股王量化 · PC 客户端': {
    name: 'Niuguwang Quant · PC Client',
    title: 'Quant product line PC · zero → one',
    company: 'Shanghai Haineng Securities Investment Advisory',
    role: 'PC Client Engineer',
    period: '2026-06 – Present',
    location: 'Hangzhou, China',
    description:
      "Took the company's new Quant product line from zero on desktop — assembling the client architecture, building core modules, wiring up quant-strategy and server data, and shipping the desktop UX for quant trading.",
    highlights: [
      'Owned architecture choices and directory layout for the Quant PC client; built reusable infrastructure.',
      'Built core modules: market & strategy data ingest, strategy management, and the quant-trading workflow UI.',
      'Co-designed contracts with backend and quant-strategy teams to keep desktop and strategy services stably in sync.',
    ],
  },
  '牛股王 PC 客户端': {
    name: 'Niuguwang PC Client',
    title: 'Maintenance and feature work on the Niuguwang PC client',
    company: 'Shanghai Haineng Securities Investment Advisory',
    role: 'PC Client Engineer',
    period: '2026-06 – Present',
    location: 'Hangzhou, China',
    description:
      'Day-to-day maintenance, performance tuning, and feature work on the Niuguwang PC client — keeping existing desktop releases stable while landing new product work on PC.',
    highlights: [
      'Ship bug fixes, perf tuning, and version iterations on the PC client.',
      'Drive new product asks to PC: review, dev, self-test, staged rollout.',
      'Refactor legacy code module-by-module to bring down long-term maintenance cost.',
    ],
  },
  'Chaos 引擎 · UI/UX 框架': {
    name: 'Chaos Engine · UI/UX Framework',
    title: 'Chaos engine toolchain · C# / WPF UI/UX framework',
    company: 'Booming Tech',
    role: 'Engine Tooling Engineer · ET Engine Tools Group',
    period: '2026-03 – 2026-05',
    location: 'Hangzhou, China',
    description:
      'Led the C# / WPF UI/UX platform framework inside the Chaos engine toolchain — automating Figma → XAML translation and wiring AI tools into the layout, sizing, and design-fidelity loop.',
    highlights: [
      'Figma → WPF reproduction pipeline: parse Figma layouts into spec-compliant XAML, with an MCP + Claude Code feedback loop.',
      'Stood up dockable windows, dynamic loading, and custom controls to handle complex engine-tool interactions.',
      'UI dev cycle −20% and ~10% cost savings via automated codegen and asset reuse.',
      'Core UI perf work: −15% memory, −30% list/table response time, and CPU-heavy ops parallelized.',
    ],
  },
  '大型 WPF 装饰行业插件平台': {
    name: 'WPF Interior-Decor Plugin Platform',
    title: 'Large WPF plugin platform for interior decoration (~500-day program)',
    company: 'Zhejiang Huiyuan Engineering Data',
    role: 'Lead Engineer · R&D Center',
    period: '~500-day program',
    location: 'Hangzhou, China',
    description:
      'Led a large WPF plugin platform for the interior-decoration industry. Built and led a team of 2 engineers + 2 interns across the full lifecycle — discovery, prototype, architecture, build, test, ship. Personal code contribution ~70%.',
    highlights: [
      'Modular architecture: maintainability and extensibility +~30%.',
      'Multi-version config system supporting multi-env deploys: deploy time −20%.',
      'CAD-to-model main line: AutoCAD API + in-house geometry / pattern recognition — walls, beams, slabs, columns, and MEP runs identified at 95% accuracy.',
      'Automated CAD → Revit conversion: manual touch-up reduced by ~50%.',
      'Custom Canvas 2D controls for wall/floor-tile layout, rectangle bin packing, and live Revit API previews.',
      'Inno Setup + bat-based automated packaging on a schedule: deploy time −40%.',
    ],
  },
  'Revit 协同插件系统': {
    name: 'Revit Collaboration Plugin',
    title: 'Revit collaboration plugin + web companion app',
    company: 'Zhejiang Huiyuan Engineering Data',
    role: 'Lead Engineer · R&D Center',
    period: 'During tenure',
    location: 'Hangzhou, China',
    description:
      'Owned the tech selection and SDK collaboration strategy. Built collaboration APIs on Revit Server; the WPF client talks to a Java backend over HTTP — solving data sync and feature parity between the Revit plugin and the web app.',
    highlights: [
      'Wrapped a nested TreeView and Canvas drawing controls; combined with async HTTP loading of web-side data. User efficiency +~20%.',
      'Dockable windows + async dynamic loading + dynamic context menus to tighten the WPF ↔ web experience.',
      'Drove API discovery and docs; nailed down data contracts and HTTP conventions between the WPF client and the Java backend.',
      'Co-authored test cases and integration docs with backend — keeping HTTP endpoints reliable and integration risk low.',
    ],
  },
  '工程建设管理平台': {
    name: 'Construction-Management Platform',
    title: 'Construction-management platform (B/S)',
    company: 'Zhejiang Huiyuan Engineering Data',
    role: 'Backend Engineer · R&D Center',
    period: 'Early tenure',
    location: 'Hangzhou, China',
    description:
      'Joined product discovery and database schema design. Owned upload, SMS, login, RBAC, and org-structure modules end-to-end; built shared scaffolding and codegen tools.',
    highlights: [
      '3NF schema cleanup: hot-path query speed +~15%.',
      'Shared scaffolding (converters, global validation, service registration, cache warm-up, event bus): dev speed +30%, new-project bootstrap −20%.',
      'Unified RESTful / GraphQL HTTP conventions; Maven plugin that generates Controllers / Services / Mappers from schema + templates: duplicate code −50%.',
      'Built and maintained GitLab CI/CD deploy tooling: deploy time −50%, deploy error rate −15%.',
      'Built a .NET Core route-data parsing service powering structured-data storage and HTTP transport.',
    ],
  },
}

// Open-source projects keyed by repo name.
const openSourceEn: Record<string, OpenSourceOverlay> = {
  BlackGoldAncientSword: {
    title: 'BlackGold Ancient Sword · Naraka Bladepoint companion',
    description:
      'Windows-side desktop helper for Naraka: Bladepoint. Auto-detects game state, OCRs teammate handles on the hero-select screen, pulls live stats + ranks, and shows team data side-by-side. OBS-aware capture + PaddleOCR + system tray + i18n.',
    category: 'Desktop App · Game Companion',
    impact:
      'Self-contained .NET 10 release bundling PaddleOCR, OpenCV, Intel MKL and friends; covers stats lookup, team detection, match lock, and the tray workflow end-to-end.',
  },
  'NarakaBladepoint-WPF': {
    title: 'Naraka: Bladepoint client · WPF reimplementation',
    description:
      'A WPF + Prism reimplementation of the Naraka: Bladepoint Unity client — visual feel, animation, and interactions reproduced on .NET 6. Every custom control hand-written, zero third-party UI library, strict MVVM and module boundaries.',
    category: 'WPF · Game UI',
    impact:
      "★30 in the wild — a case study in reproducing a modern game client's look and feel with plain WPF.",
  },
  'Su.WPF.TreeViewEx': {
    title: 'WPF / Avalonia TreeView wrapper',
    description:
      'Object-oriented TreeView for WPF (with an Avalonia variant on the same design) that hides templates, bindings, and event plumbing — you only think about your data. Tri-state checkboxes, context menus, hotkeys, multi-select, and node copy built in.',
    category: 'WPF · Control Library',
    impact:
      'Zero third-party deps; one design covers TreeView on both WPF and Avalonia.',
  },
  'Su.AutoCAD2Revit': {
    title: 'Read DWG inside Revit',
    description:
      'A Teigha-based Revit plugin extension that reads DWG drawings (linked sheets or local files) without installing or opening AutoCAD. Handles ImportInstance Transform, nested-block matrices, and Revit levels — returns coordinates already in Revit world space.',
    category: 'BIM · Automation',
    impact:
      'On NuGet; supports Revit 2013–2024, covering coordinate conversion, block decomposition, and text/layer extraction.',
  },
  'Su.Revit.HelixToolkit.SharpDX': {
    title: 'High-performance 3D visualization for Revit',
    description:
      'A 3D visualization toolkit for Revit plugins, built on HelixToolkit.Wpf.SharpDX. Drop-in interactive 3D viewports inside Revit add-ins — large mesh budgets, mouse interaction, Revit ↔ Helix coordinate conversion, and memory cleanup.',
    category: 'Revit · 3D Visualization',
    impact:
      'Brings HelixToolkit.SharpDX GPU rendering into the Revit plugin workflow.',
  },
  'Su.Revit.UI.StatusBarEx': {
    title: 'Revit status-bar progress',
    description:
      'A progress-bar component for Revit add-ins, extending ricaun.Revit.UI.StatusBar — focused on legacy Revit support, Chinese UI quirks, and cancelling long-running tasks. Covers Revit 2011 through 2026.',
    category: 'Revit · UI Component',
    impact:
      'One call gets you a Revit status-bar progress bar with a cancel button and themeable look.',
  },
}

export function localizeExperience(item: ExperienceItem, locale: Locale): ExperienceItem {
  if (locale === 'zh') return item
  const overlay = experienceEn[item.company]
  if (!overlay) return item
  return { ...item, ...overlay }
}

export function localizeWorkProject(item: WorkProject, locale: Locale): WorkProject {
  if (locale === 'zh') return item
  const overlay = workProjectEn[item.name]
  if (!overlay) return item
  return { ...item, ...overlay }
}

export function localizeOpenSourceProject(item: Project, locale: Locale): Project {
  if (locale === 'zh') return item
  const overlay = openSourceEn[item.name]
  if (!overlay) return item
  return { ...item, ...overlay }
}

// Simple {placeholder} interpolation. Tolerates missing keys silently.
export function format(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ''))
}

// Locale-aware document titles for router.
export function getRouteTitle(name: string, locale: Locale): string {
  const brand = locale === 'zh' ? '小窗同学 · ViewSuSu' : 'Susu · ViewSuSu'
  const dict = messages[locale]
  switch (name) {
    case 'home':
      return brand
    case 'experience':
      return `${dict['exp.h1']} · ${brand}`
    case 'opensource':
      return `${dict['os.h1']} · ${brand}`
    case 'nuget':
      return `${dict['nuget.h1']} · ${brand}`
    default:
      return brand
  }
}
