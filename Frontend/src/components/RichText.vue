<script setup lang="ts">
import { computed } from 'vue'

export interface RichLink {
  match: string
  href: string
  external?: boolean
}

const props = defineProps<{
  text: string
  tag?: string
  links?: RichLink[]
}>()

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const escapeAttr = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;')

const escapeRegex = (s: string) =>
  s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

// 匹配数据量：3.5、100+、4w+、★30、12k 等
const NUMERIC_PATTERN = /(★\s*\d+|\d+(?:\.\d+)?(?:[wWkK万]\+?|\+)?)/g

const rendered = computed(() => {
  let out = escapeHtml(props.text)

  // step 1: 数字高亮
  out = out.replace(NUMERIC_PATTERN, '<span class="rt-num">$1</span>')

  // step 2: link 替换 — 用占位符避免破坏已注入的 span
  if (props.links?.length) {
    for (const link of props.links) {
      const matchEscaped = escapeHtml(link.match)
      const numericized = matchEscaped.replace(
        NUMERIC_PATTERN,
        '<span class="rt-num">$1</span>',
      )
      const safeHref = escapeAttr(link.href)
      const targetAttr = link.external
        ? ' target="_blank" rel="noreferrer"'
        : ''
      const anchor = `<a class="rt-link"${targetAttr} href="${safeHref}">${numericized}</a>`
      const re = new RegExp(escapeRegex(numericized), 'g')
      out = out.replace(re, anchor)
    }
  }

  return out
})
</script>

<template>
  <component :is="props.tag ?? 'span'" class="rt" v-html="rendered" />
</template>
