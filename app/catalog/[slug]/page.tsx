'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/motion'
import { Download, FileText, ExternalLink, Loader2 } from 'lucide-react'
import { brands } from '@/lib/productslist'

const steps = [
  { step: '01', title: 'Browse Catalogs', desc: 'Select the catalog relevant to your product category.' },
  { step: '02', title: 'Preview Content', desc: 'Review the product categories and page count.' },
  { step: '03', title: 'Click Download', desc: 'Instantly download the PDF to your device.' },
  { step: '04', title: 'Enquire', desc: 'Found a product? Contact us for pricing and availability.' },
]

interface PageProps {
  params: Promise<{ slug: string }>
}

// Sub-component to handle missing or broken images gracefully
function CatalogPreviewImage({
  src,
  alt,
  brandName,
  title,
  isFeatured = false,
}: {
  src?: string
  alt: string
  brandName: string
  title: string
  isFeatured?: boolean
}) {
  const [imgError, setImgError] = useState(false)

  // Show fallback PDF card if image path is missing or fails to load (404)
  if (!src || imgError) {
    return (
      <div className="bg-card border border-border rounded-xl w-32 h-40 p-4 flex flex-col items-center justify-between shadow-md group-hover:shadow-xl transition-shadow text-center z-10">
        <span className="text-[9px] font-bold uppercase tracking-wider text-brand-blue/80 line-clamp-1">
          {brandName}
        </span>
        <FileText size={36} className="text-brand-blue my-2" />
        <span className="text-[10px] font-medium text-foreground line-clamp-2 leading-tight">
          {title}
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      className={`object-contain ${
        isFeatured
          ? 'p-6 opacity-80 group-hover:scale-105 transition-transform duration-500'
          : 'p-4 group-hover:scale-105 transition-transform duration-500'
      }`}
      onError={() => setImgError(true)}
    />
  )
}

export default function CatalogPage({ params }: PageProps) {
  const { slug } = use(params)
  const [downloading, setDownloading] = useState<string | null>(null)

  const brand = brands.find((b) => b.slug.toLowerCase() === slug.toLowerCase())

  if (!brand) {
    notFound()
  }

  const catalogItems = brand.pdfs.map((pdf) => ({
    ...pdf,
    brandName: brand.name,
    brandSlug: brand.slug,
    brandLogo: brand.logo,
  }))

  const handleDownload = async (pdfUrl: string, title: string) => {
    setDownloading(title)

    try {
      const response = await fetch(pdfUrl)
      const contentType = response.headers.get('content-type')

      if (!response.ok || (contentType && contentType.includes('text/html'))) {
        throw new Error('PDF file not found on server.')
      }

      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)

      let fileName = pdfUrl.split('/').pop() || `${title.replace(/\s+/g, '-').toLowerCase()}.pdf`
      if (!fileName.endsWith('.pdf')) {
        fileName += '.pdf'
      }

      const link = document.createElement('a')
      link.href = blobUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      console.error('Download error:', error)
      alert('The requested PDF file could not be found. Please check that the file exists in your public folder.')
    } finally {
      setTimeout(() => setDownloading(null), 1000)
    }
  }

  const featuredCatalog = catalogItems[0]

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
              Resource Centre ({catalogItems.length} Catalogs Available)
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance mb-6 max-w-4xl">
              Download {brand.name}
              <br />
              <span className="text-muted-foreground">Product Catalogs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Access official technical catalogs and brochures for {brand.name}. All files are available
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
            <p className="text-muted-foreground">
              Updated brand catalogs for {brand.name} — all PDFs are free to download.
            </p>
          </FadeIn>

          {/* Featured Catalog */}
          {featuredCatalog && (
            <FadeIn className="mb-8">
              {(() => {
                const main = featuredCatalog
                const isDownloading = downloading === main.title
                const displayImage = main.image || main.cover || main.brandLogo

                return (
                  <div className="relative rounded-2xl overflow-hidden bg-[#1F3A5F] dark:bg-[#0d1f35] p-10 md:p-14">
                    <div
                      className="absolute inset-0 opacity-[0.05]"
                      style={{
                        backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                      }}
                    />
                    <div className="relative grid md:grid-cols-2 gap-10 items-center">
                      <div>
                        <span className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold bg-white/10 text-white px-3 py-1 rounded-full mb-5">
                          Featured
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">{main.title}</h3>
                        <p className="text-white/60 leading-relaxed mb-6">{main.desc}</p>
                        {main.categories && main.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-8">
                            {main.categories.map((c) => (
                              <span
                                key={c}
                                className="text-[11px] font-semibold bg-white/10 text-white/70 px-3 py-1 rounded-full"
                              >
                                {c}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-3 text-white/40 text-sm mb-8">
                          {main.pages && (
                            <span className="flex items-center gap-1">
                              <FileText size={13} /> {main.pages}
                            </span>
                          )}
                          {main.pages && main.size && <span className="w-1 h-1 rounded-full bg-white/20" />}
                          {main.size && <span>{main.size}</span>}
                          {(main.pages || main.size) && main.type && (
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                          )}
                          {main.type && <span>{main.type}</span>}
                        </div>
                        <motion.button
                          onClick={() => handleDownload(main.url, main.title)}
                          disabled={isDownloading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center gap-2 bg-white text-[#1F3A5F] text-sm font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all disabled:opacity-80"
                        >
                          {isDownloading ? (
                            <>
                              <Loader2 size={16} className="animate-spin text-brand-blue" /> Downloading...
                            </>
                          ) : (
                            <>
                              <Download size={16} /> Download Full Catalog
                            </>
                          )}
                        </motion.button>
                      </div>
                      <div className="hidden md:block">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 aspect-[3/4] flex items-center justify-center relative overflow-hidden group">
                          <CatalogPreviewImage
                            src={displayImage}
                            alt={main.title}
                            brandName={main.brandName}
                            title={main.title}
                            isFeatured
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()}
            </FadeIn>
          )}

          {/* All Catalogs Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogItems.map((cat, idx) => {
              const isDownloading = downloading === cat.title
              const displayImage = cat.image || cat.cover || cat.brandLogo

              return (
                <StaggerItem key={cat.url + idx}>
                  <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
                    {/* Catalog Preview / Image Container */}
                    <div className="bg-muted/60 p-6 flex items-center justify-center aspect-[4/3] relative overflow-hidden">
                      <CatalogPreviewImage
                        src={displayImage}
                        alt={cat.title}
                        brandName={cat.brandName}
                        title={cat.title}
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <div className="text-[11px] font-semibold text-brand-blue uppercase tracking-wider mb-1">
                          {cat.brandName}
                        </div>
                        <h3 className="font-bold text-foreground text-base mb-2 line-clamp-1">{cat.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                          {cat.desc}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-3 text-muted-foreground text-xs mb-5">
                          {cat.pages && <span>{cat.pages}</span>}
                          {cat.pages && cat.size && <span className="w-1 h-1 rounded-full bg-border" />}
                          {cat.size && <span>{cat.size}</span>}
                          {(cat.pages || cat.size) && cat.type && (
                            <span className="w-1 h-1 rounded-full bg-border" />
                          )}
                          {cat.type && <span>{cat.type}</span>}
                        </div>

                        <motion.button
                          onClick={() => handleDownload(cat.url, cat.title)}
                          disabled={isDownloading}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-[13px] font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-80"
                        >
                          {isDownloading ? (
                            <>
                              <Loader2 size={14} className="animate-spin" /> Downloading...
                            </>
                          ) : (
                            <>
                              <Download size={14} /> Download PDF
                            </>
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

      {/* Custom Request */}
      <section className="py-20 bg-muted/40">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <ExternalLink size={32} className="text-brand-blue mx-auto mb-5" />
            <h2 className="text-3xl font-bold text-foreground mb-4">Need a Custom Technical Sheet?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team can prepare tailored product datasheets and application guides for {brand.name}. Contact
              us to request a custom document.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            >
              Request Custom Sheet
            </Link>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  )
}