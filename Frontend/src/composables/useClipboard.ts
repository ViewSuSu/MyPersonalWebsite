import { ref } from 'vue'

const toastMessage = ref('')
let toastTimer: number | null = null

function showToast(message: string) {
  toastMessage.value = message
  if (toastTimer !== null) window.clearTimeout(toastTimer)
  toastTimer = window.setTimeout(() => {
    toastMessage.value = ''
    toastTimer = null
  }, 2200)
}

async function copyToClipboard(text: string, label: string) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
    } else {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.position = 'fixed'
      ta.style.opacity = '0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    showToast(`已复制 ${label}`)
  } catch {
    showToast(`复制失败，请手动选择 ${label}`)
  }
}

export function useClipboard() {
  return { toastMessage, copyToClipboard }
}
