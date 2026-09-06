# HIRE_ME - AI-Powered Portfolio Website

A polished personal portfolio website with an integrated AI assistant that can answer questions about your skills, experience, and projects.

## Features

- 🎨 **Modern Design**: Smooth animations, responsive layout, dark aesthetic
- 🤖 **AI Assistant**: Chat interface powered by Groq LLM
- 📱 **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance**: Built with React + Vite + TypeScript
- 🎭 **Smooth Animations**: Premium reveal animations and transitions
- 🔒 **Secure**: API keys stored in environment variables

## Tech Stack

### Frontend
- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4
- React Hook Form + Zod validation
- Lucide React icons

### Backend
- Python FastAPI
- Groq API (LLama 3.3 70B)
- Python-dotenv

## Project Structure

```
HIRE_ME/
├── backend/
│   ├── main.py              # FastAPI server with Groq integration
│   ├── requirements.txt     # Python dependencies
│   ├── .env                 # API keys (NOT committed to git)
│   └── .env.example         # Example env file
├── src/
│   ├── components/
│   │   ├── hero/           # Hero section
│   │   ├── about/          # About section
│   │   ├── skills/         # Skills section
│   │   ├── education/      # Education section
│   │   ├── achievements/   # Achievements section
│   │   ├── projects/       # Projects section
│   │   ├── contact/        # Contact form
│   │   ├── ai-chat/        # AI chat interface
│   │   └── layout/         # Header, Nav, Footer
│   ├── hooks/              # Custom React hooks
│   ├── styles/             # Global styles and theme
│   ├── data/               # Data files
│   ├── App.tsx
│   └── main.tsx
├── public/                  # Static assets
├── .gitignore
├── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js 18+ 
- Python 3.9+
- Groq API Key ([Get one here](https://console.groq.com/))

### Frontend Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
```

3. Activate the virtual environment:

**Windows:**
```bash
venv\Scripts\activate
```

**Mac/Linux:**
```bash
source venv/bin/activate
```

4. Install Python dependencies:
```bash
pip install -r requirements.txt
```

5. Create `.env` file in the `backend/` directory:
```bash
cp .env.example .env
```

6. Add your Groq API key to `backend/.env`:
```env
GROQ_API_KEY=your_actual_groq_api_key_here
```

7. Run the FastAPI server:
```bash
python main.py
```

Or with uvicorn directly:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The backend will run on `http://localhost:8000`

### Testing the API

Visit `http://localhost:8000/docs` to see the interactive API documentation (Swagger UI).

Test the chat endpoint:
```bash
curl -X POST "http://localhost:8000/chat" \
  -H "Content-Type: application/json" \
  -d '{"question": "What skills does this person have?"}'
```

## Customization

### Replace Placeholder Content

1. **Personal Information**: Update in `backend/main.py` - `PROFILE_DATA` dictionary
2. **Hero Section**: Edit `src/components/hero/Hero.tsx`
3. **About Section**: Edit `src/components/about/About.tsx`
4. **Skills**: Edit `src/components/skills/Skills.tsx`
5. **Projects**: Edit `src/components/projects/Projects.tsx`
6. **Achievements**: Edit `src/components/achievements/Achievements.tsx`
7. **Education**: Edit `src/components/education/Education.tsx`
8. **Contact**: Edit `src/components/contact/Contact.tsx`

### Update Links and Social Media

Edit `src/components/layout/Header.tsx` and update the `SOCIAL_LINKS` array with your actual URLs.

### Change Colors/Theme

Edit `src/styles/theme.ts` to customize the color scheme and design tokens.

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting service.

### Backend
Deploy to:
- Railway
- Render
- Fly.io
- AWS/GCP/Azure

Make sure to set the `GROQ_API_KEY` environment variable on your hosting platform.

## Environment Variables

**NEVER** commit the `.env` file to Git. It contains sensitive API keys.

Required environment variables:
- `GROQ_API_KEY`: Your Groq API key

## Security Notes

- ✅ API keys are stored in `.env` files (not committed)
- ✅ Backend validates and sanitizes inputs
- ✅ CORS is configured for local development
- ⚠️ Update CORS settings for production deployment
- ⚠️ Add rate limiting for production
- ⚠️ Consider adding authentication for production

## License

This project is for personal use. Feel free to use it as a template for your own portfolio.

## Credits

Design inspired by modern portfolio websites with smooth animations and premium UX.

## Support

For issues or questions, please open an issue on GitHub.

---

**Happy Coding! 🚀**
