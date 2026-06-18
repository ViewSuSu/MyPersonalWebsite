<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProfile } from './composables/useProfile'
import { useClipboard } from './composables/useClipboard'
import { useLocale } from './composables/useLocale'
import { getRouteTitle } from './i18n/messages'

const { profile, isLoading, error } = useProfile()
const { toastMessage } = useClipboard()
const { t, locale, toggleLocale } = useLocale()
const router = useRouter()

watch(locale, (next) => {
  const name = (router.currentRoute.value.name as string | undefined) ?? 'home'
  document.title = getRouteTitle(name, next)
})
</script>

<template>
  <main class="site-shell">
    <a class="skip-link" href="#main">{{ t('a11y.skip') }}</a>

    <section v-if="isLoading" class="skeleton" :aria-label="t('a11y.skip')" aria-busy="true">
      <div class="sk-bar lg w-30"></div>
      <div class="sk-bar lg w-70"></div>
      <div class="sk-bar md w-50"></div>
      <div class="sk-bar md w-70"></div>
      <div class="sk-bar w-30"></div>
    </section>

    <section v-else-if="error" class="state state-error" role="alert">{{ error }}</section>

    <template v-else-if="profile">
      <nav class="topbar" :aria-label="t('nav.home')">
        <RouterLink class="brand" to="/" :data-tooltip="t('tt.brand')" :aria-label="t('tt.brand')">
          <span class="dot" aria-hidden="true"></span>
          <span>ViewSuSu</span>
          <small>{{ t('nav.brand.sub') }}</small>
        </RouterLink>
        <div class="nav-links">
          <RouterLink to="/" :data-tooltip="t('tt.nav.home')"><span class="num">00</span> {{ t('nav.home') }}</RouterLink>
          <RouterLink to="/experience" :data-tooltip="t('tt.nav.experience')"><span class="num">01</span> {{ t('nav.experience') }}</RouterLink>
          <RouterLink to="/opensource" :data-tooltip="t('tt.nav.opensource')"><span class="num">02</span> {{ t('nav.opensource') }}</RouterLink>
          <RouterLink to="/nuget" :data-tooltip="t('tt.nav.nuget')"><span class="num">03</span> {{ t('nav.nuget') }}</RouterLink>
          <RouterLink :to="{ path: '/', hash: '#contact' }" :data-tooltip="t('tt.nav.contact')"><span class="num">04</span> {{ t('nav.contact') }}</RouterLink>
          <button
            type="button"
            class="lang-toggle"
            :data-tooltip="t('tt.lang.toggle')"
            :aria-label="t('tt.lang.toggle')"
            :aria-pressed="locale === 'en'"
            @click="toggleLocale"
          >
            <span class="lang-pill" :class="{ active: locale === 'zh' }">中</span>
            <span class="lang-pill" :class="{ active: locale === 'en' }">EN</span>
          </button>
        </div>
      </nav>

      <div id="main">
        <RouterView v-slot="{ Component }">
          <transition name="page" mode="out-in">
            <component :is="Component" />
          </transition>
        </RouterView>
      </div>

      <footer class="site-footer">
        <span class="left">
          <strong>{{ t('footer.brand') }}</strong> · {{ t('footer.alias') }} · © {{ new Date().getFullYear() }}
        </span>
      </footer>
    </template>

    <div v-if="toastMessage" class="toast" role="status" aria-live="polite">
      {{ toastMessage }}
    </div>
  </main>
</template>
