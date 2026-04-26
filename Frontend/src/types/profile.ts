export interface ProfileResponse {
  name: string
  brandName: string
  role: string
  headline: string
  location: string
  contact: ContactInfo
  socialLinks: SocialLink[]
  summary: string
  metrics: Metric[]
  focusAreas: FocusArea[]
  principles: Principle[]
  openSourceProjects: Project[]
  skills: SkillGroup[]
  experiences: ExperienceItem[]
  education: EducationItem[]
  gitHubProfile: GitHubProfile
}

export interface ContactInfo {
  phone: string
  email: string
  gitHub: string
  bilibili: string
  blog: string
}

export interface SocialLink {
  platform: string
  handle: string
  url: string | null
}

export interface Metric {
  label: string
  value: string
  caption: string
}

export interface FocusArea {
  title: string
  description: string
  keywords: string[]
}

export interface Principle {
  title: string
  description: string
}

export interface Project {
  name: string
  title: string
  description: string
  url: string
  category: string
  impact: string
  stars: number | null
  forks: number | null
  tags: string[]
}

export interface SkillGroup {
  title: string
  tags: string[]
  description: string
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface EducationItem {
  school: string
  degree: string
  start: string
  end: string
}

export interface GitHubProfile {
  achievements: GitHubAchievement[]
  organizations: GitHubOrganization[]
}

export interface GitHubAchievement {
  name: string
  slug: string
  imageUrl: string
  url: string
}

export interface GitHubOrganization {
  login: string
  description: string | null
  avatarUrl: string
  url: string
}
