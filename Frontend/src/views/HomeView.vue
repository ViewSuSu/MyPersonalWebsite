<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useClipboard } from '../composables/useClipboard'

const { profile } = useProfile()
const { copyToClipboard } = useClipboard()

const heroMeta = computed(() => {
  if (!profile.value) return []
  return [
    { label: '坐标', value: profile.value.location.replace('中国', '') },
    { label: '当下', value: '牛股王 · PC 端 / 量化业务' },
    { label: '经验', value: '3.5 年' },
    { label: 'GitHub', value: '@ViewSuSu' },
  ]
})

const entries = [
  {
    to: '/projects',
    num: '01',
    title: '项目经历',
    excerpt: '在公司任职期间主导或参与的工程项目,按领域归类。',
  },
  {
    to: '/opensource',
    num: '02',
    title: '开源',
    excerpt: 'GitHub 上 pin 的 6 个仓库,覆盖控件库、插件与桌面应用。',
  },
  {
    to: '/experience',
    num: '03',
    title: '工作经历',
    excerpt: '三段工作经历,按时间排列。',
  },
]

interface Channel {
  key: string
  label: string
  value: string
  icon: string
  href?: string
  external?: boolean
}

const baseUrl = import.meta.env.BASE_URL
const brandIcon = (name: string) => `${baseUrl}brand-icons/${name}.svg`

const channels = computed<Channel[]>(() => {
  if (!profile.value) return []
  const c = profile.value.contact
  return [
    { key: 'email', label: '邮箱', value: c.email, icon: brandIcon('mail') },
    { key: 'github', label: 'GitHub', value: '@ViewSuSu', icon: brandIcon('github'), href: c.gitHub, external: true },
    { key: 'bilibili', label: '哔哩哔哩', value: c.bilibili, icon: brandIcon('bilibili'), href: 'https://space.bilibili.com/381527816', external: true },
    { key: 'qq', label: 'QQ', value: c.qq, icon: brandIcon('qq') },
    { key: 'wechat', label: '微信', value: c.wechat, icon: brandIcon('wechat') },
    { key: 'phone', label: '电话', value: c.phone, icon: brandIcon('phone') },
  ]
})
</script>

