<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useClipboard } from '../composables/useClipboard'
import { useNuGet, formatCount } from '../composables/useNuGet'
import { useLocale } from '../composables/useLocale'
import { getHomeProfile, getChannelLabel } from '../i18n/messages'
import RichText, { type RichLink } from '../components/RichText.vue'
import LazyImage from '../components/LazyImage.vue'

const { profile } = useProfile()
const { copyToClipboard } = useClipboard()
const { totalDownloads, loaded: nugetLoaded, fetchNuGet } = useNuGet()
const { t, locale } = useLocale()

onMounted(() => fetchNuGet())

const heroMeta = computed(() => [
  { label: t('meta.label.location'), value: t('meta.value.location') },
  { label: t('meta.label.now'), value: t('meta.value.now') },
  { label: t('meta.label.years'), value: t('meta.value.years') },
  { label: t('meta.label.github'), value: t('meta.value.github') },
])

const nugetCountText = computed(() =>
  nugetLoaded.value ? formatCount(totalDownloads.value) : '4w+',
)

const homeBundle = computed(() => getHomeProfile(locale.value))

const displayIntro = computed(() =>
  homeBundle.value.intro.map((para) => {
    if (locale.value === 'zh' && /NuGet 组件累计/.test(para)) {
      return para.replace(
        /NuGet 组件累计 [^ ]+ 下载量/,
        `NuGet 组件累计 ${nugetCountText.value} 下载量`,
      )
    }
    if (locale.value === 'en' && /NuGet downloads/.test(para)) {
      return para.replace(/40k\+ NuGet downloads/, `${nugetCountText.value} NuGet downloads`)
    }
    return para
  }),
)

const introLinks = computed<RichLink[]>(() => {
  if (locale.value === 'zh') {
    return [
      {
        match: '开源项目累计 100+ Star',
        href: 'https://github.com/ViewSuSu?tab=repositories',
        external: true,
      },
      {
        match: `NuGet 组件累计 ${nugetCountText.value} 下载量`,
        href: '#/nuget',
        external: false,
      },
    ]
  }
  return [
    {
      match: '100+ stars across open-source repos',
      href: 'https://github.com/ViewSuSu?tab=repositories',
      external: true,
    },
    {
      match: `${nugetCountText.value} NuGet downloads`,
      href: '#/nuget',
      external: false,
    },
  ]
})

const entries = computed(() => [
  {
    to: '/experience',
    num: '01',
    title: t('entry.experience.title'),
    excerpt: t('entry.experience.excerpt'),
    tooltip: t('tt.entry.experience'),
  },
  {
    to: '/opensource',
    num: '02',
    title: t('entry.opensource.title'),
    excerpt: t('entry.opensource.excerpt'),
    tooltip: t('tt.entry.opensource'),
  },
  {
    to: '/nuget',
    num: '03',
    title: t('entry.nuget.title'),
    excerpt: t('entry.nuget.excerpt'),
    tooltip: t('tt.entry.nuget'),
  },
])

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
    { key: 'email', label: getChannelLabel(locale.value, 'email'), value: c.email, icon: brandIcon('mail') },
    { key: 'github', label: getChannelLabel(locale.value, 'github'), value: '@ViewSuSu', icon: brandIcon('github'), href: c.gitHub, external: true },
    { key: 'bilibili', label: getChannelLabel(locale.value, 'bilibili'), value: c.bilibili, icon: brandIcon('bilibili'), href: 'https://space.bilibili.com/381527816', external: true },
    { key: 'qq', label: getChannelLabel(locale.value, 'qq'), value: c.qq, icon: brandIcon('qq') },
    { key: 'wechat', label: getChannelLabel(locale.value, 'wechat'), value: c.wechat, icon: brandIcon('wechat') },
    { key: 'phone', label: getChannelLabel(locale.value, 'phone'), value: c.phone, icon: brandIcon('phone') },
  ]
})
</script>

