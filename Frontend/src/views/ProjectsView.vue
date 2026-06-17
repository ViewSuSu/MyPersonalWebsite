<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'

const { profile } = useProfile()
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">02 / 项目</span>
      <h1>工作中的项目</h1>
      <p class="lead">
        在公司任职期间主导或参与的工程项目。出于保密考虑，下文仅描述角色、做了什么、
        技术栈与可量化的成果，不涉及客户信息与内部界面。
      </p>
    </header>

    <section class="work-projects">
      <article
        v-for="(project, i) in profile.workProjects"
        :key="project.title"
        class="work-project"
      >
        <header class="wp-head">
          <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
          <div class="title-block">
            <h2>{{ project.name }}</h2>
            <p class="sub">{{ project.title }}</p>
          </div>
        </header>

        <dl class="meta">
          <div><dt>公司</dt><dd>{{ project.company }}</dd></div>
          <div><dt>角色</dt><dd>{{ project.role }}</dd></div>
          <div><dt>周期</dt><dd>{{ project.period }}</dd></div>
          <div><dt>坐标</dt><dd>{{ project.location }}</dd></div>
        </dl>

        <p class="description">{{ project.description }}</p>

        <ul class="highlights">
          <li v-for="h in project.highlights" :key="h">{{ h }}</li>
        </ul>

        <div class="stack">
          <span v-for="s in project.stack" :key="s">{{ s }}</span>
        </div>
      </article>
    </section>

    <nav class="page-pager" aria-label="页面切换">
      <RouterLink to="/about" class="back">← 01 / 关于</RouterLink>
      <RouterLink to="/opensource" class="next">03 / 开源 →</RouterLink>
    </nav>
  </div>
</template>
