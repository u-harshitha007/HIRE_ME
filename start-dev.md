# Quick Start Guide

## Step 1: Install Frontend Dependencies

Open a terminal and run:

```bash
npm install
```

## Step 2: Setup Backend

Open a **second terminal** and run:

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

## Step 3: Start Backend Server

In the backend terminal (with venv activated):

```bash
python main.py
```

The backend will start on `http://localhost:8000`

## Step 4: Start Frontend

In the first terminal:

```bash
npm run dev
```

The frontend will start on `http://localhost:5173`

## Step 5: Test the Application

1. Open `http://localhost:5173` in your browser
2. Click the green AI chat button in the bottom-right corner
3. Try asking questions like:
   - "What skills does this person have?"
   - "Tell me about the projects"
   - "What is the background?"

## Troubleshooting

### Backend won't start

- Make sure you're in the `backend/` directory
- Make sure virtual environment is activated (you should see `(venv)` in your terminal)
- Check that `.env` file exists in `backend/` folder with `GROQ_API_KEY`

### Frontend won't start

- Make sure you're in the root directory (not in `backend/`)
- Delete `node_modules/` and run `npm install` again

### AI Chat not working

- Make sure backend is running on port 8000
- Check browser console for errors
- Verify `GROQ_API_KEY` is set in `backend/.env`

## Next Steps

1. **Customize Content**: Replace all placeholder text with your actual information
2. **Update Profile Data**: Edit `backend/main.py` - `PROFILE_DATA` dictionary
3. **Add Your Projects**: Edit `src/components/projects/Projects.tsx`
4. **Update Skills**: Edit `src/components/skills/Skills.tsx`
5. **Add Your GitHub Username**: Update GitHub calendar in Skills component
6. **Update Links**: Edit `src/components/layout/Header.tsx` for social links
7. **Replace Images**: Add your portrait to `public/portrait-cutout.png`
8. **Add Resume**: Add your resume PDF to `public/Resume.pdf`
