'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowUpRight, MessageSquare } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'

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
  // Display only the first 6 items on this page
  const visibleProducts = products.slice(0, 6)

  return (
    <section className="py-28 bg-muted/40">
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

        {/* 3-column grid showing first 6 products */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <StaggerItem key={product.id}>
              <div className="group flex flex-col justify-between h-full bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300">
                <div>
                  {/* Card Image Header */}
                  <Link href={`/products/${product.id}`} className="relative block aspect-[16/9] overflow-hidden">
                    <Image
                      src={product.img}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {product.tag && (
                      <span className="absolute top-3 left-3 text-[10px] tracking-widest uppercase font-semibold bg-brand-blue text-white px-2.5 py-1 rounded-full">
                        {product.tag}
                      </span>
                    )}
                    <span className="absolute top-3 right-3 text-[10px] tracking-widest uppercase font-semibold bg-black/40 backdrop-blur-sm text-white px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </Link>

                  {/* Card Text Content */}
                  <div className="p-5">
                    <Link href={`/products/${product.id}`}>
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
            </StaggerItem>
          ))}
        </StaggerContainer>

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