# 📝 Complete Customization Guide

This guide will walk you through updating all the placeholder content with your actual information.

## 🎯 Quick Start Checklist

- [ ] Update personal information in all components
- [ ] Update projects data
- [ ] Update experience data
- [ ] Update tech stack
- [ ] Update backend profile data
- [ ] Update social media links
- [ ] Update contact information
- [ ] Add your own content to AI assistant
- [ ] Replace placeholder images (optional)
- [ ] Test all links

---

## 1️⃣ Projects Section

**File:** `src/data/projects.ts`

Replace the placeholder projects with your actual projects:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Detailed description of what your project does, the problem it solves, and its key features.',
    tech_stack: ['Python', 'FastAPI', 'React', 'TypeScript'],
    category: 'AI', // Options: 'AI', 'ML', 'Web', 'Mobile'
    github: 'https://github.com/YOUR_USERNAME/your-project',
    demo: 'https://your-demo-link.com', // Optional
    image: '/project-image.png', // Optional
  },
  // Add more projects...
]
```

**Tips:**
- List your 4-6 best projects
- Focus on AI/ML projects if that's your specialty
- Include live demo links when available
- Use clear, concise descriptions (2-3 sentences)

---

## 2️⃣ Experience Section

**File:** `src/data/experience.ts`

Update with your actual work experience:

```typescript
export const experiences: Experience[] = [
  {
    company: 'Your Company Name',
    role: 'Your Position Title',
    period: 'Month Year — Present', // e.g., "Jan 2024 — Present"
    description: 'Brief description of your role, responsibilities, and achievements. Focus on impact and technical work.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'Docker'],
  },
  // Add more experiences...
]
```

**Tips:**
- List 2-4 most relevant positions
- Use present tense for current role, past tense for previous
- Highlight technical achievements
- Include technologies you actually used

---

## 3️⃣ Tech Stack Section

**File:** `src/data/technologies.ts`

Customize the technologies you work with:

```typescript
export const technologyStack: TechnologyCategory[] = [
  {
    label: 'AI / ML',
    technologies: [
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      // Add your AI/ML tools
    ],
  },
  {
    label: 'Development',
    technologies: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      // Add your development tools
    ],
  },
  {
    label: 'Tools',
    technologies: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      // Add your tools
    ],
  },
]
```

**Finding Icon Names:**
Browse available icons at: https://react-icons.github.io/react-icons/icons/si/

**Tips:**
- Only list technologies you're comfortable discussing
- Group logically (AI/ML, Development, Tools, etc.)
- Keep it to 10-15 total technologies

---

## 4️⃣ Contact Information

### Hero Section
**File:** `src/components/hero/Hero.tsx`

Update GitHub and LinkedIn links:
```typescript
<a href="https://github.com/YOUR_ACTUAL_USERNAME" ...>
<a href="https://www.linkedin.com/in/YOUR_ACTUAL_USERNAME/" ...>
```

### Contact Section
**File:** `src/components/contact/Contact.tsx`

Update the contact links array:
```typescript
const CONTACT_LINKS = [
  {
    label: 'Email',
    value: 'your.actual.email@example.com',
    href: 'mailto:your.actual.email@example.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/YOUR_ACTUAL_USERNAME',
    href: 'https://github.com/YOUR_ACTUAL_USERNAME',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/YOUR_ACTUAL_USERNAME',
    href: 'https://www.linkedin.com/in/YOUR_ACTUAL_USERNAME/',
  },
]
```

### Navigation Header
**File:** `src/components/layout/Header.tsx`

Update social links:
```typescript
const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/YOUR_ACTUAL_USERNAME' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR_ACTUAL_USERNAME/' },
]
```

### Footer
**File:** `src/components/layout/Footer.tsx`

Update the social links in the footer (same as header).

---

## 5️⃣ About Section

**File:** `src/components/about/About.tsx`

Customize the about text to reflect your actual background:

```typescript
<h3 className="...">
  Your actual tagline or professional summary
</h3>

<p className="...">
  First paragraph: Your specialization, what you build, your technical focus
</p>

<p className="...">
  Second paragraph: Your approach, philosophy, what makes your work unique
</p>

<p className="...">
  Third paragraph: Current interests, what you're learning, goals
