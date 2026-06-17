<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'

const { profile } = useProfile()
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">04 / 经历</span>
      <h1>工作经历</h1>
      <p class="lead">两段工作经历，按时间倒序。具体做过的项目在 02 / 项目 页。</p>
    </header>

    <section class="timeline">
      <article
        v-for="exp in profile.experiences"
        :key="`${exp.company}-${exp.period}`"
        class="timeline-row"
      >
        <span class="period">{{ exp.period }}</span>
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
      <RouterLink to="/opensource" class="back">← 03 / 开源</RouterLink>
      <RouterLink to="/contact" class="next">05 / 联系 →</RouterLink>
    </nav>
  </div>
</template>
