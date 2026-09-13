export interface Project {
  id: number
  title: string
  description: string
  tech_stack: string[]
  category: string
  github: string
  demo?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'SealIt',
    description:
      'A secure document authentication platform designed to protect digital documents and verify their integrity. Implemented cryptographic verification to detect unauthorized documents.',
    tech_stack: ['Python', 'Blockchain', 'Web'],
    category: 'Blockchain',
    github: 'https://github.com/u-harshitha007/sealit',
    demo: '',
    image: '/project-sealit.png',
  },
  {
    id: 2,
    title: 'VILTRUM',
    description:
      'An AI-powered real-time traffic intelligence platform for monitoring road conditions and predicting traffic risks. Provides actionable insights for safer road navigation.',
    tech_stack: ['AI', 'Web', 'Python'],
    category: 'AI',
    github: 'https://github.com/u-harshitha007/viltrum',
    demo: '',
    image: '/project-viltrum.png',
  },
  {
    id: 3,
    title: 'PrivaKYC',
    description:
      'A privacy-preserving identity and KYC protocol that eliminates the need to share raw sensitive data.',
    tech_stack: ['Algorand', 'Docker', 'Full Stack', 'Snowflake'],
    category: 'Blockchain',
    github: 'https://github.com/u-harshitha007/PrivaKYC',
    demo: '',
    image: '/project-privakyc.png',
  },
  {
    id: 4,
    title: 'Farm 2 Market',
    description:
      'First place winner at Buzi Buzz-26. B2C SaaS platform with Web3 functionality utilizing Algorand blockchain and foundational security measures for connecting farmers directly to markets.',
    tech_stack: ['Web3', 'Algorand', 'SaaS', 'Security'],
    category: 'Blockchain',
    github: 'https://github.com/u-harshitha007/farm2market',
    demo: '',
    image: '/project-farm2market.png',
  },
]