</p>
```

**Tips:**
- Keep it authentic and conversational
- Focus on what you actually do
- Avoid buzzwords and exaggeration
- 3-4 paragraphs is ideal

---

## 6️⃣ Hero Section Stats

**File:** `src/components/hero/Hero.tsx`

Update the stats to reflect your actual numbers:

```typescript
const STATS = [
  { value: '10+', label: 'AI Projects' }, // Your actual project count
  { value: '3+', label: 'Years Experience' }, // Your actual experience
  { value: 'Open', label: 'To Opportunities' }, // Your availability
]
```

**Tips:**
- Be honest with numbers
- Use "+" for approximate counts (4+ projects)
- Keep it simple and readable

---

## 7️⃣ Backend AI Assistant Profile

**File:** `backend/main.py`

This is the most important file for the AI assistant to work correctly.

Update the entire `PROFILE_DATA` dictionary:

```python
PROFILE_DATA = {
    "name": "YOUR ACTUAL NAME",
    "role": "Your Actual Role",
    "tagline": "Your actual tagline",
    "email": "your.actual.email@example.com",
    "github": "github.com/YOUR_ACTUAL_USERNAME",
    "linkedin": "linkedin.com/in/YOUR_ACTUAL_USERNAME",
    
    "about": {
        "summary": "Your actual bio - describe your background, expertise, and what you do.",
        "education": [
            {
                "institution": "Your University",
                "degree": "Your Degree",
                "field": "Your Field",
                "year": "Your Graduation Year"
            }
        ],
        "location": "Your City, Country"
    },
    
    "skills": {
        "ai_ml": ["List your actual AI/ML skills"],
        "development": ["List your actual dev skills"],
        "tools": ["List your actual tools"]
    },
    
    "experience": [
        {
            "title": "Your Actual Position",
            "company": "Your Actual Company",
            "duration": "Your Actual Duration",
            "description": "Your actual work description",
            "technologies": ["Technologies you actually used"]
        }
        # Add all your actual experiences
    ],
    
    "projects": [
        {
            "name": "Your Actual Project",
            "description": "Your actual project description",
            "tech_stack": ["Technologies used"],
            "category": "AI/ML/Web",
            "github": "Your actual GitHub link"
        }
        # Add all your actual projects
    ],
    
    "achievements": [
        "List your actual achievements, certifications, awards"
    ],
    
    "interests": ["Your actual interests"],
    
    "availability": "Your actual availability status"
}
```

**Important:**
- The AI assistant ONLY knows what's in this file
- Be thorough - add details you want the AI to share
- Keep information up-to-date
- Don't include sensitive information

---

## 8️⃣ Environment Variables

### Frontend (.env)
Create a `.env` file in the root directory:

```bash
VITE_API_URL=http://localhost:8000
```

For production, update to your deployed backend URL.

### Backend (backend/.env)
Create `backend/.env`:

```bash
GROQ_API_KEY=your_actual_groq_api_key_here
```

**Get your Groq API key:**
1. Visit https://console.groq.com
2. Sign up for free
3. Go to API Keys section
4. Create and copy your key

---

## 9️⃣ Optional: Add Project Images

If you have project screenshots:

1. Add images to `public/` folder:
   - `public/project-1.png`
   - `public/project-2.png`
   - etc.

2. Update `src/data/projects.ts`:
```typescript
{
  id: 1,
  title: 'Project Name',
  // ...
  image: '/project-1.png',
}
```

---

## 🔟 Testing Your Changes

After making all updates:

1. **Test the frontend:**
```bash
npm run dev
```
Visit http://localhost:5173

2. **Test the backend:**
```bash
cd backend
python main.py
```
Visit http://localhost:8000

3. **Test the AI assistant:**
- Click "Ask Harshitha's AI" button
- Ask questions about your experience, projects, skills
- Verify the responses are accurate

4. **Test all links:**
- [ ] GitHub links work
- [ ] LinkedIn links work
- [ ] Email link opens mail client
- [ ] Project demo links work (if provided)
- [ ] Navigation scrolls to correct sections

5. **Test responsiveness:**
- [ ] Check on desktop (1920px+)
- [ ] Check on laptop (1280px)
- [ ] Check on tablet (768px)
- [ ] Check on mobile (375px)

6. **Build for production:**
```bash
npm run build
```
Should complete without errors.

---

## ⚠️ Common Mistakes to Avoid

1. **Leaving Placeholder Text**
   - Search for "YOUR_USERNAME", "your.email", "Company Name"
   - Replace ALL instances

2. **Forgetting Backend Profile**
   - The AI won't know about changes you make ONLY in the frontend
   - Update `backend/main.py` with same information

3. **Invalid Links**
   - Test all GitHub/LinkedIn/email links
   - Remove "https://" if already in the URL

4. **Inconsistent Information**
   - Keep projects list same in frontend AND backend
   - Keep experience same in both places

5. **API Key in Code**
   - NEVER commit `.env` files
   - API keys should only be in `.env` files

---

## 🚀 Final Checklist

Before considering customization complete:

- [ ] All placeholder text replaced
- [ ] All links tested and working
- [ ] Projects reflect your actual work
- [ ] Experience is accurate and up-to-date
- [ ] Tech stack represents your skills
- [ ] About section reflects your voice
- [ ] Backend profile matches frontend
- [ ] AI assistant gives accurate responses
- [ ] All social links work
- [ ] Contact information is correct
- [ ] Build completes successfully
- [ ] Site tested on mobile and desktop
- [ ] No console errors in browser
- [ ] .env files configured (not committed)

---

## 💡 Need Help?

If you get stuck:
1. Check the README.md for technical setup
2. Review the example data in the original files
3. Test changes incrementally (one section at a time)
4. Use browser dev tools to debug issues

---

**Remember:** This is YOUR portfolio. Make it authentic, professional, and representative of your actual skills and experience. Don't exaggerate, but don't undersell yourself either!
