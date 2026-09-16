'use client'

import Link from 'next/link'
import { Download, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/motion'

export function CatalogCTA() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="relative rounded-3xl overflow-hidden bg-[#1F3A5F] dark:bg-[#0d1f35] p-12 md:p-20 text-center">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
              }}
            />

            {/* Blue glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full blur-[120px] bg-[#2F6FED]/30 -z-0" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-blue-300 font-semibold mb-5">
                <span className="w-6 h-px bg-blue-300" />
                Product Catalog 2024
                <span className="w-6 h-px bg-blue-300" />
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white text-balance mb-4">
                Download Our Complete
                <br />
                Product Catalog
              </h2>
              <p className="text-white/60 max-w-xl mx-auto leading-relaxed mb-10">
                Access our full product range, technical specifications, and brand portfolio in one comprehensive catalog.
                Updated for 2024.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/catalog"
                  className="flex items-center gap-2 bg-white text-[#1F3A5F] text-sm font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all"
                >
                  <Download size={16} />
                  Download Catalog
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all group"
                >
                  Request Custom Quote
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
