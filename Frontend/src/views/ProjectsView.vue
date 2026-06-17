<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="page-header">
    <span class="index mono">02 / 项目</span>
    <h1>工作中的项目</h1>
    <p class="lead">
      在公司任职期间主导或参与的工程项目。出于保密考虑，只列做了什么、技术栈是什么，
      不涉及业务细节与内部界面。
    </p>
  </header>

  <section class="page-empty">
    <span class="index mono">— 待填充</span>
    <h2>等小窗同学贴一份简历过来</h2>
    <p>
      这一页会按简历整理成几个项目卡片，每个卡片包括：项目角色、做了什么、用了哪些
      技术栈、解决了什么问题。在那之前先空着。
    </p>
    <div class="actions">
      <RouterLink to="/opensource" class="btn btn-ghost">
        看看开源项目 <span class="arrow" aria-hidden="true">↗</span>
      </RouterLink>
    </div>
  </section>

  <nav class="page-pager" aria-label="页面切换">
    <RouterLink to="/about" class="back">← 01 / 关于</RouterLink>
    <RouterLink to="/opensource" class="next">03 / 开源 →</RouterLink>
  </nav>
</template>
