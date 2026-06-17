<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'

const { profile } = useProfile()
</script>

<template>
  <template v-if="profile">
    <header class="page-header">
      <span class="index mono">01 / 关于</span>
      <h1>关于我</h1>
      <p class="lead">
        <span class="ink">{{ profile.brandName }} / {{ profile.name }}</span> — 3.5 年
        C# / WPF 桌面工程师，目前在 不鸣科技 做引擎工具链中的 WPF UI 平台框架。
      </p>
    </header>

    <section class="about-intro">
      <p v-for="(para, i) in profile.intro" :key="i">{{ para }}</p>
    </section>

    <section class="page-section">
      <div class="page-sub-heading">
        <span class="index mono">— 关注的方向</span>
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

    <section class="page-section">
      <div class="page-sub-heading">
        <span class="index mono">— 我相信什么</span>
      </div>
      <div class="beliefs">
        <article v-for="(b, i) in profile.beliefs" :key="b.title" class="belief">
          <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="copy">
            <h3>{{ b.title }}</h3>
            <p>{{ b.body }}</p>
          </div>
        </article>
      </div>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/" class="back">← 回首页</RouterLink>
      <RouterLink to="/projects" class="next">02 / 项目 →</RouterLink>
    </nav>
  </template>
</template>
