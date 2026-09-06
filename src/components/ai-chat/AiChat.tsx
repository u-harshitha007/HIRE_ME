import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2 } from 'lucide-react'
import { theme } from '../../styles/theme'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const API_URL = 'http://localhost:8000'

export default function AiChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hi! I'm an AI assistant for this portfolio. Ask me anything about the owner's skills, experience, projects, or background!"
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
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
            content: m.content
          }))
        })
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.answer }])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm sorry, I couldn't connect to the AI service. Please make sure the backend is running on port 8000."
        }
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#39d353] text-black shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${
          isOpen ? 'opacity-0 pointer-events-none scale-0' : 'opacity-100 scale-100'
        }`}
        aria-label="Open AI Chat"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex flex-col w-[calc(100%-3rem)] sm:w-96 h-[70vh] sm:h-[500px] bg-[#0a0a0a] border border-cream/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ${
          isOpen
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#141414] border-b border-cream/10">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#39d353]/20">
              <Bot size={18} className="text-[#39d353]" />
            </div>
            <div>
              <h3 className="text-cream font-hn text-sm font-medium tracking-wide">AI Assistant</h3>
              <p className="text-cream/50 text-xs font-hn">Ask about this portfolio</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-cream/50 hover:text-cream transition-colors p-1"
            aria-label="Close chat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.role === 'assistant' && (
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#39d353]/20">
                  <Bot size={16} className="text-[#39d353]" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm font-hn leading-relaxed ${
                  message.role === 'user'
                    ? 'bg-[#39d353] text-black rounded-br-sm'
                    : 'bg-[#1a1a1a] text-cream border border-cream/10 rounded-bl-sm'
                }`}
              >
                {message.content}
              </div>
              {message.role === 'user' && (
                <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-cream/10">
                  <User size={16} className="text-cream" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#39d353]/20">
                <Bot size={16} className="text-[#39d353]" />
              </div>
              <div className="bg-[#1a1a1a] text-cream border border-cream/10 px-4 py-3 rounded-2xl rounded-bl-sm">
                <Loader2 size={16} className="animate-spin text-[#39d353]" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="flex gap-2 p-4 bg-[#141414] border-t border-cream/10">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="flex-1 bg-[#0a0a0a] border border-cream/20 rounded-xl px-4 py-2.5 text-cream font-hn text-sm placeholder:text-cream/30 focus:outline-none focus:border-[#39d353]/50 transition-colors disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#39d353] text-black transition-all duration-300 hover:bg-[#2eb843] disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  )
}
