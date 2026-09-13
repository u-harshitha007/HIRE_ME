# HARSHITHA - AI Engineer Portfolio

A premium, modern portfolio website for an AI Engineer, inspired by high-end design principles with a focus on clean aesthetics, sophisticated animations, and excellent user experience.

## 🎨 Design Philosophy

This portfolio embodies:
- **Premium & Minimal**: Clean design with intentional whitespace
- **Technical Excellence**: Smooth animations and polished interactions
- **AI-Focused**: Showcasing AI engineering expertise and projects
- **Modern Stack**: Built with React, TypeScript, and Tailwind CSS
- **Responsive**: Perfect experience across desktop, tablet, and mobile

## 🚀 Features

### Core Sections
1. **Hero** - Bold introduction with name, role, and quick actions
2. **About** - Professional summary of AI engineering focus
3. **Experience** - Timeline of roles with technologies used
4. **Tech Stack** - Visual showcase of AI/ML and development tools
5. **Projects** - Card-based layout with project details
6. **Contact** - Direct contact links and call-to-action
7. **AI Assistant** - Interactive chatbot powered by Groq LLM

### Technical Features
- ✅ Smooth scroll animations with progressive reveal
- ✅ Premium hover states and micro-interactions
- ✅ Responsive navigation with mobile drawer menu
- ✅ AI-powered chat assistant (FastAPI + Groq)
- ✅ Clean minimal opening animation
- ✅ Optimized build (240KB gzipped)
- ✅ Full TypeScript support
- ✅ Accessible and semantic HTML

## 📦 Tech Stack

### Frontend
- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool
- **Lucide React** - Icons
- **React Icons** - Technology logos

