'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/motion'

const products = [
  { id: 1, title: 'Solid Carbide Drill', category: 'Cutting Tools', desc: 'High-performance solid carbide drills with TiAlN coating for superior wear resistance and precision hole-making in steel, cast iron, and alloys.', img: '/images/produtmateriallogo/Solid-Carbide-Drill.jpg', tag: 'Best Seller' },
  { id: 2, title: 'Carbide Endmill 4-Flute', category: 'Cutting Tools', desc: '4-flute solid carbide endmills for high-speed milling, profiling and finishing operations. Available in diameters 2–20mm.', img: '/images/produtmateriallogo/Carbide-Endmill-4-Flute.jpg', tag: 'Popular' },
  { id: 3, title: 'BT40 Tool Holder', category: 'Tooling Systems', desc: 'Precision BT40 collet chuck tool holders with high runout accuracy for CNC machining centres. ER collet compatible.', img: '/images/produtmateriallogo/BT40-Tool-Holder.jpg', tag: null },
  { id: 4, title: 'CCMT Turning Insert', category: 'Inserts', desc: 'Carbide CCMT turning inserts in multiple grades for steel, stainless and cast iron turning. CVD and PVD coated grades available.', img: '/images/produtmateriallogo/CCMT-Turning-Insert.png', tag: null },
  { id: 5, title: 'CBN Grinding Wheel', category: 'Abrasives', desc: 'CBN vitrified grinding wheels for precision grinding of hardened steels, tool steels and aerospace alloys. Custom profiles available.', img: '/images/produtmateriallogo/CBN.png', tag: 'Specialty' },
  { id: 6, title: 'Bi-Metal Bandsaw Blade', category: 'Saw Blades', desc: 'M42 bi-metal bandsaw blades with electron beam welded tips for cutting structural steel, solid bars and bundles.', img: '/images/produtmateriallogo/Bi-Metal-Bandsaw-Blade.png', tag: null },
  { id: 7, title: 'Digital Vernier Calliper', category: 'Metrology', desc: 'High-accuracy digital vernier callipers with 0–150mm / 0–200mm range. IP54 rated for workshop environments.', img: '/images/produtmateriallogo/Digital-Vernier-Calliper.png', tag: null },
  { id: 8, title: 'Boring Bar Set', category: 'Cutting Tools', desc: 'Anti-vibration carbide boring bars for precision internal diameter machining. Suitable for CNC lathes and turning centres.', img: '/images/produtmateriallogo/Boring-Bar-Set.png', tag: null },
  { id: 9, title: 'TCT Circular Saw Blade', category: 'Saw Blades', desc: 'Tungsten carbide tipped circular saw blades for cutting mild steel, stainless steel and aluminium profiles.', img: '/images/produtmateriallogo/TCT-Circular-Saw-Blade.png', tag: null },
  { id: 10, title: 'Collet ER32 Set', category: 'Tooling Systems', desc: 'Precision ER32 collet sets for accurate tool clamping. Available in 1–20mm range with 0.008mm runout accuracy.', img: '/images/produtmateriallogo/Collet-ER32-Set.png', tag: null },
  { id: 11, title: 'Threading Insert Set', category: 'Inserts', desc: 'Metric and inch threading inserts for external and internal thread turning. Multi-grade options for various workpiece materials.', img: '/images/produtmateriallogo/Threading-Insert-Set.png', tag: null },
  { id: 12, title: 'Digital Micrometer', category: 'Metrology', desc: '0–25mm digital outside micrometer with 0.001mm resolution. Ratchet thimble stop for consistent measuring force.', img: '/images/produtmateriallogo/Digital-Micrometer.png', tag: null },
]

export function ProductCategories() {
  const [isPaused, setIsPaused] = useState(false)
  const [direction, setDirection] = useState<'left' | 'right'>('left')

  // Duplicate items array for seamless 360-degree looping marquee
  const marqueeItems = [...products, ...products]

  return (
    <section className="py-28 bg-muted/40 overflow-hidden w-full relative">
      {/* Styles for continuous infinite marquee animation */}
      <style jsx>{`
        @keyframes marqueeScrollLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeScrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee-left {
          animation: marqueeScrollLeft 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeScrollRight 45s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-4">
            <span className="w-6 h-px bg-brand-blue" />
            Our Range
            <span className="w-6 h-px bg-brand-blue" />
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Comprehensive Product Portfolio
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From carbide cutting tools to precision measurement instruments — everything your manufacturing operation needs.
          </p>
        </FadeIn>
      </div>

      {/* Full-Width Marquee Container */}
      <div 
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Left & Right Gradient Fade Masks (Smooth In/Out Entry) */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-muted/90 via-muted/40 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-muted/90 via-muted/40 to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="overflow-hidden w-full py-4">
          <div
            className={`flex gap-6 w-max ${
              direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
            } ${isPaused ? 'marquee-paused' : ''}`}
          >
            {marqueeItems.map((product, index) => (
              <div
                key={`${product.id}-${index}`}
                className="w-[280px] sm:w-[320px] lg:w-[360px] flex-shrink-0"
              >
                <div className="group flex flex-col justify-between h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/40 hover:shadow-2xl transition-all duration-300">
                  <div>
                    {/* Card Image Header */}
                    <Link href={""} className="relative block aspect-[16/9] overflow-hidden">
                      <Image
                        src={product.img}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      {product.tag && (
                        <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase font-semibold bg-brand-blue text-white px-2.5 py-1 rounded-full z-10">
                          {product.tag}
                        </span>
                      )}
                      <span className="absolute top-3 right-3 text-[10px] tracking-widest uppercase font-semibold bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full z-10">
                        {product.category}
                      </span>
                    </Link>

                    {/* Card Text Content */}
                    <div className="p-5">
                      <Link href={""}>
                        <h3 className="font-bold text-foreground text-base mb-2 group-hover:text-brand-blue transition-colors">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-5 pt-0">
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-1.5 text-[12px] font-semibold py-2.5 bg-brand-blue text-white rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <MessageSquare size={13} />
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direction Controls */}
        <button
          onClick={() => setDirection('right')}
          aria-label="Slide Left to Right"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-xl flex items-center justify-center text-foreground hover:bg-brand-blue hover:text-white transition-all z-30"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={() => setDirection('left')}
          aria-label="Slide Right to Left"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/90 backdrop-blur-md border border-border shadow-xl flex items-center justify-center text-foreground hover:bg-brand-blue hover:text-white transition-all z-30"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Footer CTA */}
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mt-12" delay={0.2}>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-all"
          >
            View All Products
            <ArrowUpRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}