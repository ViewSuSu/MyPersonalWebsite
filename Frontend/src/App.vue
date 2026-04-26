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
  { value: `${totalStars.value}`, label: 'Stars', detail: 'GitHub repository stars' },
  { value: `${totalForks.value}`, label: 'Forks', detail: 'GitHub repository forks' },
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
            <span>GitHub Achievement</span>
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
                <span>Stars {{ formatGitHubCount(featuredProject.stars) }}</span>
                <span>Forks {{ formatGitHubCount(featuredProject.forks) }}</span>
              </div>
              <a class="project-link" :href="featuredProject.url" target="_blank" rel="noreferrer">仓库</a>
            </div>
          </div>
        </article>

        <div class="project-grid">
          <article v-for="project in supportingProjects" :key="project.name" class="project-card">
            <figure v-if="getPrimaryPreview(project)" class="project-preview">
              <img :src="getPrimaryPreview(project)!" :alt="`${project.title} 截图`" />
            </figure>
            <div class="project-card-copy">
              <span>{{ project.category }}</span>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
              <div class="project-card-footer">
                <em>Stars {{ formatGitHubCount(project.stars) }}</em>
                <em>Forks {{ formatGitHubCount(project.forks) }}</em>
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

          <article v-for="edu in profile.education" :key="`${edu.school}-${edu.start}`">
            <span>{{ edu.start }} - {{ edu.end }}</span>
            <div>
              <h3>{{ edu.school }}</h3>
              <strong>{{ edu.degree }}</strong>
              <p>教育背景</p>
            </div>
          </article>
        </div>
      </section>

      <footer class="site-footer">
        <strong>{{ profile.brandName }}</strong>
        <span>{{ profile.contact.email }}</span>
      </footer>
    </template>
  </main>
</template>
