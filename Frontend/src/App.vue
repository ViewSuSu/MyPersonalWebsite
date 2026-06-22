<script setup lang="ts">
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import { useProfile } from './composables/useProfile'
import { useClipboard } from './composables/useClipboard'
import { useLocale } from './composables/useLocale'
import { useTheme } from './composables/useTheme'
import { getRouteTitle } from './i18n/messages'

const { profile, isLoading, error } = useProfile()
const { toastMessage } = useClipboard()
const { t, locale, toggleLocale } = useLocale()
const { isDark, toggleTheme } = useTheme()
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
            class="theme-toggle"
            :data-tooltip="t('tt.theme.toggle')"
            :aria-label="t('tt.theme.toggle')"
            :aria-pressed="!isDark"
            @click="toggleTheme"
          >
            <svg
              class="sun-and-moon"
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <mask class="moon" id="theme-toggle-moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle cx="24" cy="10" r="6" fill="black" />
              </mask>
              <circle
                class="sun"
                cx="12"
                cy="12"
                r="6"
                mask="url(#theme-toggle-moon-mask)"
                fill="currentColor"
              />
              <g class="sun-beams" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </g>
            </svg>
          </button>
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
        <RouterView v-slot="{ Component, route }">
          <transition name="page" mode="out-in">
            <component :is="Component" :key="route.path" />
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
