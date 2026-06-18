<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'

const { profile } = useProfile()

const logoUrl = (file: string) => `${import.meta.env.BASE_URL}company-logos/${file}`
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">03 / 工作经历</span>
      <h1>工作经历</h1>
    </header>

    <section class="timeline">
      <article
        v-for="exp in profile.experiences"
        :key="`${exp.company}-${exp.period}`"
        class="timeline-row"
      >
        <div class="timeline-meta">
          <span class="period">{{ exp.period }}</span>
          <span v-if="exp.logo" class="company-logo" aria-hidden="true">
            <img :src="logoUrl(exp.logo)" :alt="exp.company + ' logo'" />
          </span>
        </div>
        <div class="body">
          <h3>{{ exp.company }}</h3>
          <strong class="role">{{ exp.role }}</strong>
          <p class="location">{{ exp.location }}</p>
          <ul>
            <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
          </ul>
        </div>
      </article>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/opensource" class="back">← 02 / 开源</RouterLink>
      <RouterLink to="/" class="next">回首页 →</RouterLink>
    </nav>
  </div>
</template>
