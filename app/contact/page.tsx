'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn } from '@/components/motion'
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react'

const productOptions = [
  'Carbide Drills',
  'Carbide Endmills',
  'CNC Tool Holders',
  'Boring Bars',
  'Threading Inserts',
  'Grinding Wheels',
  'Bandsaw Blades',
  'Circular Saw Blades',
  'Measuring Instruments',
  'Lubricants',
  'V Belts & Power Transmission',
  'Fasteners',
  'Other / General Inquiry',
]

const contactDetails = [
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 7949224038'],
    href: 'tel:+917949224038',
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@mittaltools.com'],
    href: 'mailto:info@mittaltools.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    lines: ['1988/1, 1888/1, Lal Bahadur Shastri Nagar,', 'Rohtak, Haryana – 124001'],
    href: 'https://maps.google.com',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Mon–Sat: 9:00 AM – 7:00 PM', 'Sunday: Closed'],
    href: null,
  },
]

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  product: string
  message: string
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: '', company: '', email: '', phone: '', product: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const Field = ({
    id, label, type = 'text', as,
  }: { id: keyof FormData; label: string; type?: string; as?: 'textarea' | 'select' }) => {
    const isFocused = focused === id
    const hasValue = form[id] !== ''

    return (
      <div className="relative">
        <label
          htmlFor={id}
          className={`absolute left-4 transition-all duration-200 pointer-events-none text-muted-foreground ${
            isFocused || hasValue
              ? '-top-2.5 text-[11px] tracking-wide font-semibold text-brand-blue bg-card px-1.5 rounded'
              : 'top-3.5 text-sm'
          }`}
        >
          {label}
        </label>

        {as === 'textarea' ? (
          <textarea
            id={id}
            rows={4}
            value={form[id]}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            className="w-full px-4 pt-4 pb-3 text-sm bg-card border border-border rounded-xl outline-none focus:border-brand-blue/60 focus:ring-2 focus:ring-brand-blue/10 transition-all resize-none text-foreground"
          />
        ) : as === 'select' ? (
          <select
            id={id}
            value={form[id]}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            className="w-full px-4 py-3.5 text-sm bg-card border border-border rounded-xl outline-none focus:border-brand-blue/60 focus:ring-2 focus:ring-brand-blue/10 transition-all text-foreground appearance-none"
          >
            <option value="" disabled />
            {productOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        ) : (
          <input
            id={id}
            type={type}
            value={form[id]}
            onFocus={() => setFocused(id)}
            onBlur={() => setFocused(null)}
            onChange={(e) => setForm({ ...form, [id]: e.target.value })}
            className="w-full px-4 py-3.5 text-sm bg-card border border-border rounded-xl outline-none focus:border-brand-blue/60 focus:ring-2 focus:ring-brand-blue/10 transition-all text-foreground"
          />
        )}
      </div>
    )
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              Contact Us
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance mb-4 max-w-3xl">
              Let&apos;s Start a
              <br />
              <span className="text-muted-foreground">Conversation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Whether you have a technical query, need a quote, or want to discuss your tooling needs —
              our team is ready to help.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — takes 3 cols */}
            <FadeIn direction="left" className="lg:col-span-3">
              <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
                {submitted ? (
                  <motion.div
                    className="text-center py-16"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 size={32} className="text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Enquiry Sent!</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Our team will get back to you within 24 business hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', product: '', message: '' }) }}
                      className="mt-8 text-brand-blue text-sm font-semibold hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h2 className="text-xl font-bold text-foreground mb-1">Send an Enquiry</h2>
                      <p className="text-sm text-muted-foreground">We respond within 24 business hours.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="name" label="Full Name *" />
                      <Field id="company" label="Company Name" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field id="email" label="Email Address *" type="email" />
                      <Field id="phone" label="Phone Number" type="tel" />
                    </div>
                    <Field id="product" label="Product Interest" as="select" />
                    <Field id="message" label="Your Message *" as="textarea" />

                    <motion.button
                      type="submit"
                      disabled={loading || !form.name || !form.email || !form.message}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-bold py-4 rounded-full hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : (
                        <><Send size={15} /> Send Enquiry</>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info — 2 cols */}
            <FadeIn direction="right" delay={0.1} className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">Get In Touch</h2>
                <p className="text-sm text-muted-foreground">Visit us, call us, or drop us an email.</p>
              </div>

              {contactDetails.map((c) => (
                <div key={c.title} className="group">
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 bg-card border border-border rounded-xl p-5 hover:border-brand-blue/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                        <c.icon size={18} className="text-brand-blue group-hover:text-white transition-colors duration-300" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground tracking-wide mb-1">{c.title}</p>
                        {c.lines.map((l) => <p key={l} className="text-sm font-medium text-foreground leading-relaxed">{l}</p>)}
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <c.icon size={18} className="text-brand-blue" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground tracking-wide mb-1">{c.title}</p>
                        {c.lines.map((l) => <p key={l} className="text-sm font-medium text-foreground leading-relaxed">{l}</p>)}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Map embed */}
              <div className="rounded-xl overflow-hidden border border-border h-52">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.5847!2d76.5744!3d28.8955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d84f3a28d5b73%3A0x0!2sRohtak%2C%20Haryana!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mittal Industrial Tools Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
