"""
HIRE_ME Portfolio AI Assistant Backend
FastAPI + Groq Integration

This backend provides an AI assistant that can answer questions about the portfolio owner
using their profile data.
"""

import os
from typing import Optional
from contextlib import asynccontextmanager

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from dotenv import load_dotenv
from groq import Groq

# Load environment variables
load_dotenv()

# ============================================================
# PROFILE DATA - Replace with your actual information later
# ============================================================

PROFILE_DATA = {
    "name": "HARSHITHA",
    "role": "AI Engineer / Developer",
    "tagline": "Building systems and useful products",
    "email": "your.email@example.com",
    "github": "github.com/YOUR_USERNAME",
    "linkedin": "linkedin.com/in/YOUR_USERNAME",
    
    "about": {
        "summary": "AI engineer focused on building practical systems. I specialize in creating AI-powered applications and intelligent systems that solve real problems. My work spans machine learning pipelines, natural language processing, and full-stack development. I believe in writing clean code, building scalable systems, and shipping products that people actually use.",
        "education": [
            {
                "institution": "Your University",
                "degree": "Bachelor's/Master's Degree",
                "field": "Computer Science / AI / Related Field",
                "year": "Expected YYYY"
            }
        ],
        "location": "Your Location"
    },
    
    "skills": {
        "ai_ml": ["Python", "PyTorch", "TensorFlow", "Machine Learning", "Deep Learning", "LLMs", "NLP"],
        "development": ["React", "TypeScript", "JavaScript", "Next.js", "Node.js", "FastAPI"],
        "tools": ["Git", "Docker", "PostgreSQL", "MongoDB", "AWS"]
    },
    
    "experience": [
        {
            "title": "AI Engineer / ML Developer",
            "company": "Tech Company Name",
            "duration": "Jan 2024 — Present",
            "description": "Building intelligent systems and machine learning solutions. Working on LLM integration, model deployment, and scalable AI infrastructure.",
            "technologies": ["Python", "PyTorch", "FastAPI", "Docker", "AWS"]
        },
        {
            "title": "Software Developer",
            "company": "Previous Company",
            "duration": "Jun 2023 — Dec 2023",
            "description": "Developed full-stack applications with focus on performance and user experience. Collaborated with cross-functional teams on product development.",
            "technologies": ["React", "Node.js", "PostgreSQL", "TypeScript"]
        }
    ],
    
    "projects": [
        {
            "name": "AI Portfolio Assistant",
            "description": "Intelligent chatbot powered by Groq LLM that answers questions about skills, experience, and projects with streaming responses",
            "tech_stack": ["Python", "FastAPI", "Groq", "React", "TypeScript"],
            "category": "AI",
            "github": "https://github.com/YOUR_USERNAME/portfolio-ai"
        },
        {
            "name": "Machine Learning Pipeline",
            "description": "End-to-end ML pipeline for data preprocessing, model training, and deployment with automated feature engineering",
            "tech_stack": ["Python", "Scikit-learn", "MLflow", "Docker"],
            "category": "ML",
            "github": "https://github.com/YOUR_USERNAME/ml-pipeline"
        },
        {
            "name": "Real-time Data Dashboard",
            "description": "Interactive dashboard for visualizing real-time data streams with WebSocket integration",
            "tech_stack": ["React", "TypeScript", "Node.js", "WebSocket"],
            "category": "Web",
            "github": "https://github.com/YOUR_USERNAME/dashboard"
        },
        {
            "name": "NLP Text Analyzer",
            "description": "Natural language processing tool for sentiment analysis, entity recognition, and text classification",
            "tech_stack": ["Python", "spaCy", "Transformers", "FastAPI"],
            "category": "AI",
            "github": "https://github.com/YOUR_USERNAME/nlp-analyzer"
        }
    ],
    
    "achievements": [
        "Built AI systems processing X requests/day",
        "Open source contributor to AI/ML projects",
        "Completed relevant certifications or awards"
    ],
    
    "interests": ["AI/ML", "LLM Applications", "System Design", "Open Source"],
    
    "availability": "Open to opportunities"
}

