<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useNuGet, formatCount } from '../composables/useNuGet'
import RichText from '../components/RichText.vue'

const {
  packages,
  loading,
  error,
  loaded,
  fetchedAt,
  totalDownloads,
  packageCount,
  fetchNuGet,
} = useNuGet()

onMounted(() => fetchNuGet())

const sorted = computed(() =>
  [...packages.value].sort((a, b) => b.totalDownloads - a.totalDownloads),
)

const fetchedAtText = computed(() => {
  if (!fetchedAt.value) return ''
  const d = new Date(fetchedAt.value)
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
})

function packageUrl(id: string) {
  return `https://www.nuget.org/packages/${id}`
}

function packageBadgeUrl(id: string) {
  return `https://img.shields.io/nuget/dt/${id}?style=flat&label=downloads`
}
</script>

<template>
  <div class="route-view nuget-view">
    <header class="page-header">
      <span class="index mono">04 / NuGet</span>
      <h1>
        NuGet 组件
        <button
          class="header-refresh"
          type="button"
          :title="fetchedAtText ? `上次更新 ${fetchedAtText}` : '刷新'"
          :aria-label="loading ? '刷新中' : '刷新'"
          :disabled="loading"
          @click="fetchNuGet(true)"
        >
          <span :class="{ spin: loading }" aria-hidden="true">↻</span>
        </button>
      </h1>
      <p class="lead">
        发布在
        <a href="https://www.nuget.org/profiles/Su1614" target="_blank" rel="noreferrer">nuget.org/profiles/Su1614</a>
        的 C# / WPF / Revit 组件包。
      </p>

      <div class="nuget-stats" v-if="loaded">
        <div class="stat-card">
          <span class="label">已发布组件</span>
          <strong class="value mono">{{ packageCount }}</strong>
        </div>
        <div class="stat-card">
          <span class="label">累计下载</span>
          <strong class="value mono accent">
            {{ totalDownloads.toLocaleString() }}
          </strong>
          <span class="sub mono">≈ {{ formatCount(totalDownloads) }}</span>
        </div>
      </div>

      <div class="nuget-state" v-else-if="loading">
        <span class="dot" aria-hidden="true"></span> 正在拉取 NuGet 数据…
      </div>

      <div class="nuget-state error" v-else-if="error">
        <span aria-hidden="true">⚠</span> 拉取失败：{{ error }}
        <button class="refresh" type="button" @click="fetchNuGet(true)">重试</button>
      </div>
    </header>

    <section class="nuget-list" v-if="loaded && sorted.length">
      <a
        v-for="(pkg, i) in sorted"
        :key="pkg.id"
        class="nuget-item"
        :href="packageUrl(pkg.id)"
        target="_blank"
        rel="noreferrer"
      >
        <div class="head">
          <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="mono">{{ pkg.id }}</h3>
          <span class="version mono">v{{ pkg.version }}</span>
        </div>

        <RichText tag="p" class="desc" :text="pkg.description" />

        <div class="tags">
          <span v-for="t in pkg.tags.slice(0, 6)" :key="t">{{ t }}</span>
        </div>

        <div class="metrics">
          <span class="metric primary">
            <span class="m-label">downloads</span>
            <strong class="m-value">{{ pkg.totalDownloads.toLocaleString() }}</strong>
          </span>
          <span class="metric">
            <span class="m-label">authors</span>
            <span class="m-value">{{ pkg.authors.join(', ') }}</span>
          </span>
          <span class="metric">
            <img
              class="badge"
              :src="packageBadgeUrl(pkg.id)"
              :alt="`${pkg.id} downloads badge`"
              loading="lazy"
            />
          </span>
        </div>
      </a>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/experience" class="back">← 03 / 工作经历</RouterLink>
      <RouterLink to="/" class="next">回首页 →</RouterLink>
    </nav>
  </div>
</template>
