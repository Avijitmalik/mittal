'use client'

import { AnimatedCounter } from '@/components/animated-counter'
import { FadeIn } from '@/components/motion'

const stats = [
  { value: 35, suffix: '+', label: 'Years in Business', desc: 'Serving industry since 1988' },
  { value: 500, suffix: '+', label: 'Product SKUs', desc: 'Across all tooling categories' },
  { value: 200, suffix: '+', label: 'Satisfied Clients', desc: 'Across North India' },
  { value: 8, suffix: '+', label: 'Industries Served', desc: 'From aerospace to automotive' },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-[#1E1E1E] dark:bg-[#0A0A0C] overflow-hidden relative">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance">
            Numbers That Define Our Legacy
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 font-semibold text-sm mb-1">{stat.label}</p>
                <p className="text-white/35 text-xs">{stat.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
