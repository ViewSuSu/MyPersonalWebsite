<script setup lang="ts">
import { onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useNuGet, formatCount } from '../composables/useNuGet'
import { useLocale } from '../composables/useLocale'
import RichText from '../components/RichText.vue'
import { format } from '../i18n/messages'

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

const { t } = useLocale()

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

const refreshTooltip = computed(() =>
  fetchedAtText.value
    ? format(t('tt.nuget.refresh.with.time'), { time: fetchedAtText.value })
    : t('tt.nuget.refresh'),
)

const refreshLabel = computed(() =>
  loading.value ? t('nuget.refresh.label.loading') : t('nuget.refresh.label'),
)

function packageUrl(id: string) {
  return `https://www.nuget.org/packages/${id}`
}
</script>

<template>
  <div class="route-view nuget-view">
    <header class="page-header">
      <span class="index mono">{{ t('nuget.index') }}</span>
      <h1>
        {{ t('nuget.h1') }}
        <button
          class="header-refresh"
          type="button"
          :data-tooltip="refreshTooltip"
          :aria-label="refreshLabel"
          :disabled="loading"
          @click="fetchNuGet(true)"
        >
          <span :class="{ spin: loading }" aria-hidden="true">↻</span>
        </button>
      </h1>
      <p class="lead">{{ t('nuget.lead') }}</p>

      <div class="nuget-stats" v-if="loaded">
        <div class="stat-card">
          <span class="label">{{ t('nuget.stats.count') }}</span>
          <strong class="value mono">{{ packageCount }}</strong>
        </div>
        <div class="stat-card">
          <span class="label">{{ t('nuget.stats.downloads') }}</span>
          <strong class="value mono accent">
            {{ totalDownloads.toLocaleString() }}
          </strong>
          <span class="sub mono">≈ {{ formatCount(totalDownloads) }}</span>
        </div>
      </div>

      <div class="nuget-state" v-else-if="loading">
        <span class="dot" aria-hidden="true"></span> {{ t('nuget.state.loading') }}
      </div>

      <div class="nuget-state error" v-else-if="error">
        <span aria-hidden="true">⚠</span> {{ format(t('nuget.state.error'), { msg: error }) }}
        <button
          class="refresh"
          type="button"
          :data-tooltip="t('tt.nuget.refresh')"
          @click="fetchNuGet(true)"
        >{{ t('nuget.state.retry') }}</button>
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
        :data-tooltip="t('tt.nuget.item')"
      >
        <div class="head">
          <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="mono">{{ pkg.id }}</h3>
          <span class="version mono">v{{ pkg.version }}</span>
        </div>

        <RichText tag="p" class="desc" :text="pkg.description" />

        <div class="tags">
          <span v-for="tag in pkg.tags.slice(0, 6)" :key="tag">{{ tag }}</span>
        </div>

        <div class="metrics">
          <span class="metric primary">
            <span class="m-label">{{ t('nuget.metric.downloads') }}</span>
            <strong class="m-value">{{ pkg.totalDownloads.toLocaleString() }}</strong>
          </span>
          <span class="metric">
            <span class="m-label">{{ t('nuget.metric.authors') }}</span>
            <span class="m-value">{{ pkg.authors.join(', ') }}</span>
          </span>
        </div>
      </a>
    </section>

    <nav class="page-pager" :aria-label="t('nav.contact')">
      <RouterLink to="/opensource" class="back" :data-tooltip="t('tt.pager.back.opensource')">{{ t('nuget.pager.back') }}</RouterLink>
      <RouterLink to="/" class="next" :data-tooltip="t('tt.pager.back')">{{ t('nuget.pager.next') }}</RouterLink>
    </nav>
  </div>
</template>
