import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { theme } from '../../styles/theme'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.")
})

type ContactFormData = z.infer<typeof contactSchema>

function ContactLink({ label, value, href }: { label: string, value: string, href: string }) {
  return (
    <div className="flex flex-col gap-1 items-start">
      <span className="text-cream/50 text-sm font-hn tracking-wide uppercase">{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-block text-cream transition-opacity duration-300 hover:opacity-60 font-hn text-lg sm:text-xl tracking-wide"
      >
        {value}
        <span
          className="absolute left-0 -bottom-1 h-[2px] w-full transition-all duration-400 ease-out origin-left scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
          style={{ backgroundColor: theme.accent }}
        />
      </a>
    </div>
  )
}

export default function Contact() {
  const { ref, isVisible } = useScrollReveal(0.1, '0px 0px -10% 0px')
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('pending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  // Reset success message after 3s
  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const inputClasses = `w-full bg-transparent border-b border-cream/30 text-cream font-hn text-lg sm:text-xl py-4 focus:outline-none focus:border-[var(--accent)] transition-colors duration-300 placeholder:text-cream/30`
  const transitionClass = `transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'}`
  
  return (
    <section id="contact" className={theme.sectionBase}>
      <div
        ref={ref as any}
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row gap-16 sm:gap-12 pb-12"
      >

        {/* Left Column */}
        <div
          className={`w-full sm:w-[40%] flex flex-col gap-12 sm:pr-8 ${transitionClass}`}
        >
          <div className="flex flex-col gap-6">
            <h2 className={theme.headingLg}>Contact</h2>
            <p className={`${theme.bodyText} text-xl sm:text-2xl max-w-md`}>
              Have a project or opportunity in mind? Let's connect.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <ContactLink
              label="Email"
              value="your.email@example.com"
              href="mailto:your.email@example.com"
            />
            <ContactLink
              label="GitHub"
              value="github.com/YOUR_USERNAME"
              href="https://github.com/YOUR_USERNAME"
            />
            <ContactLink
              label="LinkedIn"
              value="linkedin.com/in/YOUR_USERNAME"
              href="https://www.linkedin.com/in/YOUR_USERNAME/"
            />
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="w-full sm:w-[60%] flex flex-col pt-2 sm:pt-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-8"
            style={{ '--accent': theme.accent } as any}
          >
            {/* Name Field */}
            <div
              className={`flex flex-col gap-2 ${transitionClass}`}
              style={{ transitionDelay: '100ms' }}
            >
              <input
                type="text"
                placeholder="Name"
                className={inputClasses}
                {...register('name')}
                disabled={status === 'pending'}
              />
              {errors.name && (
                <span className="text-cream/70 text-xs font-hn tracking-wide">{errors.name.message}</span>
              )}
            </div>

            {/* Email Field */}
            <div
              className={`flex flex-col gap-2 ${transitionClass}`}
              style={{ transitionDelay: '200ms' }}
            >
              <input
                type="email"
                placeholder="Email Address"
                className={inputClasses}
                {...register('email')}
                disabled={status === 'pending'}
              />
              {errors.email && (
                <span className="text-cream/70 text-xs font-hn tracking-wide">{errors.email.message}</span>
              )}
            </div>

            {/* Message Field */}
            <div
              className={`flex flex-col gap-2 ${transitionClass}`}
              style={{ transitionDelay: '300ms' }}
            >
              <textarea
                placeholder="Message"
                rows={4}
                className={`${inputClasses} resize-none`}
                {...register('message')}
                disabled={status === 'pending'}
              />
              {errors.message && (
                <span className="text-cream/70 text-xs font-hn tracking-wide">{errors.message.message}</span>
              )}
            </div>

            {/* Submit Button & Status */}
            <div
              className={`mt-4 flex flex-col items-start gap-4 ${transitionClass}`}
              style={{ transitionDelay: '400ms' }}
            >
              <button
                type="submit"
                disabled={status === 'pending'}
                className={`${theme.neomorphicButton} !px-10 !py-4 text-base tracking-widest uppercase transition-all duration-300 ${status === 'pending' ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                {status === 'pending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <span
                  className="text-sm font-hn tracking-wide"
                  style={{ color: theme.accent }}
                >
                  Message sent — I'll get back to you soon.
                </span>
              )}

              {status === 'error' && (
                <span className="text-cream/70 text-sm font-hn tracking-wide">
                  Something went wrong — please email me directly instead.
                </span>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
