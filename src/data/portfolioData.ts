import {
  ProfileData,
  SkillItem,
  ProjectItem,
  ExperienceItem,
  ServiceItem,
  TestimonialItem,
  AchievementItem,
} from '../types/portfolio';

export const INITIAL_PROFILE: ProfileData = {
  name: 'Nehal Gupta', // [YOUR NAME] placeholder
  title: 'Senior Full-Stack Engineer & Product Designer', // [YOUR PROFESSION] placeholder
  tagline: 'Building digital experiences that combine creativity, functionality, and performance.', // [YOUR PERSONAL TAGLINE]
  shortBio:
    'Staff-level engineer crafting high-throughput web applications, design systems, and responsive spatial interfaces with relentless attention to speed and user craft.',
  fullBio: [
    'With over 8 years of engineering experience spanning venture-backed startups and design-forward tech companies, I bridge the gap between creative visual architecture and rock-solid systems engineering.',
    'I specialize in reactive web architecture, performant TypeScript ecosystems, modular UI frameworks, and micro-frontend integrations. My approach prioritizes sub-100ms interaction latency, accessible design tokens, and maintainable software design.',
    'When not architecting web platforms or contributing to open-source developer tooling, I mentor rising engineers and experiment with generative graphics, hardware synthesizers, and mechanical keyboard acoustics.',
  ],
  location: 'Bangalore, India', // [YOUR CITY] placeholder
  email: 'alex.rivera@example.com', // [YOUR EMAIL] placeholder
  phone: '+1 (415) 890-4321',
  whatsapp: '+14158904321', // Optional WhatsApp contact
  resumeUrl: '#resume-viewer',
  avatarUrl: '/src/assets/images/hero_portrait_1793166209425.jpg',
  workspaceImageUrl: '/src/assets/images/about_workspace_1793166210935.jpg',
  careerGoals:
    'Dedicated to engineering the next generation of intuitive, lightning-fast developer tools and collaborative human-computer interfaces.',
  interests: [
    'Distributed Systems',
    'Design Systems & Tokens',
    'Web Performance & Core Web Vitals',
    'Accessible Human Interaction',
    'Creative Typography',
  ],
  socials: {
    github: 'https://github.com/alexrivera-dev',
    linkedin: 'https://linkedin.com/in/alexrivera-design',
    twitter: 'https://x.com/alexrivera_dev',
    email: 'mailto:alex.rivera@example.com',
    website: 'https://alexrivera.dev',
  },
  metrics: [
    { label: 'Years of Experience', value: '8+', caption: 'Full-stack & Design' },
    { label: 'Production Systems', value: '24+', caption: 'Shipped to users' },
    { label: 'Code Commits', value: '4.8k+', caption: 'GitHub & GitLab' },
    { label: 'Average App Latency', value: '<80ms', caption: 'P99 response time' },
  ],
};

