import { onMounted, ref } from 'vue'
import { getProfile } from '../services/profileApi'
import type { ProfileResponse } from '../types/profile'

const profile = ref<ProfileResponse | null>(null)
const isLoading = ref(true)
const error = ref('')
let loaded = false

async function load() {
  if (loaded) return
  loaded = true
  try {
    profile.value = await getProfile()
  } catch (requestError) {
    error.value =
      requestError instanceof Error
        ? requestError.message
        : '无法加载个人网站数据，请稍后再试。'
  } finally {
    isLoading.value = false
  }
}

export function useProfile() {
  onMounted(load)
  return { profile, isLoading, error }
}
