<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { getProfile } from './services/profileApi'
import type { ProfileResponse, Project, SocialLink } from './types/profile'

const githubAvatarUrl = 'https://avatars.githubusercontent.com/u/107746317?v=4'
const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const narakaGallery = [
  assetUrl('github-assets/naraka/MainWindows.png'),
  assetUrl('github-assets/naraka/HeroList.png'),
  assetUrl('github-assets/naraka/Tianfu.gif'),
  assetUrl('github-assets/naraka/PersonalInfo.png'),
  assetUrl('github-assets/naraka/Weapon.png'),
]

const repoPreviews: Record<string, string[]> = {
  'Su.WPF.TreeViewEx': [assetUrl('github-assets/treeview/HD.gif')],
  'Su.Revit.UI.StatusBarEx': [assetUrl('github-assets/statusbar/HD.gif'), assetUrl('github-assets/statusbar/Cancel-HD.gif')],
  'Su.Revit.HelixToolkit.SharpDX': [assetUrl('github-assets/helix/HD.gif')],
}

const platformClassMap: Record<string, string> = {
  GitHub: 'github',
  Bilibili: 'bilibili',
  小红书: 'redbook',
  微信公众号: 'wechat',
  知乎: 'zhihu',
}

const platformIconMap: Record<string, string> = {
  GitHub: assetUrl('brand-icons/github.svg'),
  Bilibili: assetUrl('brand-icons/bilibili.svg'),
  小红书: assetUrl('brand-icons/xiaohongshu.svg'),
  微信公众号: assetUrl('brand-icons/wechat.svg'),
  知乎: assetUrl('brand-icons/zhihu.svg'),
}

const profile = ref<ProfileResponse | null>(null)
const isLoading = ref(true)
const error = ref('')

const featuredProject = computed(() =>
  profile.value?.openSourceProjects.find((project) => project.name === 'NarakaBladepoint-WPF') ?? null,
)

const supportingProjects = computed(() =>
  profile.value?.openSourceProjects.filter((project) => project.name !== 'NarakaBladepoint-WPF') ?? [],
)

const totalStars = computed(() =>
  profile.value?.openSourceProjects.reduce((total, project) => total + (project.stars ?? 0), 0) ?? 0,
)

const totalForks = computed(() =>
  profile.value?.openSourceProjects.reduce((total, project) => total + (project.forks ?? 0), 0) ?? 0,
)

const heroMetrics = computed(() => [
  { value: '3.5年', label: '工作经验', detail: '桌面应用开发 / WPF / Revit / CAD' },
  { value: `${profile.value?.openSourceProjects.length ?? 0}`, label: '开源作品', detail: '组件、插件、可视化工具' },
  { value: `${totalStars.value}`, label: '星标', detail: 'GitHub 仓库获得的星标' },
  { value: `${totalForks.value}`, label: '分支', detail: 'GitHub 仓库被分支引用的次数' },
])

const aboutItems = computed(() =>
  profile.value?.focusAreas.map((area, index) => ({
    ...area,
    principle: profile.value?.principles[index] ?? null,
  })) ?? [],
)

function getRepoPreviews(project: Project) {
  return repoPreviews[project.name] ?? []
}

function getPrimaryPreview(project: Project) {
  return getRepoPreviews(project)[0] ?? null
}

function getPlatformClass(social: SocialLink) {
  return platformClassMap[social.platform] ?? 'default'
}

function getPlatformIcon(social: SocialLink) {
  return platformIconMap[social.platform]
}

function formatGitHubCount(value: number | null) {
  return value === null ? '同步中' : `${value}`
}

