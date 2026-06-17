<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'

const { profile } = useProfile()

const heroMeta = computed(() => {
  if (!profile.value) return []
  return [
    { label: '坐标', value: profile.value.location.replace('中国', '') },
    { label: '当下', value: '不鸣科技 · ET 引擎工具组' },
    { label: '经验', value: '3.5 年' },
    { label: 'GitHub', value: '@ViewSuSu' },
  ]
})

const entries = [
  {
    to: '/about',
    num: '01',
    title: '关于',
    excerpt: '关于我、关注的方向、工作信条。',
  },
  {
    to: '/projects',
    num: '02',
    title: '项目',
    excerpt: '在公司任职期间主导或参与的工程项目，按领域归类。',
  },
  {
    to: '/opensource',
    num: '03',
    title: '开源',
    excerpt: 'GitHub 上 pin 的 6 个仓库，覆盖控件库、插件与桌面应用。',
  },
  {
    to: '/experience',
    num: '04',
    title: '经历',
    excerpt: '两段工作经历，按时间排列。',
  },
  {
    to: '/contact',
    num: '05',
    title: '联系',
    excerpt: '邮箱、GitHub、哔哩哔哩、QQ、微信、电话。',
  },
]
</script>

<template>
  <template v-if="profile">
    <header id="home" class="hero">
      <p class="eyebrow">
        <span class="pulse">
          <span class="pulse-dot" aria-hidden="true"></span>
          可接洽
        </span>
        <span>// c# · wpf · 桌面工具链</span>
      </p>

      <h1>
        打开一扇<br />
        更<span class="accent">清晰</span>的小窗。
      </h1>

      <p class="summary">
        <span class="ink">小窗同学 / 苏畅</span> — 3.5 年 C# / WPF 桌面工程师，目前在
        <span class="ink">不鸣科技</span> 做引擎工具链中的 WPF UI 平台框架。
      </p>

      <div class="hero-actions">
        <RouterLink class="btn btn-primary" to="/about">
          了解我 <span class="arrow" aria-hidden="true">↗</span>
        </RouterLink>
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

    <section class="entry-cards" aria-label="章节导航">
      <RouterLink
        v-for="entry in entries"
        :key="entry.to"
        :to="entry.to"
        class="entry-card"
      >
        <span class="num mono">{{ entry.num }}</span>
        <h2>{{ entry.title }}</h2>
        <p>{{ entry.excerpt }}</p>
        <span class="enter">
          进入 <span class="arrow" aria-hidden="true">↗</span>
        </span>
      </RouterLink>
    </section>
  </template>
</template>
