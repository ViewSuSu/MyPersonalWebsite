import { ref, computed, watch } from 'vue'
import { messages, type Locale, type MessageKey } from '../i18n/messages'

const STORAGE_KEY = 'site.locale'

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'zh'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === 'zh' || stored === 'en') return stored
  const navLang = window.navigator.language?.toLowerCase() ?? ''
  return navLang.startsWith('en') ? 'en' : 'zh'
}

const locale = ref<Locale>(detectInitialLocale())

watch(locale, (next) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next === 'en' ? 'en' : 'zh-CN'
  }
}, { immediate: true })

export function useLocale() {
  const t = (key: MessageKey, fallback?: string): string => {
    const dict = messages[locale.value]
    return dict[key] ?? fallback ?? key
  }

  const isZh = computed(() => locale.value === 'zh')
  const isEn = computed(() => locale.value === 'en')

  function setLocale(next: Locale) {
    locale.value = next
  }

  function toggleLocale() {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
  }

  return { locale, t, isZh, isEn, setLocale, toggleLocale }
}
