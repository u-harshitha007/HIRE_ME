# 🚀 Deployment Guide

Step-by-step guide to deploy your portfolio to production.

## 📋 Pre-Deployment Checklist

Before deploying, ensure:
- [ ] All placeholder content is replaced with your information
- [ ] All links are tested and working
- [ ] Build completes successfully: `npm run build`
- [ ] AI backend tested locally
- [ ] Environment variables documented
- [ ] No sensitive data in code

---

## 🎯 Deployment Options

### Option 1: Vercel (Recommended for Frontend)
### Option 2: Netlify (Alternative for Frontend)
### Option 3: Railway (Recommended for Backend)
### Option 4: Render (Alternative for Backend)

---

## 1️⃣ Deploy Frontend to Vercel

### Step 1: Prepare Your Repository

1. **Push to GitHub** (if not already):
```bash
git init
git add .
git commit -m "Initial commit: AI Engineer Portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Configure build settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

6. Add Environment Variables:
   - Click "Environment Variables"
   - Add: `VITE_API_URL` = `https://your-backend-url.railway.app`
   - (You'll update this after deploying backend)

7. Click "Deploy"

8. **After deployment:**
   - Your site will be at: `https://your-project.vercel.app`
   - Set up custom domain (optional)

### Step 3: Update API URL

After deploying your backend (see below), update the environment variable:
1. Go to Vercel dashboard → Your project
2. Settings → Environment Variables
3. Edit `VITE_API_URL` to your backend URL
4. Redeploy (Deployments → Click "..." → Redeploy)

---

## 2️⃣ Deploy Backend to Railway

### Step 1: Prepare Backend

1. **Create Procfile** (if using Railway):
Not needed for Railway - it auto-detects Python apps

2. **Ensure requirements.txt is up to date**:
```bash
cd backend
pip freeze > requirements.txt
```

### Step 2: Deploy on Railway

1. Go to https://railway.app
2. Sign up/Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your repository
6. Railway will ask which folder - select `backend/`

7. **Add Environment Variables:**
   - Click your service → Variables tab
   - Add: `GROQ_API_KEY` = `your_groq_api_key`
   - Add: `PORT` = `8000` (Railway sets this automatically)

8. **Update CORS settings:**
   
   Edit `backend/main.py`:
   ```python
   app.add_middleware(
       CORSMiddleware,
       allow_origins=[
           "http://localhost:5173",
           "http://localhost:3000",
           "https://your-project.vercel.app",  # Add your Vercel URL
           "https://your-custom-domain.com",   # Add custom domain if you have one
       ],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```

9. Commit and push changes
10. Railway will auto-deploy

11. **Get your backend URL:**
    - Go to Settings tab
    - Find "Public URL" or generate domain
    - Example: `https://your-app.railway.app`

### Step 3: Update Frontend with Backend URL

1. Go to Vercel dashboard
2. Settings → Environment Variables
3. Update `VITE_API_URL` with your Railway URL
4. Redeploy frontend

---

## 3️⃣ Alternative: Deploy Backend to Render

### Step 1: Prepare Backend

1. **Create `render.yaml`** in root:
```yaml
services:
  - type: web
    name: portfolio-backend
    runtime: python
    buildCommand: pip install -r backend/requirements.txt
    startCommand: cd backend && uvicorn main:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: GROQ_API_KEY
        sync: false
```

### Step 2: Deploy on Render

1. Go to https://render.com
2. Sign up/Login with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Configure:
   - **Name:** portfolio-backend
   - **Runtime:** Python 3
   - **Build Command:** `pip install -r backend/requirements.txt`
   - **Start Command:** `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Root Directory:** `backend`

6. Add Environment Variables:
   - `GROQ_API_KEY` = your key

7. Create Web Service

8. Update CORS in `backend/main.py` (same as Railway section)

9. Get your backend URL and update frontend

---

## 4️⃣ Alternative: Deploy Frontend to Netlify

### Step 1: Prepare Build

1. Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy

1. Go to https://netlify.com
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repo
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

6. Add Environment Variables:
   - Go to Site settings → Environment variables
   - Add `VITE_API_URL` = your backend URL

7. Deploy site

---

## 5️⃣ Custom Domain Setup

### For Vercel:

1. Go to your project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Add DNS records at your domain registrar:
   - **Type:** A or CNAME
   - **Name:** @ or www
   - **Value:** (Vercel provides this)

5. Wait for DNS propagation (5-30 minutes)

### For Railway:

1. Go to your service → Settings
2. Click "Generate Domain" or add custom domain
3. Add CNAME record at your domain registrar:
   - **Type:** CNAME
   - **Name:** api (or your subdomain)
   - **Value:** your-app.railway.app

### Update Environment Variables

After setting custom domains, update:
- Frontend `VITE_API_URL` → your custom backend domain
- Backend CORS → add your custom frontend domain

---

## 6️⃣ Environment Variables Summary

### Frontend (.env for Vercel/Netlify)
```
VITE_API_URL=https://your-backend-url.railway.app
```

### Backend (.env for Railway/Render)
```
GROQ_API_KEY=your_groq_api_key_here
PORT=8000
```

**Important:** 
- Set these in the platform dashboard, not in code
- Never commit `.env` files to Git

---

## 7️⃣ Post-Deployment Testing

### Test Checklist:

1. **Frontend:**
   - [ ] Site loads correctly
   - [ ] All sections visible
   - [ ] Navigation works
   - [ ] Links open correctly
   - [ ] Responsive on mobile
   - [ ] Animations work smoothly
   - [ ] No console errors

2. **Backend:**
   - [ ] Backend URL accessible
   - [ ] API docs available at `/docs`
   - [ ] Health check works: `GET /`

3. **AI Assistant:**
   - [ ] Chat button appears
   - [ ] Can open chat
   - [ ] Can send messages
   - [ ] Receives responses
   - [ ] No CORS errors

4. **Performance:**
   - [ ] Run Lighthouse audit (target 90+ score)
   - [ ] Test page load speed
   - [ ] Check mobile performance

---

## 8️⃣ Monitoring & Maintenance

### Vercel:

- **Analytics:** Vercel dashboard shows traffic
- **Logs:** Deployments → View function logs
- **Alerts:** Set up in dashboard

### Railway:

- **Logs:** Click service → View logs
- **Metrics:** CPU, Memory, Network usage
- **Alerts:** Set up notifications

### Regular Maintenance:

1. **Update dependencies monthly:**
```bash
npm update
pip install --upgrade -r requirements.txt
```

2. **Monitor API usage:**
   - Check Groq dashboard for API usage
   - Stay within free tier or upgrade

3. **Update content regularly:**
   - Add new projects
   - Update experience
   - Refresh about section

4. **Security:**
   - Rotate API keys quarterly
   - Keep dependencies updated
   - Monitor for vulnerabilities

---

## 9️⃣ Troubleshooting Deployment Issues

### Issue: Build Fails on Vercel

**Solution:**
```bash
# Test build locally first
npm run build

# Check Node version matches Vercel
# Vercel uses Node 18 by default
node --version

# If different, add to package.json:
"engines": {
  "node": "18.x"
}
```

### Issue: AI Assistant Not Working

**Possible causes:**
1. **CORS Error:**
   - Add frontend URL to backend CORS origins
   - Redeploy backend

2. **API Key Invalid:**
   - Verify GROQ_API_KEY in Railway/Render dashboard
   - Check key hasn't expired

3. **Wrong API URL:**
   - Verify VITE_API_URL in Vercel
   - Should be full backend URL with https://

4. **Backend Not Running:**
   - Check Railway/Render logs
   - Ensure service is running

### Issue: Environment Variables Not Working

**Solution:**
- Environment variables on Vercel/Railway need redeploy to take effect
- After adding/changing variables, redeploy both services
- Check variable names match exactly (case-sensitive)

### Issue: Custom Domain Not Working

**Solution:**
- Check DNS propagation: https://dnschecker.org
- Verify DNS records are correct
- Wait 24-48 hours for full propagation
- Clear browser cache

---

## 🔟 Cost Estimates

### Free Tier Usage:

**Vercel Free:**
- 100 GB bandwidth/month
- Unlimited websites
- Automatic SSL
- Perfect for portfolio

**Railway Free (with GitHub Student Pack):**
- $5/month credit
- Usually enough for small backend
- Pay-as-you-go after

**Groq Free:**
- Generous free tier
- Rate limits apply
- Monitor usage in dashboard

**Total Cost: $0-10/month** for most portfolios

### If You Exceed Free Tier:

- Vercel Pro: $20/month
- Railway: ~$5-10/month for small apps
- Consider switching to cheaper alternatives

---

## ✅ Deployment Complete!

After following this guide, you should have:
- ✅ Frontend deployed and accessible
- ✅ Backend deployed and running
- ✅ AI assistant working
- ✅ Custom domain (optional)
- ✅ SSL certificates
- ✅ Monitoring setup

### Share Your Portfolio:
- LinkedIn: Add to profile
- GitHub: Pin repository
- Resume: Add portfolio URL
- Email signature: Include link

---

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Railway Documentation](https://docs.railway.app)
- [Netlify Documentation](https://docs.netlify.com)
- [Groq Documentation](https://console.groq.com/docs)
- [Custom Domain Setup Guide](https://vercel.com/docs/concepts/projects/custom-domains)

---

**Questions or issues? Check the logs in your deployment platform dashboard first - they usually point to the exact problem!**
