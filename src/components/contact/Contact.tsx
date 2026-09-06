import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { theme } from '../../styles/theme'
import Reveal from '../ui/Reveal'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Please enter a valid email address.'),
  message: z.string().min(10, 'Message must be at least 10 characters.'),
})

type ContactFormData = z.infer<typeof contactSchema>

function ContactLink({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className={theme.labelMuted}>{label}</span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-fg text-lg md:text-xl hover:underline transition-opacity hover:opacity-70"
      >
        {value}
      </a>
    </div>
  )
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setStatus('pending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  useEffect(() => {
    if (status === 'success') {
      const timer = setTimeout(() => setStatus('idle'), 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  const inputClasses =
    'w-full bg-transparent border-b border-border text-fg text-lg py-4 focus:outline-none focus:border-primary transition-colors duration-300 placeholder:text-muted/60'

  return (
    <section id="contact" className={`${theme.sectionBase} pb-20 md:pb-28`}>
      <div className={`${theme.container} grid md:grid-cols-12 gap-12 md:gap-16`}>
        <div className="md:col-span-5 flex flex-col gap-10">
          <Reveal>
            <h2 className={`${theme.headingSection} mb-4`}>Get in Touch</h2>
            <p className={theme.bodyLarge}>
              Have a project or opportunity in mind? Let&apos;s connect.
            </p>
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-8">
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
          </Reveal>
        </div>

        <Reveal delay={150} className="md:col-span-7">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="Name"
                className={inputClasses}
                {...register('name')}
                disabled={status === 'pending'}
              />
              {errors.name && (
                <span className="text-muted text-xs">{errors.name.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className={inputClasses}
                {...register('email')}
                disabled={status === 'pending'}
              />
              {errors.email && (
                <span className="text-muted text-xs">{errors.email.message}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <textarea
                placeholder="Message"
                rows={4}
                className={`${inputClasses} resize-none`}
                {...register('message')}
                disabled={status === 'pending'}
              />
              {errors.message && (
                <span className="text-muted text-xs">{errors.message.message}</span>
              )}
            </div>

            <div className="flex flex-col items-start gap-4">
              <button
                type="submit"
                disabled={status === 'pending'}
                className="h-12 px-8 inline-flex items-center uppercase font-display tracking-widest bg-primary text-black transition-all duration-300 hover:bg-fg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'pending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <span className="text-primary text-sm">
                  Message sent — I&apos;ll get back to you soon.
                </span>
              )}
              {status === 'error' && (
                <span className="text-muted text-sm">
                  Something went wrong — please email me directly instead.
                </span>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
