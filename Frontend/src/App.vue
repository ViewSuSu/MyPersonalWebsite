<script setup lang="ts">
import { useProfile } from './composables/useProfile'
import { useClipboard } from './composables/useClipboard'

const { profile, isLoading, error } = useProfile()
const { toastMessage } = useClipboard()
</script>

<template>
  <main class="site-shell">
    <section v-if="isLoading" class="skeleton" aria-label="加载中" aria-busy="true">
      <div class="sk-bar lg w-30"></div>
      <div class="sk-bar lg w-70"></div>
      <div class="sk-bar md w-50"></div>
      <div class="sk-bar md w-70"></div>
      <div class="sk-bar w-30"></div>
    </section>

    <section v-else-if="error" class="state state-error" role="alert">{{ error }}</section>

    <template v-else-if="profile">
      <nav class="topbar" aria-label="站点导航">
        <RouterLink class="brand" to="/">
          <span class="dot" aria-hidden="true"></span>
          <span>ViewSuSu</span>
          <small>/ 小窗同学</small>
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/"><span class="num">00</span> 首页</RouterLink>
          <RouterLink to="/projects"><span class="num">01</span> 项目经历</RouterLink>
          <RouterLink to="/opensource"><span class="num">02</span> 开源</RouterLink>
          <RouterLink to="/experience"><span class="num">03</span> 工作经历</RouterLink>
          <RouterLink to="/nuget"><span class="num">04</span> NuGet</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }"><span class="num">05</span> 联系</RouterLink>
        </div>
      </nav>

      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>

      <footer class="site-footer">
        <span class="left">
          <strong>ViewSuSu</strong> · 小窗同学 · © {{ new Date().getFullYear() }}
        </span>
      </footer>
    </template>

    <div v-if="toastMessage" class="toast" role="status" aria-live="polite">
      {{ toastMessage }}
    </div>
  </main>
</template>