### Backend (AI Assistant)
- **FastAPI** - Python backend framework
- **Groq** - LLM API for chat responses
- **Python 3.11+** - Backend runtime
- **CORS** - Cross-origin support

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.11+ (for AI assistant)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd HIRE_ME
```

2. **Install frontend dependencies**
```bash
npm install
```

3. **Install backend dependencies**
```bash
cd backend
pip install -r requirements.txt
```

4. **Set up environment variables**

Frontend (.env):
```bash
cp .env.example .env
# Edit .env if needed
VITE_API_URL=http://localhost:8000
```

Backend (backend/.env):
```bash
cp backend/.env.example backend/.env
# Add your Groq API key
GROQ_API_KEY=your_groq_api_key_here
```

### Running the Application

1. **Start the backend** (Terminal 1):
```bash
cd backend
python main.py
```
Backend runs on: http://localhost:8000

2. **Start the frontend** (Terminal 2):
```bash
npm run dev
```
Frontend runs on: http://localhost:5173

### Building for Production

```bash
npm run build
npm run preview
```

## 📝 Customization Guide

### 1. Personal Information

Update the following files with your information:

**Frontend Data:**
- `src/data/projects.ts` - Your projects
- `src/data/experience.ts` - Your work experience
- `src/data/technologies.ts` - Your tech stack

**Backend Profile:**
- `backend/main.py` - Update `PROFILE_DATA` dict with your information

**Contact Links:**
- `src/components/hero/Hero.tsx` - GitHub/LinkedIn links
- `src/components/layout/Header.tsx` - Social links
- `src/components/contact/Contact.tsx` - Contact information
- `src/components/layout/Footer.tsx` - Footer links

### 2. Content Updates

**Hero Section** (`src/components/hero/Hero.tsx`):
```typescript
// Update stats
const STATS = [
  { value: '4+', label: 'AI Projects' },
  { value: '2+', label: 'Years Experience' },
  // ... customize
]
```

**About Section** (`src/components/about/About.tsx`):
- Edit the introduction text
- Update your professional description

**Projects** (`src/data/projects.ts`):
```typescript
{
  id: 1,
  title: 'Your Project Name',
  description: 'Project description',
  tech_stack: ['Tech1', 'Tech2'],
  category: 'AI',
  github: 'https://github.com/...',
  demo: 'https://...',
}
```

### 3. Styling Customization

**Colors** (`src/index.css`):
```css
--color-bg: #0a0a0a;        /* Background */
--color-fg: #efeee9;        /* Foreground */
--color-primary: #eab308;   /* Accent (yellow) */
--color-muted: #8a8a8a;     /* Muted text */
--color-border: #2c2c2c;    /* Borders */
```

**Typography** (`src/index.css`):
- Display font: Anton
- Body font: Roboto Flex

**Spacing** (`src/styles/theme.ts`):
- Section padding
- Animation timings
- Reveal delays

## 🤖 AI Assistant Setup

The AI assistant uses **Groq** for fast LLM inference.

### Getting a Groq API Key

1. Go to https://console.groq.com
2. Sign up for a free account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the key to `backend/.env`:
   ```
   GROQ_API_KEY=gsk_...
   ```

### Customizing AI Responses

Edit the profile data in `backend/main.py`:

```python
PROFILE_DATA = {
    "name": "YOUR NAME",
    "role": "YOUR ROLE",
    # ... update all fields
}
```

The AI will only answer based on the information in `PROFILE_DATA`.

## 📱 Responsive Design

The portfolio is fully responsive:
- **Desktop**: Full layout with all features
- **Tablet**: Adapted grid layouts
- **Mobile**: Stacked sections with drawer navigation

## 🔒 Security

✅ Environment variables properly configured
✅ `.env` files in `.gitignore`
✅ No API keys in source code
✅ CORS configured for local development
✅ `.env.example` files provided

**Never commit:**
- `.env` files
- API keys
- Secrets or credentials

## 🚢 Deployment

### Frontend (Vercel/Netlify)

1. Build the project: `npm run build`
2. Deploy the `dist/` folder
3. Set environment variables in platform dashboard
4. Configure custom domain if needed

### Backend (Railway/Render)

1. Choose a Python hosting service
2. Set environment variables (GROQ_API_KEY)
3. Update CORS origins in `backend/main.py`
4. Update `VITE_API_URL` in frontend environment

## 📊 Performance

Current build stats:
- Bundle size: ~240KB (gzipped: 78KB)
- CSS: ~41KB (gzipped: 8KB)
- Fast initial load
- Optimized animations
- Lazy loading where applicable

## 🎯 Project Structure

```
HIRE_ME/
├── src/
│   ├── components/
│   │   ├── hero/          # Hero section
│   │   ├── about/         # About section
│   │   ├── skills/        # Tech stack
│   │   ├── experience/    # Experience timeline
│   │   ├── projects/      # Project cards
│   │   ├── contact/       # Contact section
│   │   ├── ai-chat/       # AI assistant
│   │   ├── layout/        # Header, Footer, Nav
│   │   └── ui/            # Reveal, animations
│   ├── data/              # Content data files
│   ├── styles/            # Theme & global styles
│   └── App.tsx           # Main app component
├── backend/
│   ├── main.py           # FastAPI backend
│   ├── requirements.txt  # Python dependencies
│   └── .env.example      # Environment template
├── public/               # Static assets
└── package.json          # Frontend dependencies
```

## 🐛 Troubleshooting

### AI Assistant Not Working
- Check backend is running on port 8000
- Verify `GROQ_API_KEY` is set in `backend/.env`
- Check browser console for CORS errors
- Ensure `VITE_API_URL` matches backend URL

### Build Errors
- Clear cache: `rm -rf node_modules dist && npm install`
- Check Node.js version: `node --version` (need 18+)
- Check TypeScript errors: `npm run build`

### Styling Issues
- Clear Tailwind cache
- Rebuild: `npm run build`
- Check browser dev tools for CSS conflicts

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📧 Contact

- Website: [Your Portfolio URL]
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/YOUR_USERNAME)
- Email: your.email@example.com

---

**Built with 💛 by HARSHITHA**
