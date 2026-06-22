import { ref, computed, watch } from 'vue'

export type Theme = 'light' | 'dark'

const STORAGE_KEY = 'site.theme'

function detectInitialTheme(): Theme {
  if (typeof document !== 'undefined') {
    const attr = document.documentElement.getAttribute('data-theme')
    if (attr === 'light' || attr === 'dark') return attr
  }
  if (typeof window === 'undefined') return 'dark'
  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

const theme = ref<Theme>(detectInitialTheme())
const userOverrode = ref<boolean>(
  typeof window !== 'undefined' &&
    (window.localStorage.getItem(STORAGE_KEY) === 'light' ||
      window.localStorage.getItem(STORAGE_KEY) === 'dark')
)

watch(
  theme,
  (next) => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next)
    }
  },
  { immediate: true }
)

if (typeof window !== 'undefined' && window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: light)')
  const onChange = (e: MediaQueryListEvent) => {
    if (userOverrode.value) return
    theme.value = e.matches ? 'light' : 'dark'
  }
  if (typeof mq.addEventListener === 'function') {
    mq.addEventListener('change', onChange)
  } else if (typeof (mq as MediaQueryList).addListener === 'function') {
    ;(mq as MediaQueryList).addListener(onChange)
  }
}

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')
  const isLight = computed(() => theme.value === 'light')

  function setTheme(next: Theme) {
    theme.value = next
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
      userOverrode.value = true
    }
  }

  function toggleTheme() {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  return { theme, isDark, isLight, setTheme, toggleTheme }
}
