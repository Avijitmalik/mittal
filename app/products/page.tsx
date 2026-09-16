'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn } from '@/components/motion'
import { Download, MessageSquare, Search, ChevronDown } from 'lucide-react'
import Link from 'next/link'

const categories = ['All', 'Cutting Tools', 'Tooling Systems', 'Inserts', 'Abrasives', 'Saw Blades', 'Metrology', 'Others']

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
export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedId, setExpandedId] = useState<number | null>(null)

  const filtered = products.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-20"
          style={{ backgroundImage: 'url(/images/products-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              Product Range
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance mb-4 max-w-3xl">
              Our Product
              <br />
              <span className="text-muted-foreground">Catalogue</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              500+ precision tooling products across 9 categories from the world&apos;s leading brands.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[60px] z-30 bg-background/80 backdrop-blur-xl border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted border border-border rounded-full outline-none focus:border-brand-blue/50 focus:ring-2 focus:ring-brand-blue/10 transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Category pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 text-[12px] font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-blue text-white'
                    : 'bg-muted text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((product) => (
                <Link
                  key={product.id}
                  href={""}
                  className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
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
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-base mb-2">{product.title}</h3>
                    <p className={`text-muted-foreground text-sm leading-relaxed ${expandedId === product.id ? '' : 'line-clamp-3'}`}>
                      {product.desc}
                    </p>

                    {/* {product.desc.length > 100 && (
                      <button
                        onClick={() => setExpandedId(expandedId === product.id ? null : product.id)}
                        className="flex items-center gap-1 text-brand-blue text-xs font-semibold mt-2 hover:underline"
                      >
                        {expandedId === product.id ? 'Show less' : 'Read more'}
                        <ChevronDown
                          size={12}
                          className={`transition-transform ${expandedId === product.id ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )} */}

                    {/* Actions */}
                    <div className="flex gap-3 mt-5">
                      {/* <Link
                        href="/catalog"
                        className="flex-1 flex items-center justify-center gap-1.5 text-[12px] font-semibold py-2.5 border border-border rounded-full hover:bg-muted transition-colors text-foreground"
                      >
                        <Download size={13} />
                        Catalog
                      </Link> */}
                      <Link
                        href="/contact"
                        className="flex-1 flex items-center justify-center gap-1.5 text-[12px] font-semibold py-2.5 bg-brand-blue text-white rounded-full hover:bg-primary/90 transition-colors"
                      >
                        <MessageSquare size={13} />
                        Enquire
                      </Link>
                    </div>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">No products found for &quot;{searchQuery}&quot;</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All') }}
                className="mt-4 text-brand-blue font-semibold text-sm hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our catalogue contains 500+ products. Contact our technical team and we&apos;ll help you find the
              exact tooling solution for your application.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            >
              Contact Our Experts
            </Link>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  )
}
