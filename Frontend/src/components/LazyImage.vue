<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, watch } from 'vue'
import { useLocale } from '../composables/useLocale'

interface Props {
  src: string
  alt?: string
  width?: number | string
  height?: number | string
  objectFit?: 'cover' | 'contain'
  eager?: boolean
  rootMargin?: string
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  objectFit: 'cover',
  eager: false,
  rootMargin: '240px 0px',
})

const { t } = useLocale()

const root = ref<HTMLElement | null>(null)
const visible = ref(props.eager)
const loaded = ref(false)
const failed = ref(false)
const attempt = ref(0)

let io: IntersectionObserver | null = null

function disconnect() {
  if (io) {
    io.disconnect()
    io = null
  }
}

onMounted(() => {
  if (props.eager || typeof window === 'undefined') return
  if (!('IntersectionObserver' in window)) {
    visible.value = true
    return
  }
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          visible.value = true
          disconnect()
          break
        }
      }
    },
    { rootMargin: props.rootMargin, threshold: 0.01 },
  )
  if (root.value) io.observe(root.value)
})

onBeforeUnmount(disconnect)

watch(
  () => props.src,
  () => {
    loaded.value = false
    failed.value = false
    attempt.value = 0
  },
)

const actualSrc = computed(() => {
  if (!visible.value) return ''
  if (attempt.value === 0) return props.src
  const sep = props.src.includes('?') ? '&' : '?'
  return `${props.src}${sep}__retry=${attempt.value}`
})

function onLoad() {
  loaded.value = true
  failed.value = false
}

function onError() {
  failed.value = true
  loaded.value = false
}

function retry(event: Event) {
  event.preventDefault()
  event.stopPropagation()
  failed.value = false
  attempt.value += 1
}
</script>

<template>
  <span
    ref="root"
    class="lazy-image"
    :class="{ loaded, failed, pending: !loaded && !failed }"
    :data-fit="objectFit"
  >
    <img
      v-if="visible"
      :src="actualSrc"
      :alt="alt"
      :width="width"
      :height="height"
      loading="lazy"
      decoding="async"
      @load="onLoad"
      @error="onError"
    />
    <span v-else class="lazy-image-skeleton" aria-hidden="true"></span>

    <button
      v-if="failed"
      type="button"
      class="lazy-image-retry"
      :aria-label="t('img.retry')"
      :data-tooltip="t('img.retry')"
      @click="retry"
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M4 4v6h6M20 20v-6h-6M5.5 14a8 8 0 0 0 13.5 3.5M18.5 10A8 8 0 0 0 5 6.5"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{{ t('img.retry') }}</span>
    </button>
  </span>
</template>
