<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useProfile } from '../composables/useProfile'
import { useLocale } from '../composables/useLocale'
import RichText from '../components/RichText.vue'
import LazyImage from '../components/LazyImage.vue'
import type { WorkProject } from '../types/profile'
import { localizeExperience, localizeWorkProject } from '../i18n/messages'

const { profile } = useProfile()
const { t, locale } = useLocale()

const logoUrl = (file: string) => `${import.meta.env.BASE_URL}company-logos/${file}`

const normalizeCompany = (name: string) =>
  name.replace(/有限公司$/, '').replace(/\s+/g, '').toLowerCase()

const projectsFor = (companyZh: string): WorkProject[] => {
  if (!profile.value) return []
  const target = normalizeCompany(companyZh)
  return profile.value.workProjects
    .filter((p) => {
      const a = normalizeCompany(p.company)
      return a === target || a.includes(target) || target.includes(a)
    })
    .map((p) => localizeWorkProject(p, locale.value))
}

const experiences = computed(() => {
  if (!profile.value) return []
  return profile.value.experiences.map((exp) => ({
    source: exp,
    view: localizeExperience(exp, locale.value),
  }))
})
</script>

<template>
  <div class="route-view" v-if="profile">
    <header class="page-header">
      <span class="index mono">{{ t('exp.index') }}</span>
      <h1>{{ t('exp.h1') }}</h1>
      <p class="lead">{{ t('exp.lead') }}</p>
    </header>

    <section class="timeline">
      <article
        v-for="{ source, view } in experiences"
        :key="`${source.company}-${source.period}`"
        class="timeline-row"
      >
        <div class="timeline-meta">
          <span class="period">{{ view.period }}</span>
          <span v-if="source.logo" class="company-logo" aria-hidden="true">
            <LazyImage
              :src="logoUrl(source.logo)"
              :alt="view.company + ' logo'"
              :width="160"
              :height="160"
              object-fit="contain"
            />
          </span>
        </div>
        <div class="body">
          <h3>{{ view.company }}</h3>
          <strong class="role">{{ view.role }}</strong>
          <p class="location">{{ view.location }}</p>
          <ul>
            <li v-for="h in view.highlights" :key="h"><RichText :text="h" /></li>
          </ul>

          <section
            v-if="projectsFor(source.company).length"
            class="exp-projects"
            :aria-label="t('exp.projects.h4')"
          >
            <header class="exp-projects-head">
              <span class="exp-projects-eyebrow mono">{{ t('exp.projects.eyebrow') }}</span>
              <h4>{{ t('exp.projects.h4') }}</h4>
            </header>
            <article
              v-for="(project, i) in projectsFor(source.company)"
              :key="project.name"
              class="work-project"
            >
              <header class="wp-head">
                <span class="num mono">{{ String(i + 1).padStart(2, '0') }}</span>
                <div class="title-block">
                  <h2>{{ project.name }}</h2>
                  <p class="sub">{{ project.title }}</p>
                </div>
              </header>

              <dl class="meta">
                <div><dt>{{ t('exp.project.role') }}</dt><dd>{{ project.role }}</dd></div>
                <div><dt>{{ t('exp.project.period') }}</dt><dd>{{ project.period }}</dd></div>
                <div><dt>{{ t('exp.project.location') }}</dt><dd>{{ project.location }}</dd></div>
              </dl>

              <RichText tag="p" class="description" :text="project.description" />

              <ul class="highlights">
                <li v-for="h in project.highlights" :key="h"><RichText :text="h" /></li>
              </ul>

              <div class="stack">
                <span v-for="s in project.stack" :key="s">{{ s }}</span>
              </div>
            </article>
          </section>
        </div>
      </article>
    </section>

    <nav class="page-pager" :aria-label="t('nav.contact')">
      <RouterLink to="/" class="back" :data-tooltip="t('tt.pager.back')">{{ t('exp.pager.back') }}</RouterLink>
      <RouterLink to="/opensource" class="next" :data-tooltip="t('tt.pager.next.opensource')">{{ t('exp.pager.next') }}</RouterLink>
    </nav>
  </div>
</template>
