'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'

const industries = [
  { name: 'Aerospace', desc: 'Tight-tolerance tooling for flight-critical components.' },
  { name: 'Automotive', desc: 'High-volume cutting tools for engine and chassis parts.' },
  { name: 'Precision Engineering', desc: 'Micron-level accuracy for intricate components.' },
  { name: 'Metal Fabrication', desc: 'Versatile tooling for sheet metal and structural work.' },
  { name: 'Tool Manufacturing', desc: 'Specialist tooling for die and mould production.' },
  { name: 'Heavy Engineering', desc: 'Robust solutions for large-scale industrial machining.' },
]

export function IndustriesPreview() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              Industries Served
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance mb-6">
              Powering Industry
              <br />
              Across Every Sector
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Our industrial tooling solutions serve a wide spectrum of manufacturing sectors,
              delivering precision and reliability that drives productivity across India.
            </p>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {industries.map((ind) => (
                <StaggerItem key={ind.name}>
                  <div className="flex items-start gap-3 p-4 rounded-xl border border-border hover:border-brand-blue/30 hover:bg-primary/5 transition-all duration-200 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{ind.name}</p>
                      <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{ind.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-primary/90 transition-all group"
            >
              Explore Industries
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          {/* Image */}
          <FadeIn direction="right" delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/industries-bg.jpg"
                alt="Industrial manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-white/60 text-xs tracking-widest uppercase mb-1">Currently Serving</p>
                <p className="text-white text-2xl font-bold">8+ Industries</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
