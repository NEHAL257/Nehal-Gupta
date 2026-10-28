export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  whatsapp?: string;
  website?: string;
}

export interface MetricItem {
  label: string;
  value: string;
  caption?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  location: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  resumeUrl: string;
  avatarUrl: string;
  workspaceImageUrl: string;
  socials: SocialLinks;
  careerGoals: string;
  interests: string[];
  metrics: MetricItem[];
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Languages' | 'UI/UX Design' | 'Databases' | 'Tools & DevOps';
  level: 'Expert' | 'Advanced' | 'Proficient';
  iconName?: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: 'Web Applications' | 'Mobile Apps' | 'Design Systems' | 'Cloud & Tools';
  thumbnailUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  technologies: string[];
  overview: string;
  challenge: string;
  solution: string;
  impactMetrics: string[];
  year: string;
}

export interface ExperienceItem {
  id: string;
  type: 'experience' | 'education' | 'milestone';
  roleOrDegree: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  current?: boolean;
  description: string;
  highlights: string[];
  technologies?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badgeText?: string;
}
