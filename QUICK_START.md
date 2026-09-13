# ⚡ Quick Start Guide

Get your portfolio running in 5 minutes!

## 🚀 Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
pip install -r requirements.txt
cd ..
```

## 🔑 Step 2: Set Up Environment Variables

### Frontend
Create `.env` file in root:
```bash
VITE_API_URL=http://localhost:8000
```

### Backend
Create `backend/.env` file:
```bash
GROQ_API_KEY=your_groq_api_key_here
```

**Get Groq API Key:**
1. Visit https://console.groq.com
2. Sign up (free)
3. Create API key
4. Copy to `backend/.env`

## ▶️ Step 3: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
python main.py
```
✅ Backend running at: http://localhost:8000

**Terminal 2 - Frontend:**
```bash
npm run dev
```
✅ Frontend running at: http://localhost:5173

## ✅ Step 4: Verify It Works

Open http://localhost:5173 in your browser

Test these:
- [ ] Portfolio loads correctly
- [ ] Navigation scrolls smoothly
- [ ] All sections visible
- [ ] Click "Ask Harshitha's AI" button
- [ ] Send a test message to AI
- [ ] Verify AI responds

## 📝 Step 5: Customize Your Content

**Essential files to update:**

1. **Projects** - `src/data/projects.ts`
2. **Experience** - `src/data/experience.ts`
3. **Technologies** - `src/data/technologies.ts`
4. **Backend Profile** - `backend/main.py` (PROFILE_DATA)
5. **Contact Links** - Multiple files (search for "YOUR_USERNAME")

**Full customization guide:** See `CUSTOMIZATION_GUIDE.md`

## 🏗️ Step 6: Build for Production

```bash
npm run build
```

If build succeeds, you're ready to deploy!

**Deployment guide:** See `DEPLOYMENT_GUIDE.md`

---

## 🆘 Troubleshooting

### AI Assistant Not Working?
- Check backend is running on port 8000
- Verify `GROQ_API_KEY` in `backend/.env`
- Check browser console for errors

### Build Errors?
```bash
# Clean install
rm -rf node_modules dist
npm install
npm run build
```

### Port Already in Use?
```bash
# Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Or use different port in backend:
# backend/main.py - change port in uvicorn.run()
```

---

## 📚 Next Steps

1. ✅ **Customize content** - CUSTOMIZATION_GUIDE.md
2. ✅ **Deploy to production** - DEPLOYMENT_GUIDE.md
3. ✅ **Share your portfolio** - LinkedIn, Resume, GitHub

---

## 🎯 Quick Reference

| What | Where |
|------|-------|
| Add/edit projects | `src/data/projects.ts` |
| Add/edit experience | `src/data/experience.ts` |
| Change tech stack | `src/data/technologies.ts` |
| Update AI knowledge | `backend/main.py` |
| Change contact info | Search "YOUR_USERNAME" |
| Modify colors | `src/index.css` |
| Adjust spacing | `src/styles/theme.ts` |

---

**That's it! Your portfolio is ready to customize and deploy.** 🎉

For detailed instructions, see:
- 📖 **README.md** - Full documentation
- ✏️ **CUSTOMIZATION_GUIDE.md** - Step-by-step customization
- 🚀 **DEPLOYMENT_GUIDE.md** - Production deployment
- 📋 **REDESIGN_SUMMARY.md** - What changed
