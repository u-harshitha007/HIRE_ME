import { useState, useRef, useEffect } from 'react'
import { X, Send, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm HARSHITHA's AI assistant. Ask me anything about her skills, experience, projects, or background!",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch(`${API_URL}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: userMessage,
          conversation_history: messages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      })

      if (!response.ok) throw new Error('Failed to get response')

      const data = await response.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I'm sorry, I couldn't connect to the AI service. Please make sure the backend is running on port 8000.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => setIsOpen((open) => !open)}
        className={`relative z-10 flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.5)] transition-all duration-200 ${
          isOpen
            ? 'size-12 rounded-full bg-[#262626] text-fg'
            : 'h-12 px-5 rounded-[30px] bg-fg text-bg hover:scale-105'
        }`}
        aria-label={isOpen ? 'Close AI Chat' : 'Ask AI'}
      >
        {isOpen ? (
          <X size={20} />
        ) : (
          <span className="text-sm font-semibold tracking-wide">Ask Harshitha's AI</span>
        )}
      </button>

      <div
        className={`absolute bottom-16 right-0 flex flex-col w-[min(400px,calc(100vw-2rem))] h-[min(540px,70vh)] bg-[#0f0f0ff7] border border-white/15 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-white/5">
          <div>
            <h3 className="text-fg text-sm font-semibold">Ask HARSHITHA</h3>
            <p className="text-[#888] text-[11px]">Portfolio assistant</p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#888] hover:text-fg p-1 rounded-md hover:bg-white/10"
            aria-label="Close chat"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-3.5 py-2.5 text-[13.5px] leading-relaxed rounded-xl ${
                  message.role === 'user'
                    ? 'bg-[#262626] text-white rounded-br-sm border border-white/10'
                    : 'bg-white/[0.04] text-[#d4d4d4] rounded-bl-sm border border-white/10'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                <Loader2 size={16} className="animate-spin text-muted" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 m-2.5 px-2 py-1.5 rounded-[10px] bg-[#121212] border border-white/10"
        >
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="flex-1 bg-transparent text-fg text-[13px] py-2 px-2 outline-none placeholder:text-[#888] disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex size-8 items-center justify-center text-fg disabled:opacity-30"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </form>
      </div>
    </div>
  )
}
