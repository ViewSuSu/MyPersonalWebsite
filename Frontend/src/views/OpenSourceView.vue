<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useLocale } from '../composables/useLocale'
import type { Project } from '../types/profile'
import RichText from '../components/RichText.vue'
import LazyImage from '../components/LazyImage.vue'
import { format, localizeOpenSourceProject } from '../i18n/messages'

const { profile } = useProfile()
const { t, locale } = useLocale()

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const repoThumb: Record<string, string> = {
  BlackGoldAncientSword: assetUrl('github-assets/blackgold/02_stats.webp'),
  'NarakaBladepoint-WPF': assetUrl('github-assets/naraka/MainWindows.webp'),
  'Su.WPF.TreeViewEx': assetUrl('github-assets/treeview/HD.webp'),
  'Su.Revit.UI.StatusBarEx': assetUrl('github-assets/statusbar/HD.webp'),
  'Su.Revit.HelixToolkit.SharpDX': assetUrl('github-assets/helix/HD.webp'),
}

const projects = computed<Project[]>(() => {
  if (!profile.value) return []
  return profile.value.openSourceProjects.map((p) => localizeOpenSourceProject(p, locale.value))
})

const totalStars = computed(
  () => profile.value?.openSourceProjects.reduce((t, p) => t + (p.stars ?? 0), 0) ?? 0,
)

function formatCount(value: number | null) {
  return value === null ? '—' : `${value}`
}

function projectTags(p: Project) {
  return p.tags.slice(0, 4)
}

function thumbFor(name: string): string | null {
  return repoThumb[name] ?? null
}
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">{{ t('os.index') }}</span>
      <h1>{{ t('os.h1') }}</h1>
      <p class="lead">
        {{ t('os.lead.prefix') }}
        <span class="mono">{{ format(t('os.lead.stats'), { count: profile.openSourceProjects.length, stars: totalStars }) }}</span>
      </p>
    </header>

    <section class="work-list">
      <a
        v-for="(project, i) in projects"
        :key="project.name"
        class="work-item"
        :href="project.url"
        target="_blank"
        rel="noreferrer"
        :data-tooltip="format(t('tt.os.open'), { name: project.name })"
      >
        <figure class="thumb" :class="{ 'is-placeholder': !thumbFor(project.name) }">
          <LazyImage
            v-if="thumbFor(project.name)"
            :src="thumbFor(project.name)!"
            :alt="format(t('os.repo.thumb'), { title: project.title })"
            :width="180"
            :height="112"
            object-fit="cover"
          />
          <span v-else class="placeholder-label">{{ project.name.split('.')[0] }}</span>
        </figure>
        <div class="info">
          <div class="title-row">
            <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ project.name }}</h3>
            <span class="category">{{ project.category }}</span>
          </div>
          <RichText tag="p" :text="project.description" />
          <div class="tags">
            <span v-for="tag in projectTags(project)" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="side">
          <div class="stats">
            <span class="stat stat-star" :aria-label="format(t('os.repo.stars'), { n: formatCount(project.stars) })">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.193a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.981a.75.75 0 0 1-1.088-.79l.72-4.194-3.047-2.97a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              <span class="count">{{ formatCount(project.stars) }}</span>
            </span>
            <span class="stat stat-fork" :aria-label="format(t('os.repo.forks'), { n: formatCount(project.forks) })">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M5 3.25a2 2 0 1 0-2.75 1.854v5.792a2 2 0 1 0 1.5 0V5.104A2 2 0 0 0 5 3.25ZM3 2.75a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 9.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm10-7a2 2 0 1 0-2.75-1.854v.854A2.75 2.75 0 0 1 7.5 7H5.75a.75.75 0 0 0 0 1.5H7.5a4.25 4.25 0 0 0 4.25-4.25v-.854A2 2 0 0 0 13 5.25Zm0-2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
              </svg>
              <span class="count">{{ formatCount(project.forks) }}</span>
            </span>
          </div>
          <span class="link">{{ t('os.repo.link') }}</span>
        </div>
      </a>
    </section>

    <nav class="page-pager" :aria-label="t('nav.contact')">
      <RouterLink to="/experience" class="back" :data-tooltip="t('tt.pager.back.exp')">{{ t('os.pager.back') }}</RouterLink>
      <RouterLink to="/nuget" class="next" :data-tooltip="t('tt.pager.next.nuget')">{{ t('os.pager.next') }}</RouterLink>
    </nav>
  </div>
</template>
