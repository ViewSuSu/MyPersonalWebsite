import { ref, computed } from 'vue'

export interface NuGetPackage {
  id: string
  version: string
  title?: string
  description: string
  totalDownloads: number
  tags: string[]
  authors: string[]
  projectUrl?: string
  iconUrl?: string
  verified?: boolean
}

interface SearchResponse {
  totalHits: number
  data: NuGetPackage[]
}

const STORAGE_KEY = 'nuget-su1614-v1'
const TTL_MS = 60 * 60 * 1000
const ENDPOINT =
  'https://azuresearch-usnc.nuget.org/query?q=owner%3ASu1614&prerelease=true&semVerLevel=2.0.0'

const packages = ref<NuGetPackage[]>([])
const loading = ref(false)
const error = ref<string | null>(null)
const loaded = ref(false)
const fetchedAt = ref<number | null>(null)

function readCache(): { data: NuGetPackage[]; ts: number } | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (Date.now() - parsed.ts < TTL_MS) return parsed
  } catch {
    /* ignore */
  }
  return null
}

function writeCache(data: NuGetPackage[]) {
  try {
    sessionStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ts: Date.now(), data }),
    )
  } catch {
    /* ignore */
  }
}

async function fetchNuGet(force = false) {
  if (loading.value) return
  if (!force) {
    const cached = readCache()
    if (cached) {
      packages.value = cached.data
      fetchedAt.value = cached.ts
      loaded.value = true
      return
    }
  }
  loading.value = true
  error.value = null
  try {
    const res = await fetch(ENDPOINT)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const json = (await res.json()) as SearchResponse
    packages.value = json.data ?? []
    fetchedAt.value = Date.now()
    loaded.value = true
    writeCache(packages.value)
  } catch (e) {
    error.value = (e as Error).message
  } finally {
    loading.value = false
  }
}

const totalDownloads = computed(() =>
  packages.value.reduce((s, p) => s + (p.totalDownloads ?? 0), 0),
)

const packageCount = computed(() => packages.value.length)

export function useNuGet() {
  return {
    packages,
    loading,
    error,
    loaded,
    fetchedAt,
    totalDownloads,
    packageCount,
    fetchNuGet,
  }
}

export function formatCount(n: number): string {
  if (n >= 10000) {
    const v = n / 10000
    return v >= 100 ? `${Math.round(v)}w+` : `${v.toFixed(1)}w+`
  }
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k+`
  return `${n}`
}
