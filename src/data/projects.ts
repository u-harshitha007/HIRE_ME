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
    title: 'AI Portfolio Assistant',
    description:
      'Intelligent chatbot powered by Groq LLM that answers questions about skills, experience, and projects. Built with FastAPI backend and React frontend with streaming responses.',
    tech_stack: ['Python', 'FastAPI', 'Groq', 'React', 'TypeScript'],
    category: 'AI',
    github: 'https://github.com/YOUR_USERNAME/portfolio-ai',
    demo: '',
    image: '/project-ai-chat.png',
  },
  {
    id: 2,
    title: 'Machine Learning Pipeline',
    description:
      'End-to-end ML pipeline for data preprocessing, model training, and deployment. Includes automated feature engineering and model evaluation with MLflow tracking.',
    tech_stack: ['Python', 'Scikit-learn', 'MLflow', 'Docker'],
    category: 'ML',
    github: 'https://github.com/YOUR_USERNAME/ml-pipeline',
    demo: '',
    image: '/project-ml.png',
  },
  {
    id: 3,
    title: 'Real-time Data Dashboard',
    description:
      'Interactive dashboard for visualizing real-time data streams with WebSocket integration. Features custom charts, filters, and export functionality.',
    tech_stack: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
    category: 'Web',
    github: 'https://github.com/YOUR_USERNAME/dashboard',
    demo: 'https://demo-link.com',
    image: '/project-dashboard.png',
  },
  {
    id: 4,
    title: 'NLP Text Analyzer',
    description:
      'Natural language processing tool for sentiment analysis, entity recognition, and text classification. Supports multiple languages and custom model training.',
    tech_stack: ['Python', 'spaCy', 'Transformers', 'FastAPI'],
    category: 'AI',
    github: 'https://github.com/YOUR_USERNAME/nlp-analyzer',
    demo: '',
    image: '/project-nlp.png',
  },
]
