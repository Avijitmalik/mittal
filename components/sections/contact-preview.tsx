'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'

const contacts = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91  92156 01909',
    sub: '+91  92156 01909',
    href: 'tel:+91 92156 01909',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'mittalindustrialtools@gmail.com',
    sub: 'We reply within 24 hours',
    href: 'mailto:mittalindustrialtools@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Rohtak, Haryana',
    sub: '124001, India',
    href: '/contact',
  },
]

export function ContactPreview() {
  return (
    <section className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              Get In Touch
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-4">
              Let&apos;s Discuss Your
              <br />
              Tooling Requirements
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Whether you need a single tool or a complete machining solution, our experts are ready to help
              you find the right product at the right price.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all group"
            >
              Send An Enquiry
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <StaggerContainer className="space-y-4">
              {contacts.map((c) => (
                <StaggerItem key={c.title}>
                  <a
                    href={c.href}
                    className="flex items-center gap-5 bg-card border border-border rounded-2xl p-6 hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors duration-300">
                      <c.icon
                        size={20}
                        className="text-brand-blue group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground tracking-wide mb-0.5">{c.title}</p>
                      <p className="font-semibold text-foreground">{c.value}</p>
                      <p className="text-muted-foreground text-sm">{c.sub}</p>
                    </div>
                    <ArrowRight
                      size={14}
                      className="ml-auto text-muted-foreground group-hover:text-brand-blue group-hover:translate-x-1 transition-all duration-200"
                    />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
