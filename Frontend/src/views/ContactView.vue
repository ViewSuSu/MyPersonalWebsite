<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useClipboard } from '../composables/useClipboard'

const { profile } = useProfile()
const { copyToClipboard } = useClipboard()

interface Channel {
  key: string
  label: string
  value: string
  href?: string
  external?: boolean
}

const channels = computed<Channel[]>(() => {
  if (!profile.value) return []
  const c = profile.value.contact
  return [
    { key: 'email', label: '邮箱', value: c.email, href: `mailto:${c.email}` },
    { key: 'github', label: 'GitHub', value: '@ViewSuSu', href: c.gitHub, external: true },
    { key: 'bilibili', label: '哔哩哔哩', value: c.bilibili, href: 'https://space.bilibili.com/381527816', external: true },
    { key: 'qq', label: 'QQ', value: c.qq },
    { key: 'wechat', label: '微信', value: c.wechat },
    { key: 'phone', label: '电话', value: c.phone, href: `tel:${c.phone}` },
  ]
})
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">05 / 联系</span>
      <h1>聊点什么？</h1>
      <p class="lead">
        桌面端项目、WPF 控件库、Revit / CAD 插件或 AI
        工具链相关的合作和交流，邮我，或在任意平台找我都可以。
      </p>
    </header>

    <div class="contact-cta">
      <a class="btn btn-primary" :href="`mailto:${profile.contact.email}`">
        {{ profile.contact.email }} <span class="arrow" aria-hidden="true">↗</span>
      </a>
      <a class="btn btn-ghost" :href="profile.contact.gitHub" target="_blank" rel="noreferrer">
        @ViewSuSu <span class="arrow" aria-hidden="true">↗</span>
      </a>
    </div>

    <section class="channels">
      <template v-for="ch in channels" :key="ch.key">
        <a
          v-if="ch.href"
          class="channel"
          :href="ch.href"
          :target="ch.external ? '_blank' : undefined"
          :rel="ch.external ? 'noreferrer' : undefined"
        >
          <span class="key">{{ ch.label }}</span>
          <span class="value">{{ ch.value }}</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <button
          v-else
          type="button"
          class="channel"
          :title="`点击复制 ${ch.label}`"
          :aria-label="`复制 ${ch.label}：${ch.value}`"
          @click="copyToClipboard(ch.value, ch.label)"
        >
          <span class="key">{{ ch.label }}</span>
          <span class="value">{{ ch.value }}</span>
          <span class="arrow" aria-hidden="true">复制</span>
        </button>
      </template>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/experience" class="back">← 04 / 经历</RouterLink>
      <RouterLink to="/" class="next">回首页 →</RouterLink>
    </nav>
  </div>
</template>
