'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Download, FileText, ExternalLink, CheckCircle2 } from 'lucide-react'
import { brands } from '@/lib/productslist'


// Flatten all PDFs from all brands into a single list with brand metadata
const allCatalogs = brands.flatMap((brand) =>
  brand.pdfs.map((pdf) => ({
    ...pdf,
    brandName: brand.name,
    brandLogo: brand.logo,
  }))
)

const steps = [
  { step: '01', title: 'Browse Catalogs', desc: 'Select the catalog relevant to your product category.' },
  { step: '02', title: 'Preview Content', desc: 'Review the product categories and page count.' },
  { step: '03', title: 'Click Download', desc: 'Instantly download the PDF to your device.' },
  { step: '04', title: 'Enquire', desc: 'Found a product? Contact us for pricing and availability.' },
]

export default function CatalogPage() {
  const [downloading, setDownloading] = useState<string | null>(null)

  const handleDownload = (url: string, title: string) => {
    setDownloading(title)

    // Trigger actual download / open PDF in tab
    const link = document.createElement('a')
    link.href = url
    link.target = '_blank'
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => setDownloading(null), 2000)
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-background overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-5">
              <span className="w-6 h-px bg-brand-blue" />
              Resource Centre
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance mb-6 max-w-4xl">
              Download Our
              <br />
              <span className="text-muted-foreground">Product Catalogs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Access our complete product catalogue and category-specific brochures. All files are available
              as instant PDF downloads — no registration required.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-border">{s.step}</span>
                  <div>
                    <h4 className="font-bold text-foreground text-sm mb-1">{s.title}</h4>
                    <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogs grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Available Catalogs</h2>
            <p className="text-muted-foreground">Updated for 2026 — all PDFs are free to download.</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allCatalogs.map((cat, index) => {
              const isDownloading = downloading === cat.title
              const itemKey = `${cat.brandName}-${cat.title}-${index}`

              return (
                <StaggerItem key={itemKey}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                    
                    {/* Thumbnail / Preview Header */}
                    <div className="bg-muted p-6 flex items-center justify-center aspect-[4/3] relative">
                      <div className="bg-card border border-border rounded-lg w-28 h-36 flex flex-col items-center justify-center shadow-md group-hover:shadow-xl transition-shadow p-3 text-center">
                        {cat.brandLogo ? (
                          <div className="relative w-12 h-8 mb-2">
                            <Image
                              src={cat.brandLogo}
                              alt={cat.brandName}
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : (
                          <FileText size={32} className="text-brand-blue mb-2" />
                        )}
                        <span className="text-[9px] tracking-widest uppercase text-muted-foreground font-semibold leading-tight line-clamp-2">
                          {cat.title}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold tracking-wider uppercase text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded">
                            {cat.brandName}
                          </span>
                        </div>
                        <h3 className="font-bold text-foreground text-base mb-2 line-clamp-1">{cat.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{cat.desc}</p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 text-muted-foreground text-xs mb-5">
                          <span>{cat.pages || 'PDF'}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>{cat.size || 'Download'}</span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span>{cat.type || 'PDF'}</span>
                        </div>

                        <motion.button
                          onClick={() => handleDownload(cat.url, cat.title)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center cursor-pointer justify-center gap-2 bg-brand-blue text-white text-[13px] font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors"
                        >
                          {isDownloading ? (
                            <><CheckCircle2 size={14} /> Downloading...</>
                          ) : (
                            <><Download size={14} /> Download PDF</>
                          )}
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Custom request */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <ExternalLink size={32} className="text-brand-blue mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need a Custom Technical Sheet?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team can prepare tailored product datasheets and application guides for your specific
              machining requirements. Contact us to request a custom document.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            >
              Request Custom Sheet
            </a>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  )
}