# ============================================================
# SYSTEM PROMPT FOR AI ASSISTANT
# ============================================================

SYSTEM_PROMPT = f"""You are an AI assistant for {PROFILE_DATA['name']}'s portfolio website. 
Your role is to help visitors learn about {PROFILE_DATA['name']} by answering questions about their skills, experience, projects, and background.

IMPORTANT RULES:
1. ONLY use the information provided in the profile data below. DO NOT hallucinate or make up information.
2. If you don't know something or the information is not available, clearly say "I don't have that information available" or "That information is not currently available."
3. Be friendly, professional, and concise in your responses.
4. Keep responses under 150 words unless specifically asked for more detail.
5. If asked about something not related to {PROFILE_DATA['name']}, politely redirect the conversation back to their portfolio.

PROFILE DATA:
{PROFILE_DATA}

Remember: You represent {PROFILE_DATA['name']} professionally. Be helpful and accurate.
"""

# ============================================================
# PYDANTIC MODELS
# ============================================================

class ChatRequest(BaseModel):
    question: str
    conversation_history: Optional[list[dict]] = []

class ChatResponse(BaseModel):
    answer: str

# ============================================================
# GROQ CLIENT SETUP
# ============================================================

client: Optional[Groq] = None

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize Groq client on startup"""
    global client
    
    api_key = os.getenv("GROQ_API_KEY")
    if not api_key:
        raise ValueError("GROQ_API_KEY environment variable is not set")
    
    client = Groq(api_key=api_key)
    print("✅ Groq client initialized successfully")
    
    yield
    
    print("🔄 Shutting down...")

# ============================================================
# FASTAPI APP
# ============================================================

app = FastAPI(
    title="HIRE_ME Portfolio AI Assistant",
    description="AI assistant API for portfolio website",
    version="1.0.0",
    lifespan=lifespan
)

# CORS middleware for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "http://localhost:4173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ============================================================
# API ENDPOINTS
# ============================================================

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "message": "HIRE_ME Portfolio AI Assistant API",
        "status": "running",
        "endpoints": {
            "chat": "/chat (POST)",
            "chat_stream": "/chat/stream (POST)",
            "docs": "/docs"
        }
    }

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    Chat endpoint - returns complete response
    """
    if not client:
        raise HTTPException(status_code=503, detail="Groq client not initialized")
    
    try:
        # Build messages list
        messages = [{"role": "system", "content": SYSTEM_PROMPT}]
        
        # Add conversation history if provided
        if request.conversation_history:
            messages.extend(request.conversation_history)
        
        # Add current question
        messages.append({"role": "user", "content": request.question})
        
        # Call Groq API
        chat_completion = client.chat.completions.create(
            messages=messages,
            model="llama-3.3-70b-versatile",
            temperature=0.7,
            max_tokens=500,
        )
        
        answer = chat_completion.choices[0].message.content
        
        return ChatResponse(answer=answer)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error processing request: {str(e)}")

@app.post("/chat/stream")
async def chat_stream(request: ChatRequest):
    """
    Streaming chat endpoint - yields response chunks
    """
    if not client:
        raise HTTPException(status_code=503, detail="Groq client not initialized")
    
    async def generate():
        try:
            # Build messages list
            messages = [{"role": "system", "content": SYSTEM_PROMPT}]
            
            if request.conversation_history:
                messages.extend(request.conversation_history)
            
            messages.append({"role": "user", "content": request.question})
            
            # Call Groq API with streaming
            chat_completion = client.chat.completions.create(
                messages=messages,
                model="llama-3.3-70b-versatile",
                temperature=0.7,
                max_tokens=500,
                stream=True,
            )
            
            for chunk in chat_completion:
                if chunk.choices[0].delta.content:
                    yield chunk.choices[0].delta.content
        
        except Exception as e:
            yield f"[Error: {str(e)}]"
    
    return StreamingResponse(generate(), media_type="text/plain")

@app.get("/profile")
async def get_profile():
    """Get portfolio owner's profile data"""
    return PROFILE_DATA

# ============================================================
# RUN SERVER
# ============================================================

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
