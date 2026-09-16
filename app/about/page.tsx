'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { AnimatedCounter } from '@/components/animated-counter'
import { Target, Eye, Award, Shield, Cog, Users } from 'lucide-react'

const timeline = [
  { year: '1988', event: 'Founded in Rohtak', desc: 'Mittal Industrial Tools established as a small tooling supplier in Haryana.' },
  { year: '1995', event: 'Expanded Product Range', desc: 'Added CNC tooling systems and precision measuring instruments to portfolio.' },
  { year: '2002', event: 'Authorised Dealerships', desc: 'Secured authorised dealerships with leading global tooling brands.' },
  { year: '2010', event: 'Modern Facility', desc: 'Moved to new, larger premises to accommodate growing inventory and team.' },
  { year: '2018', event: '30 Years of Excellence', desc: 'Celebrated three decades of service with 150+ clients across North India.' },
  { year: '2024', event: 'Digital Transformation', desc: 'Launched online presence and digital catalog to serve clients nationwide.' },
]

const values = [
  { icon: Target, title: 'Precision', desc: 'Delivering tools that meet exact specifications every time.' },
  { icon: Shield, title: 'Reliability', desc: 'Consistent quality and supply chain dependability.' },
  { icon: Users, title: 'Partnership', desc: 'Long-term relationships built on trust and technical expertise.' },
  { icon: Cog, title: 'Innovation', desc: 'Continuously adopting the latest tooling technologies.' },
]

const stats = [
  { value: 35, suffix: '+', label: 'Years Experience' },
  { value: 500, suffix: '+', label: 'Products' },
  { value: 200, suffix: '+', label: 'Clients' },
  { value: 15, suffix: '+', label: 'Team Members' },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-background overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              About Us
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-6 max-w-4xl">
              35 Years of Tooling
              <br />
              <span className="text-muted-foreground">Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From a small shop in Rohtak to one of North India&apos;s most trusted industrial tooling companies —
              our journey is defined by precision, partnership, and relentless commitment to quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 bg-brand-blue dark:bg-[#1a2d4a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div>
                  <div className="text-4xl font-bold text-white mb-1">
                    <AnimatedCounter target={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/60 text-sm tracking-wide">{s.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company story */}
      <section className="py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/about-hero.jpg"
                  alt="Mittal Industrial Tools facility"
                  fill className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
                <span className="w-6 h-px bg-brand-blue" />
                Our Story
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                Built on Trust, Driven by Precision
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mittal Industrial Tools was founded in 1988 in Rohtak, Haryana with a simple vision: to provide
                  manufacturers across North India with access to world-class industrial tooling solutions.
                </p>
                <p>
                  Over three and a half decades, we have grown from a modest tooling shop into a comprehensive
                  industrial solutions partner, representing globally recognised brands and serving clients in
                  aerospace, automotive, precision engineering, and heavy manufacturing.
                </p>
                <p>
                  Our technical team brings deep application knowledge to every customer interaction, ensuring
                  that every product recommendation is backed by real-world machining expertise. We don&apos;t just
                  sell tools — we help you achieve better productivity, lower costs, and superior component quality.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <FadeIn direction="left">
              <div className="bg-brand-blue dark:bg-[#1a2d4a] rounded-2xl p-10 h-full">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To empower Indian manufacturers with precision tooling solutions, technical expertise,
                  and reliable supply chains that enhance productivity, reduce costs, and elevate the
                  quality of finished products — enabling them to compete on a global stage.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-10 h-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6">
                  <Eye size={22} className="text-brand-blue" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become the most trusted industrial tooling partner for precision manufacturers across
                  India, recognised for our technical excellence, genuine product quality, and unwavering
                  commitment to customer success.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Values */}
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Core Values</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-card border border-border rounded-2xl p-6 text-center hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <v.icon size={20} className="text-brand-blue" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{v.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-28 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-4">
              <span className="w-6 h-px bg-brand-blue" />
              Our Journey
              <span className="w-6 h-px bg-brand-blue" />
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Milestones That Shaped Us
            </h2>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-border hidden md:block" />

            <div className="space-y-10">
              {timeline.map((item, i) => (
                <FadeIn key={item.year} delay={i * 0.08}>
                  <div className="flex gap-8 items-start">
                    <div className="flex-shrink-0 w-32 text-right hidden md:block">
                      <span className="text-2xl font-bold text-brand-blue">{item.year}</span>
                    </div>
                    <div className="relative hidden md:flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-brand-blue ring-4 ring-background z-10" />
                    </div>
                    <div className="flex-1 bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="md:hidden text-brand-blue font-bold text-sm">{item.year}</span>
                        <h4 className="font-bold text-foreground">{item.event}</h4>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-card border border-border rounded-3xl p-10 md:p-16">
            <FadeIn direction="left" className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-blue flex items-center justify-center flex-shrink-0">
                <Award size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Quality Assurance</h3>
                <p className="text-muted-foreground text-sm mt-1 max-w-md leading-relaxed">
                  Every product we supply undergoes thorough quality verification. We exclusively deal in
                  genuine products from verified manufacturers and authorised distributors.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1} className="flex-shrink-0">
              <div className="text-center">
                <div className="text-5xl font-bold text-brand-blue mb-1">100%</div>
                <p className="text-muted-foreground text-sm">Genuine Products</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