export const SKILLS_DATA: SkillItem[] = [
  // Frontend
  {
    name: 'React 19 & Next.js',
    category: 'Frontend',
    level: 'Expert',
    iconName: 'Code2',
    description: 'Server components, concurrent rendering, dynamic layouts, and streaming UI.',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'Expert',
    iconName: 'FileCode2',
    description: 'Strict type safety, generics, compiler performance, and AST transformations.',
  },
  {
    name: 'Tailwind CSS & Modern CSS',
    category: 'Frontend',
    level: 'Expert',
    iconName: 'Palette',
    description: 'Design tokens, container queries, CSS variables, and fluid typography.',
  },
  {
    name: 'Motion & Canvas',
    category: 'Frontend',
    level: 'Advanced',
    iconName: 'Sparkles',
    description: 'High-performance 60fps micro-interactions, spring physics, and canvas rendering.',
  },
  {
    name: 'Vue.js & Svelte',
    category: 'Frontend',
    level: 'Proficient',
    iconName: 'Layout',
    description: 'Component lifecycles, reactivity engines, and cross-framework state management.',
  },

  // Backend
  {
    name: 'Node.js & Express',
    category: 'Backend',
    level: 'Expert',
    iconName: 'Server',
    description: 'High-concurrency RESTful APIs, middleware chains, streaming, and WebSockets.',
  },
  {
    name: 'Python & FastAPI',
    category: 'Languages',
    level: 'Advanced',
    iconName: 'Terminal',
    description: 'Asynchronous microservices, data processing pipelines, and OpenAPI specs.',
  },
  {
    name: 'Go (Golang)',
    category: 'Languages',
    level: 'Proficient',
    iconName: 'Cpu',
    description: 'Concurrent background workers, CLI developer tools, and lightweight microservices.',
  },
  {
    name: 'GraphQL & gRPC',
    category: 'Backend',
    level: 'Advanced',
    iconName: 'Network',
    description: 'Schema stitching, Apollo federation, protocol buffers, and batch caching.',
  },

  // UI/UX Design
  {
    name: 'Figma & Design Systems',
    category: 'UI/UX Design',
    level: 'Expert',
    iconName: 'Figma',
    description: 'Component architecture, auto-layout variables, interactive prototypes, and token exports.',
  },
  {
    name: 'Design Tokens & Tokens Studio',
    category: 'UI/UX Design',
    level: 'Advanced',
    iconName: 'Layers',
    description: 'Multi-brand token pipelines bridging design primitives directly into codebases.',
  },
  {
    name: 'WCAG Accessibility (a11y)',
    category: 'UI/UX Design',
    level: 'Expert',
    iconName: 'Eye',
    description: 'Screen reader compliance, keyboard navigation flows, and contrast auditing.',
  },

  // Databases
  {
    name: 'PostgreSQL & Drizzle',
    category: 'Databases',
    level: 'Expert',
    iconName: 'Database',
    description: 'Schema modeling, indexing, connection pooling, and transactional integrity.',
  },
  {
    name: 'Redis & Caching',
    category: 'Databases',
    level: 'Advanced',
    iconName: 'Zap',
    description: 'In-memory key-value caching, rate limiting, and pub/sub messaging queues.',
  },
  {
    name: 'MongoDB & Document DBs',
    category: 'Databases',
    level: 'Proficient',
    iconName: 'HardDrive',
    description: 'Aggregation pipelines, indexing, and distributed document modeling.',
  },

  // Tools & DevOps
  {
    name: 'Git & GitHub Actions',
    category: 'Tools & DevOps',
    level: 'Expert',
    iconName: 'GitBranch',
    description: 'Automated CI/CD pipelines, semantic versioning, and monorepo management.',
  },
  {
    name: 'Docker & Containers',
    category: 'Tools & DevOps',
    level: 'Advanced',
    iconName: 'Box',
    description: 'Multi-stage builds, container hardening, and compose orchestration.',
  },
  {
    name: 'Vite & Webpack',
    category: 'Tools & DevOps',
    level: 'Expert',
    iconName: 'Wrench',
    description: 'Rollup bundling, tree-shaking optimization, and modern build tooling.',
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aether-analytics',
    title: 'Aether Cloud Analytics Platform',
    tagline: 'Real-time observability platform handling 10M+ events per minute with sub-second dashboards.',
    category: 'Web Applications',
    thumbnailUrl: '/src/assets/images/project_analytics_platform_1793166210897.jpg',
    demoUrl: 'https://demo.aether-analytics.internal',
    githubUrl: 'https://github.com/example/aether-analytics',
    featured: true,
    year: '2025',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'D3.js', 'Node.js', 'TimescaleDB', 'Redis'],
    overview:
      'Aether is an enterprise-grade observability suite built for distributed teams to monitor microservice latency, throughput, error rates, and cloud resource consumption across multi-region environments.',
    challenge:
      'Rendering dynamic time-series charts with over 100,000 datapoints in real-time caused heavy UI thread freezing and dropped frame rates in legacy client implementations.',
    solution:
      'Engineered an offscreen Canvas and Web Worker aggregation layer that downsamples incoming telemetry vectors before sending them to high-performance SVG visualizers, maintaining smooth 60fps interaction during live spikes.',
    impactMetrics: [
      'Processed 10M+ events/min without UI latency degradation',
      '42% reduction in client bundle size through code splitting',
      'Adopted by 14 enterprise infrastructure teams',
    ],
  },
  {
    id: 'prism-fintech',
    title: 'Prism Mobile Wealth & Portfolio',
    tagline: 'Next-generation personal wealth management app with real-time multi-asset aggregation.',
    category: 'Mobile Apps',
    thumbnailUrl: '/src/assets/images/project_fintech_mobile_1793166209744.jpg',
    demoUrl: 'https://prism-wealth.internal',
    githubUrl: 'https://github.com/example/prism-fintech',
    featured: true,
    year: '2024',
    technologies: ['React Native', 'TypeScript', 'Tailwind', 'Zustand', 'FastAPI', 'PostgreSQL'],
    overview:
      'Prism provides private investors and financial analysts with a clean, distraction-free cockpit to monitor holdings across global equities, index funds, and digital assets with instant valuation conversions.',
    challenge:
      'Handling live price streaming updates while ensuring banking-grade encryption, biometric authentication, and offline capability without desynchronizing historical portfolios.',
    solution:
      'Designed an offline-first synchronization engine using localized SQLite caches and bi-directional diff sync. Integrated biometric WebAuthn security protocols with frictionless biometric face/touch unlock.',
    impactMetrics: [
      'Over $120M in aggregate portfolio assets tracked',
      '4.9/5 average user satisfaction rating',
      'Sub-50ms cold-start screen transition speed',
    ],
  },
  {
    id: 'helix-design-system',
    title: 'Helix Unified Design System',
    tagline: 'Enterprise-wide component library and design token engine powering 8 product suites.',
    category: 'Design Systems',
    thumbnailUrl: '/src/assets/images/project_design_system_1793166210543.jpg',
    demoUrl: 'https://helix-ui.internal',
    githubUrl: 'https://github.com/example/helix-design-system',
    featured: true,
    year: '2024',
    technologies: ['React', 'TypeScript', 'Figma Tokens', 'Tailwind CSS', 'Storybook', 'Radix UI'],
    overview:
      'A comprehensive, accessible design system containing 65+ foundational and composite components, standardized typography, elevation tokens, dark/light themes, and automated Figma-to-code synchronization.',
    challenge:
      'Fragmented engineering teams maintained disparate UI component copies across 8 internal web applications, resulting in conflicting accessibility bugs and visual brand inconsistency.',
    solution:
      'Architected an atomic token pipeline using Style Dictionary and automated GitHub pull request bots that compile Figma token changes directly into semantic CSS variables and TypeScript component props.',
    impactMetrics: [
      '100% WCAG 2.1 AA accessibility compliance across all components',
      'Cut frontend feature delivery time by 35% across all teams',
      'Over 65 production-tested components with 98% unit test coverage',
    ],
  },
  {
    id: 'cloudpulse-devops',
    title: 'CloudPulse CI/CD Orchestration',
    tagline: 'Visual deployment pipeline builder with automated canary rollouts and health checking.',
    category: 'Cloud & Tools',
    thumbnailUrl: '/src/assets/images/project_analytics_platform_1793166210897.jpg',
    demoUrl: 'https://cloudpulse-orchestrator.internal',
    githubUrl: 'https://github.com/example/cloudpulse',
    featured: false,
    year: '2023',
    technologies: ['TypeScript', 'React Flow', 'Go', 'Docker', 'Kubernetes', 'WebSockets'],
    overview:
      'A browser-based drag-and-drop deployment pipeline designer allowing platform engineers to construct complex Kubernetes deployment workflows with automated validation rules and branch gates.',
    challenge:
      'Managing state for large DAG (Directed Acyclic Graph) workflow trees with real-time step progress updates from dozens of concurrent container runners.',
    solution:
      'Built a reactive node-graph state store with optimistic rollback handling and continuous WebSocket broadcast streams for live container logs.',
    impactMetrics: [
      'Eliminated manual deployment script errors by 90%',
      'Over 2,500 daily automated pipelines executed',
      'Interactive visual graph renders at smooth 60fps',
    ],
  },
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: 'exp-1',
    type: 'experience',
    roleOrDegree: 'Staff Frontend Engineer & Design Architect',
    organization: 'Vanguard Systems',
    location: 'San Francisco, CA (Hybrid)',
    startDate: '2023',
    endDate: 'Present',
    current: true,
    description:
      'Leading front-end platform engineering, UI architecture, and design system governance across customer-facing product suites.',
    highlights: [
      'Architected core micro-frontend infrastructure reducing application bundle payload by 40% and improving Core Web Vitals to 99th percentile.',
      'Mentored 12 mid-level and senior engineers across three product squads, fostering best practices in accessibility, testing, and modern React patterns.',
      'Spearheaded the unified design token initiative connecting Figma variables with production Tailwind styling.',
    ],
    technologies: ['React 19', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Jest'],
  },
  {
    id: 'exp-2',
    type: 'experience',
    roleOrDegree: 'Senior Full-Stack Engineer',
    organization: 'Nexus Cloud Technologies',
    location: 'Austin, TX',
    startDate: '2020',
    endDate: '2023',
    current: false,
    description:
      'Designed and scaled high-concurrency cloud management dashboards, REST & WebSocket APIs, and data ingestion pipelines.',
    highlights: [
      'Built real-time telemetry dashboard streaming cluster metrics to 30,000+ active enterprise users.',
      'Engineered automated database migration workflows with zero-downtime PostgreSQL schema updates.',
      'Collaborated closely with product designers to prototype and iterate high-fidelity customer onboarding workflows.',
    ],
    technologies: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    id: 'exp-3',
    type: 'experience',
    roleOrDegree: 'Software Engineer',
    organization: 'Hyperion Creative Studio',
    location: 'Seattle, WA',
    startDate: '2018',
    endDate: '2020',
    current: false,
    description:
      'Crafted bespoke web applications, interactive marketing tools, and design-forward e-commerce interfaces for international brands.',
    highlights: [
      'Delivered 18 custom production web applications with 100% on-time milestone execution.',
      'Introduced continuous integration pipelines, automated visual regression tests, and Webpack build optimizers.',
      'Received the Agency Innovation Award for interactive 3D WebGL product customizer.',
    ],
    technologies: ['JavaScript', 'React', 'Sass', 'Node.js', 'Webpack', 'Three.js'],
  },
  {
    id: 'edu-1',
    type: 'education',
    roleOrDegree: 'B.S. in Computer Science',
    organization: 'University of Washington',
    location: 'Seattle, WA',
    startDate: '2014',
    endDate: '2018',
    current: false,
    description:
      'Specialized in Software Systems, Human-Computer Interaction (HCI), and Distributed Computing Algorithms.',
    highlights: [
      'Graduated Magna Cum Laude with 3.89 GPA',
      'President of the Student HCI & Creative Coding Guild',
      'Published undergraduate paper on accessible web component paradigms',
    ],
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Full-Stack Web Development',
    description:
      'End-to-end development of modern web applications with responsive architecture, resilient APIs, and seamless database integration.',
    iconName: 'LayoutGrid',
    deliverables: [
      'Custom React/Next.js Architecture',
      'Robust Node/Python Backend APIs',
      'High-performance database modeling',
      'CI/CD automated deployment setups',
    ],
  },
  {
    id: 'srv-2',
    title: 'Design Systems & UI Engineering',
    description:
      'Bridging design tokens and production code to create accessible, consistent, and reusable component libraries for growing engineering teams.',
    iconName: 'Component',
    deliverables: [
      'Atomic component library creation',
      'Figma-to-code token synchronization',
      'WCAG 2.1 AA accessibility audit',
      'Interactive Storybook documentation',
    ],
  },
  {
    id: 'srv-3',
    title: 'Performance & Architecture Consulting',
    description:
      'In-depth audits of existing web applications to identify bottlenecks, optimize Core Web Vitals, reduce bundle overhead, and scale architecture.',
    iconName: 'Gauge',
    deliverables: [
      'Comprehensive Lighthouse & Web Vitals audit',
      'Bundle size reduction & code splitting',
      'Caching and database query tuning',
      'Detailed architectural remediation report',
    ],
  },
  {
    id: 'srv-4',
    title: 'Rapid MVP Prototyping',
    description:
      'Turning product visions into polished, venture-ready functional applications in record time without compromising code foundations.',
    iconName: 'Rocket',
    deliverables: [
      'Clickable functional prototypes',
      'Production-ready authentication & storage',
      'Integrated payment gateways & analytics',
      'Seamless handoff & documentation',
    ],
  },
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'Best Developer Experience Tooling Award',
    issuer: 'DevCon Global Summit',
    year: '2024',
    description: 'Recognized for open-source contributions to token transformation and CLI build workflows.',
    badgeText: 'Winner',
  },
  {
    id: 'ach-2',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2023',
    description: 'Professional certification verifying expertise in distributed cloud architectures, security, and scalability.',
    badgeText: 'Certified',
  },
  {
    id: 'ach-3',
    title: 'Top 50 Open Source Contributor',
    issuer: 'Web Ecosystem Foundation',
    year: '2022',
    description: 'Honored for active maintenance of popular UI micro-libraries and accessibility plugins.',
    badgeText: 'Honoree',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Vanguard Systems',
    quote:
      'Alex operates at the rare intersection of deep system architecture and immaculate visual taste. The design system and dashboards Alex engineered completely revolutionized our delivery velocity and delight our enterprise customers every single day.',
  },
  {
    id: 'test-2',
    name: 'Marcus Chen',
    role: 'Chief Technology Officer',
    company: 'Nexus Cloud Technologies',
    quote:
      'Few engineers can take an ambiguous technical problem, design the entire user interaction paradigm, and implement a resilient, scalable backend with sub-100ms response times. Alex is that rare 1% talent.',
  },
  {
    id: 'test-3',
    name: 'Sophia Patel',
    role: 'Lead Product Designer',
    company: 'Hyperion Creative',
    quote:
      'Working alongside Alex is a dream for any designer. The fidelity of implementation is pristine, the micro-animations are silky smooth, and the attention to accessibility standards is unmatched.',
  },
];