<template>
  <div class="route-view" v-if="profile">
    <header id="home" class="hero">
      <figure class="hero-avatar" aria-hidden="true">
        <LazyImage
          :src="`${baseUrl}avatar.webp`"
          alt="小窗同学 头像"
          :width="96"
          :height="96"
          object-fit="cover"
          eager
        />
        <span class="status-dot"></span>
      </figure>

      <p class="eyebrow">
        <RouterLink
          class="pulse pulse-link"
          :to="{ path: '/', hash: '#contact' }"
          :data-tooltip="t('tt.hero.pulse')"
        >
          <span class="pulse-dot" aria-hidden="true"></span>
          {{ t('hero.eyebrow.status') }}
          <span class="arrow" aria-hidden="true">↓</span>
        </RouterLink>
        <span>{{ t('hero.eyebrow.tech') }}</span>
      </p>

      <h1>
        {{ t('hero.h1.lead') }}<br />
        <template v-if="locale === 'zh'">
          更<span class="accent">{{ t('hero.h1.accent') }}</span>{{ t('hero.h1.tail') }}
        </template>
        <template v-else>
          <span class="accent">{{ t('hero.h1.accent') }}</span> {{ t('hero.h1.tail') }}
        </template>
      </h1>

      <p class="summary">
        <span class="ink">{{ t('hero.summary.name') }}</span> — {{ t('hero.summary.role') }}，<span class="rt-num">{{ t('hero.summary.years') }}</span> {{ t('hero.summary.expBefore') }}
        <span class="ink">{{ t('hero.summary.companyName') }}</span> {{ t('hero.summary.expAfter') }}
      </p>

      <div class="hero-actions">
        <a
          class="btn btn-primary"
          href="#about-me"
          :data-tooltip="t('tt.hero.cta.about')"
        >
          {{ t('hero.cta.about') }} <span class="arrow" aria-hidden="true">↓</span>
        </a>
        <a
          class="btn btn-ghost"
          :href="profile.contact.gitHub"
          target="_blank"
          rel="noreferrer"
          :data-tooltip="t('tt.hero.cta.github')"
        >
          {{ t('hero.cta.github') }} <span class="arrow" aria-hidden="true">↗</span>
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
        <h2>{{ t('section.about.h2') }}</h2>
        <span class="index mono">{{ t('section.about.index') }}</span>
      </div>
      <div class="home-intro">
        <RichText
          v-for="(para, i) in displayIntro"
          :key="i"
          tag="p"
          :text="para"
          :links="introLinks"
        />
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
        <h2>{{ t('section.focus.h2') }}</h2>
        <span class="index mono">{{ t('section.focus.index') }}</span>
      </div>
      <div class="about-list">
        <article
          v-for="(area, i) in homeBundle.focusAreas"
          :key="area.title"
          class="about-row"
          :data-icon="area.icon"
        >
          <div class="index">
            <span class="focus-icon" aria-hidden="true">
              <svg
                v-if="area.icon === 'stack'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="8 7 3 12 8 17" />
                <polyline points="16 7 21 12 16 17" />
                <line x1="14" y1="5" x2="10" y2="19" />
              </svg>
              <svg
                v-else-if="area.icon === 'desktop'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="13" rx="1.5" />
                <line x1="3" y1="14" x2="21" y2="14" />
                <line x1="9" y1="20" x2="15" y2="20" />
                <line x1="12" y1="17" x2="12" y2="20" />
              </svg>
              <svg
                v-else-if="area.icon === 'ai'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
              >
                <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3Z" />
                <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />
              </svg>
              <svg
                v-else-if="area.icon === 'api'"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
              >
                <rect x="3" y="4" width="18" height="5" rx="1.2" />
                <rect x="3" y="15" width="18" height="5" rx="1.2" />
                <line x1="7" y1="6.5" x2="7.01" y2="6.5" />
                <line x1="7" y1="17.5" x2="7.01" y2="17.5" />
                <line x1="11" y1="6.5" x2="17" y2="6.5" />
                <line x1="11" y1="17.5" x2="17" y2="17.5" />
              </svg>
            </span>
            <span class="focus-num mono">{{ String(i + 1).padStart(2, '0') }}</span>
            <strong>{{ area.title }}</strong>
          </div>
          <div class="body">
            <RichText tag="p" :text="area.description" />
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
        <h2>{{ t('section.work.h2') }}</h2>
        <span class="index mono">{{ t('section.work.index') }}</span>
      </div>
      <div class="entry-cards">
        <RouterLink
          v-for="entry in entries"
          :key="entry.to"
          :to="entry.to"
          class="entry-card"
          :data-num="entry.num"
          :data-tooltip="entry.tooltip"
        >
          <span class="num mono">{{ entry.num }}</span>
          <h2>{{ entry.title }}</h2>
          <p>{{ entry.excerpt }}</p>
          <span class="enter">
            {{ t('entry.enter') }} <span class="arrow" aria-hidden="true">↗</span>
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
        <h2>{{ t('section.contact.h2') }}</h2>
        <span class="index mono">{{ t('section.contact.index') }}</span>
      </div>
      <p class="home-block-lead">
        {{ t('contact.lead') }}
      </p>

      <div class="contact-cta">
        <a
          class="btn btn-primary"
          :href="`mailto:${profile.contact.email}`"
          :data-tooltip="t('tt.contact.email')"
        >
          {{ profile.contact.email }} <span class="arrow" aria-hidden="true">↗</span>
        </a>
        <a
          class="btn btn-ghost"
          :href="profile.contact.gitHub"
          target="_blank"
          rel="noreferrer"
          :data-tooltip="t('tt.contact.github')"
        >
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
            :data-tooltip="`${t('tt.channel.open')} — ${ch.label}`"
          >
            <span class="ch-icon" aria-hidden="true"><LazyImage :src="ch.icon" alt="" :width="22" :height="22" object-fit="contain" /></span>
            <span class="key">{{ ch.label }}</span>
            <span class="value">{{ ch.value }}</span>
            <span class="arrow" aria-hidden="true">↗</span>
          </a>
          <button
            v-else
            type="button"
            class="channel"
            :data-tooltip="`${t('tt.channel.copy')} ${ch.label}: ${ch.value}`"
            :aria-label="`${t('tt.channel.copy')} ${ch.label}: ${ch.value}`"
            @click="copyToClipboard(ch.value, ch.label)"
          >
            <span class="ch-icon" aria-hidden="true"><LazyImage :src="ch.icon" alt="" :width="22" :height="22" object-fit="contain" /></span>
            <span class="key">{{ ch.label }}</span>
            <span class="value">{{ ch.value }}</span>
            <span class="arrow" aria-hidden="true">{{ t('channel.copy') }}</span>
          </button>
        </template>
      </div>
    </section>
  </div>
</template>