<template>
  <div class="route-view" v-if="profile">
    <header id="home" class="hero">
      <figure class="hero-avatar" aria-hidden="true">
        <img :src="`${baseUrl}avatar.png`" alt="小窗同学 头像" width="96" height="96" />
        <span class="status-dot"></span>
      </figure>

      <p class="eyebrow">
        <RouterLink class="pulse pulse-link" :to="{ path: '/', hash: '#contact' }">
          <span class="pulse-dot" aria-hidden="true"></span>
          在职 · 接商业合作
          <span class="arrow" aria-hidden="true">↓</span>
        </RouterLink>
        <span>// c# · wpf · 桌面工具链</span>
      </p>

      <h1>
        打开一扇<br />
        更<span class="accent">清晰</span>的小窗。
      </h1>

      <p class="summary">
        <span class="ink">小窗同学 / 苏畅</span> — C# 中级开发工程师，3.5 年工作经验，主要技术栈 C# / WPF / Avalonia / C++。目前在
        <span class="ink">牛股王</span> 负责 PC 客户端维护与新功能开发，主攻新业务产线"量化业务" PC 端。
      </p>

      <div class="hero-actions">
        <a class="btn btn-primary" href="#about-me">
          了解我 <span class="arrow" aria-hidden="true">↓</span>
        </a>
        <a
          class="btn btn-ghost"
          :href="profile.contact.gitHub"
          target="_blank"
          rel="noreferrer"
        >
          GitHub <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="hero-meta" aria-label="基本信息">
        <span class="item" v-for="m in heroMeta" :key="m.label">
          <span class="label">{{ m.label }}</span>
          <span class="value">{{ m.value }}</span>
        </span>
      </div>
    </header>

    <section id="about-me" class="home-block" aria-label="个人介绍">
      <div class="home-section-heading">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
          </svg>
        </span>
        <h2>我是谁</h2>
        <span class="index mono">— intro</span>
      </div>
      <div class="home-intro">
        <p v-for="(para, i) in profile.intro" :key="i">{{ para }}</p>
      </div>
    </section>

    <section class="home-block" aria-label="关注的方向">
      <div class="home-section-heading">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="m15.5 8.5-2.4 5.1-5.1 2.4 2.4-5.1 5.1-2.4Z" />
          </svg>
        </span>
        <h2>关注的方向</h2>
        <span class="index mono">— focus</span>
      </div>
      <div class="about-list">
        <article
          v-for="(area, i) in profile.focusAreas"
          :key="area.title"
          class="about-row"
        >
          <div class="index">
            <span>{{ String(i + 1).padStart(2, '0') }}</span>
            <strong>{{ area.title }}</strong>
          </div>
          <div class="body">
            <p>{{ area.description }}</p>
            <span class="stack">{{ area.stack }}</span>
            <div class="tags">
              <span v-for="kw in area.keywords" :key="kw">{{ kw }}</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="home-block" aria-label="章节导航">
      <div class="home-section-heading">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1.2" />
            <rect x="14" y="3" width="7" height="7" rx="1.2" />
            <rect x="3" y="14" width="7" height="7" rx="1.2" />
            <path d="M14 17.5h7m-3.5-3.5v7" />
          </svg>
        </span>
        <h2>探索</h2>
        <span class="index mono">— work</span>
      </div>
      <div class="entry-cards">
        <RouterLink
          v-for="entry in entries"
          :key="entry.to"
          :to="entry.to"
          class="entry-card"
          :data-num="entry.num"
        >
          <span class="num mono">{{ entry.num }}</span>
          <h2>{{ entry.title }}</h2>
          <p>{{ entry.excerpt }}</p>
          <span class="enter">
            进入 <span class="arrow" aria-hidden="true">↗</span>
          </span>
        </RouterLink>
      </div>
    </section>

    <section id="contact" class="home-block" aria-label="联系">
      <div class="home-section-heading">
        <span class="icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1 4.2A8 8 0 0 1 21 12Z" />
            <path d="M8 11h8M8 14h5" />
          </svg>
        </span>
        <h2>聊点什么</h2>
        <span class="index mono">— contact</span>
      </div>
      <p class="home-block-lead">
        桌面端项目、WPF 控件库、Revit / CAD 插件或 AI
        工具链相关的合作和交流,邮我,或在任意平台找我都可以。
      </p>

      <div class="contact-cta">
        <a class="btn btn-primary" :href="`mailto:${profile.contact.email}`">
          {{ profile.contact.email }} <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <a class="btn btn-ghost" :href="profile.contact.gitHub" target="_blank" rel="noreferrer">
          @ViewSuSu <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </div>

      <div class="channels">
        <template v-for="ch in channels" :key="ch.key">
          <a
            v-if="ch.href"
            class="channel"
            :href="ch.href"
            :target="ch.external ? '_blank' : undefined"
            :rel="ch.external ? 'noreferrer' : undefined"
          >
            <span class="ch-icon" aria-hidden="true"><img :src="ch.icon" :alt="''" /></span>
            <span class="key">{{ ch.label }}</span>
            <span class="value">{{ ch.value }}</span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
          <button
            v-else
            type="button"
            class="channel"
            :title="`点击复制 ${ch.label}`"
            :aria-label="`复制 ${ch.label}:${ch.value}`"
            @click="copyToClipboard(ch.value, ch.label)"
          >
            <span class="ch-icon" aria-hidden="true"><img :src="ch.icon" :alt="''" /></span>
            <span class="key">{{ ch.label }}</span>
            <span class="value">{{ ch.value }}</span>
            <span class="arrow" aria-hidden="true">复制</span>
          </button>
        </template>
      </div>
    </section>
  </div>
</template>