onMounted(async () => {
  try {
    profile.value = await getProfile()
  } catch (requestError) {
    error.value = requestError instanceof Error ? requestError.message : '无法加载个人网站数据'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <main class="site-shell">
    <section v-if="isLoading" class="state">正在加载小窗同学...</section>
    <section v-else-if="error" class="state state-error">{{ error }}</section>

    <template v-else-if="profile">
      <nav class="topbar" aria-label="站点导航">
        <a class="brand" href="#home">
          <span>{{ profile.brandName }}</span>
          <small>ViewSuSu</small>
        </a>
        <div class="nav-links">
          <a href="#home">关于</a>
          <a href="#projects">项目</a>
          <a href="#experience">经历</a>
        </div>
      </nav>

      <header id="home" class="hero">
        <section class="hero-copy">
          <p class="eyebrow">{{ profile.role }}</p>
          <h1>{{ profile.brandName }}</h1>
          <p class="headline">{{ profile.headline }}</p>
          <p class="summary">{{ profile.summary }}</p>
          <div class="hero-actions">
            <a class="primary-link" href="#projects">查看作品</a>
          </div>
        </section>

        <aside class="workbench-panel profile-panel" aria-label="个人信息">
          <div class="profile-strip">
            <img :src="githubAvatarUrl" :alt="`${profile.brandName} 头像`" />
            <div>
              <span>开发者 / 内容创作者</span>
              <strong>{{ profile.name }}</strong>
              <p>{{ profile.location }}</p>
            </div>
          </div>
          <div class="identity-tags">
            <span>WPF</span>
            <span>桌面应用</span>
            <span>BIM/CAD</span>
            <span>AI Tooling</span>
          </div>
          <div class="contact-line" aria-label="联系方式">
            <a :href="`mailto:${profile.contact.email}`">
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path
                  d="M1.75 3A1.75 1.75 0 0 0 0 4.75v6.5C0 12.216.784 13 1.75 13h12.5A1.75 1.75 0 0 0 16 11.25v-6.5A1.75 1.75 0 0 0 14.25 3H1.75Zm-.25 2.188v6.062c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.188l-5.54 3.32a1.75 1.75 0 0 1-1.92 0L1.5 5.188Zm.874-.688 5.438 3.258a.25.25 0 0 0 .376 0L13.626 4.5H2.374Z"
                />
              </svg>
              {{ profile.contact.email }}
            </a>
          </div>
          <div class="social-dock" aria-label="平台入口">
            <component
              :is="social.url ? 'a' : 'span'"
              v-for="social in profile.socialLinks"
              :key="social.platform"
              class="social-icon-link"
              :class="getPlatformClass(social)"
              :href="social.url || undefined"
              :target="social.url ? '_blank' : undefined"
              :rel="social.url ? 'noreferrer' : undefined"
              :title="social.url ? `${social.platform}：${social.handle}` : `${social.platform}：搜索 ${social.handle}`"
            >
              <img v-if="getPlatformIcon(social)" :src="getPlatformIcon(social)" :alt="social.platform" />
              <span v-else>{{ social.platform.slice(0, 2) }}</span>
            </component>
          </div>
        </aside>

        <section class="metric-board" aria-label="个人数据">
          <article v-for="metric in heroMetrics" :key="metric.label">
            <strong>{{ metric.value }}</strong>
            <span>{{ metric.label }}</span>
            <p>{{ metric.detail }}</p>
          </article>
          <article v-if="profile.gitHubProfile.achievements.length" class="achievement-metric">
            <span>GitHub 成就</span>
            <div class="achievement-inline">
              <a
                v-for="achievement in profile.gitHubProfile.achievements"
                :key="achievement.slug"
                :href="achievement.url"
                target="_blank"
                rel="noreferrer"
              >
                <img :src="achievement.imageUrl" :alt="achievement.name" />
                <strong>{{ achievement.name }}</strong>
              </a>
            </div>
          </article>
        </section>

        <section class="hero-about" aria-label="关于我">
          <div class="about-board">
            <article v-for="area in aboutItems" :key="area.title" class="focus-card">
              <div class="focus-card-head">
                <span>{{ area.title }}</span>
                <strong v-if="area.principle">{{ area.principle.title }}</strong>
              </div>
              <p>{{ area.description }}</p>
              <p v-if="area.principle" class="principle-note">{{ area.principle.description }}</p>
              <div class="tag-list subtle">
                <span v-for="keyword in area.keywords" :key="keyword">{{ keyword }}</span>
              </div>
            </article>
          </div>
        </section>
      </header>

      <section id="projects" class="projects-section section-block">
        <div class="section-heading project-section-label">
          <p>02 / 开源项目</p>
        </div>

        <article v-if="featuredProject" class="featured-project">
          <div class="gallery-wall" aria-label="NarakaBladepoint-WPF 项目截图">
            <figure v-for="(image, index) in narakaGallery" :key="image" :class="`shot-${index + 1}`">
              <img :src="image" :alt="`${featuredProject.title} 截图 ${index + 1}`" />
            </figure>
          </div>
          <div class="featured-copy">
            <h3>{{ featuredProject.name }}</h3>
            <p>{{ featuredProject.description }}</p>
            <div class="featured-footer">
              <div class="project-meta">
                <span class="github-count" :aria-label="`星标 ${formatGitHubCount(featuredProject.stars)}`">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.193a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.981a.75.75 0 0 1-1.088-.79l.72-4.194-3.047-2.97a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
                    />
                  </svg>
                  {{ formatGitHubCount(featuredProject.stars) }}
                </span>
                <span class="github-count" :aria-label="`分支 ${formatGitHubCount(featuredProject.forks)}`">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M5 3.25a2 2 0 1 0-2.75 1.854v5.792a2 2 0 1 0 1.5 0V5.104A2 2 0 0 0 5 3.25ZM3 2.75a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 9.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm10-7a2 2 0 1 0-2.75-1.854v.854A2.75 2.75 0 0 1 7.5 7H5.75a.75.75 0 0 0 0 1.5H7.5a4.25 4.25 0 0 0 4.25-4.25v-.854A2 2 0 0 0 13 5.25Zm0-2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
                    />
                  </svg>
                  {{ formatGitHubCount(featuredProject.forks) }}
                </span>
              </div>
              <a class="project-link" :href="featuredProject.url" target="_blank" rel="noreferrer">仓库</a>
            </div>
          </div>
        </article>

        <div class="project-grid">
          <article v-for="project in supportingProjects" :key="project.name" class="project-card">
            <figure class="project-preview" :class="{ 'is-placeholder': !getPrimaryPreview(project) }">
              <img v-if="getPrimaryPreview(project)" :src="getPrimaryPreview(project)!" :alt="`${project.title} 截图`" />
              <figcaption v-else>
                <span>{{ project.category }}</span>
                <strong>{{ project.name }}</strong>
              </figcaption>
            </figure>
            <div class="project-card-copy">
              <span>{{ project.category }}</span>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-card-footer">
                <em class="github-count" :aria-label="`星标 ${formatGitHubCount(project.stars)}`">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.193a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.981a.75.75 0 0 1-1.088-.79l.72-4.194-3.047-2.97a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"
                    />
                  </svg>
                  {{ formatGitHubCount(project.stars) }}
                </em>
                <em class="github-count" :aria-label="`分支 ${formatGitHubCount(project.forks)}`">
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path
                      d="M5 3.25a2 2 0 1 0-2.75 1.854v5.792a2 2 0 1 0 1.5 0V5.104A2 2 0 0 0 5 3.25ZM3 2.75a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm0 9.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Zm10-7a2 2 0 1 0-2.75-1.854v.854A2.75 2.75 0 0 1 7.5 7H5.75a.75.75 0 0 0 0 1.5H7.5a4.25 4.25 0 0 0 4.25-4.25v-.854A2 2 0 0 0 13 5.25Zm0-2.5a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z"
                    />
                  </svg>
                  {{ formatGitHubCount(project.forks) }}
                </em>
                <a :href="project.url" target="_blank" rel="noreferrer">仓库</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="experience" class="experience-section section-block">
        <div class="section-heading compact">
          <p>03 / 经历</p>
        </div>

        <div class="timeline">
          <article v-for="exp in profile.experiences" :key="`${exp.company}-${exp.period}`">
            <span>{{ exp.period }}</span>
            <div>
              <h3>{{ exp.company }}</h3>
              <strong>{{ exp.role }}</strong>
              <p>{{ exp.location }}</p>
              <ul>
                <li v-for="highlight in exp.highlights" :key="highlight">{{ highlight }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <footer class="site-footer">
        <strong>{{ profile.brandName }}</strong>
      </footer>
    </template>
  </main>
</template>
