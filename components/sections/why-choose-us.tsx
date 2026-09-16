'use client'

import { Check, Package, Headphones, Star, Clock, Truck } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'

const reasons = [
  {
    icon: Package,
    title: '500+ Product SKUs',
    desc: 'An extensive catalogue covering every aspect of industrial tooling and machining needs.',
  },
  {
    icon: Star,
    title: 'Authorised Dealerships',
    desc: 'Official partners of globally recognised brands — guaranteeing genuine, quality products.',
  },
  {
    icon: Headphones,
    title: 'Expert Technical Support',
    desc: 'Our team of experienced engineers provides guidance for tool selection and application.',
  },
  {
    icon: Clock,
    title: '35+ Years Experience',
    desc: 'Three decades of deep industry expertise spanning multiple manufacturing sectors.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply Chain',
    desc: 'Fast and dependable delivery network ensuring minimal downtime for your operations.',
  },
  {
    icon: Check,
    title: 'Quality Assurance',
    desc: 'Every product undergoes rigorous quality checks before reaching your facility.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-28 bg-muted/40">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-4">
            <span className="w-6 h-px bg-brand-blue" />
            Why Mittal Industrial Tools
            <span className="w-6 h-px bg-brand-blue" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            The Industrial Tooling
            <br />
            Partner You Can Trust
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            We go beyond supplying tools — we build long-term partnerships that enhance your manufacturing efficiency.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <StaggerItem key={reason.title}>
              <div className="bg-card border border-border rounded-2xl p-8 hover-lift group">
                <div className="w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300">
                  <reason.icon
                    size={20}
                    className="text-brand-blue group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="font-bold text-foreground text-base mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
