'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Shield, Zap } from 'lucide-react'
import { FadeIn } from '@/components/motion'

const highlights = [
  { icon: Award, title: 'ISO Certified Quality', desc: 'All products meet international quality standards.' },
  { icon: Shield, title: 'Trusted Partnerships', desc: 'Authorised dealers of leading global tool brands.' },
  { icon: Zap, title: 'Technical Expertise', desc: '35+ years of precision machining knowledge.' },
]

export function AboutPreview() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Mittal Industrial Tools workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Glass badge */}
                <div className="absolute bottom-6 left-6 glass rounded-xl px-5 py-4">
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">Established</p>
                  <p className="text-3xl font-bold text-foreground">1988</p>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-48 h-48 rounded-2xl border border-primary/20 -z-10" />
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.1}>
            <div>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
                <span className="w-6 h-px bg-brand-blue" />
                Our Story
              </span>

              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
                Decades of Industrial
                <br />
                Tooling Excellence
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-4">
                For over three decades, Mittal Industrial Tools has been the preferred partner for precision tooling
                across manufacturing industries in North India. Based in Rohtak, Haryana, we supply and support
                a comprehensive range of cutting tools, CNC accessories, and industrial solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our deep technical knowledge, backed by authorised partnerships with globally recognised brands,
                enables us to deliver solutions that enhance productivity and reduce operational costs for our clients.
              </p>

              <div className="space-y-4 mb-10">
                {highlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <h.icon size={16} className="text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{h.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm group"
              >
                Read Our Full Story
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
