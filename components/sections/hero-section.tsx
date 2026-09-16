'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E10]/90 via-[#0E0E10]/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/60 via-transparent to-transparent" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-[#2F6FED] font-semibold mb-6">
              <span className="w-6 h-px bg-[#2F6FED]" />
              Est. 1988 — Rohtak, Haryana
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Precision Industrial
            <br />
            <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #2F6FED, #5B92F8)' }}>
              Tooling Solutions
            </span>
            <br />
            Engineered for Performance
          </motion.h1>

          <motion.p
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-xl"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            Mittal Industrial Tools delivers world-class carbide cutting tools, CNC tooling systems,
            and precision instruments trusted by leading manufacturers across India.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            <Link
              href="/products"
              className="flex items-center gap-2 bg-[#2F6FED] text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-[#2060d8] transition-all duration-200 group"
            >
              Explore Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/catalog"
              className="flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <Download size={15} />
              Download Catalog
            </Link>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            className="flex flex-wrap gap-8 mt-16 pt-8 border-t border-white/10"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.8, delay: 0.3 } },
            }}
          >
            {[
              { value: '35+', label: 'Years Experience' },
              { value: '500+', label: 'Product SKUs' },
              { value: '200+', label: 'Happy Clients' },
              { value: '8+', label: 'Industries Served' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/40 mt-0.5 tracking-wide">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">Scroll</span>
      </motion.div>
    </section>
  )
}
