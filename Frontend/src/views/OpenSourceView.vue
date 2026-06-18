<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import type { Project } from '../types/profile'

const { profile } = useProfile()

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const repoThumb: Record<string, string> = {
  BlackGoldAncientSword: assetUrl('github-assets/blackgold/02_stats.png'),
  'NarakaBladepoint-WPF': assetUrl('github-assets/naraka/MainWindows.png'),
  'Su.WPF.TreeViewEx': assetUrl('github-assets/treeview/HD.gif'),
  'Su.Revit.UI.StatusBarEx': assetUrl('github-assets/statusbar/HD.gif'),
  'Su.Revit.HelixToolkit.SharpDX': assetUrl('github-assets/helix/HD.gif'),
}

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
      <span class="index mono">02 / 开源</span>
      <h1>开源项目</h1>
      <p class="lead">
        固定在 GitHub 主页的 6 个仓库，全部 C# 系。覆盖控件库、Revit / CAD 插件、3D
        可视化与桌面应用。<span class="mono">{{ profile.openSourceProjects.length }} repos · {{ totalStars }}★</span>
      </p>
    </header>

    <section class="work-list">
      <a
        v-for="(project, i) in profile.openSourceProjects"
        :key="project.name"
        class="work-item"
        :href="project.url"
        target="_blank"
        rel="noreferrer"
      >
        <figure class="thumb" :class="{ 'is-placeholder': !thumbFor(project.name) }">
          <img
            v-if="thumbFor(project.name)"
            :src="thumbFor(project.name)!"
            :alt="`${project.title} 缩略图`"
            loading="lazy"
          />
          <span v-else class="placeholder-label">{{ project.name.split('.')[0] }}</span>
        </figure>
        <div class="info">
          <div class="title-row">
            <span class="num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3>{{ project.name }}</h3>
            <span class="category">{{ project.category }}</span>
          </div>
          <p>{{ project.description }}</p>
          <div class="tags">
            <span v-for="tag in projectTags(project)" :key="tag">{{ tag }}</span>
          </div>
        </div>
        <div class="side">
          <div class="stats">
            <span class="stat stat-star" :aria-label="`星标 ${formatCount(project.stars)}`">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.193a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.981a.75.75 0 0 1-1.088-.79l.72-4.194-3.047-2.97a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
              </svg>
              <span class="count">{{ formatCount(project.stars) }}</span>
            </span>
            <span class="stat stat-fork" :aria-label="`分支 ${formatCount(project.forks)}`">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M5 3.25a2 2 0 1 0-2.75 1.854v5.792a2 2 0 1 0 1.5 0V5.104A2 2 0 0 0 5 3.25ZM3 2.75a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 9.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm10-7a2 2 0 1 0-2.75-1.854v.854A2.75 2.75 0 0 1 7.5 7H5.75a.75.75 0 0 0 0 1.5H7.5a4.25 4.25 0 0 0 4.25-4.25v-.854A2 2 0 0 0 13 5.25Zm0-2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
              </svg>
              <span class="count">{{ formatCount(project.forks) }}</span>
            </span>
          </div>
          <span class="link">查看仓库</span>
        </div>
      </a>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/projects" class="back">← 01 / 项目经历</RouterLink>
      <RouterLink to="/experience" class="next">03 / 工作经历 →</RouterLink>
    </nav>
  </div>
</template>
