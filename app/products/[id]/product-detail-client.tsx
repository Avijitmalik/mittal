'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FadeIn } from '@/components/motion'
import { Download, Send, ArrowLeft, Star, Zap, Shield, TrendingUp, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products-data'

type Props = {
  product: Product
  related: Product[]
}

export function ProductDetailClient({ product, related }: Props) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showEnquiry, setShowEnquiry] = useState(false)

  const galleryImages = product.gallery || [product.img]

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border sticky top-[60px] z-20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 text-sm">
          <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
            Products
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-semibold">{product.title}</span>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm mb-8 hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-muted/40 border border-border rounded-2xl overflow-hidden mb-4">
                <div className="relative aspect-square">
                  <Image
                    src={galleryImages[selectedImage]}
                    alt={product.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />
                  {product.tag && (
                    <span className="absolute top-4 left-4 text-[11px] tracking-widest uppercase font-semibold bg-brand-blue text-white px-3 py-1.5 rounded-full">
                      {product.tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg border-2 overflow-hidden transition-all ${
                      selectedImage === idx ? 'border-brand-blue' : 'border-border hover:border-brand-blue/50'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.title} ${idx + 1}`}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              <span className="text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold mb-3">
                {product.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">{product.desc}</p>

              {/* Features */}
              <div className="space-y-2 mb-8">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Zap size={16} className="text-brand-blue mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 mt-auto">
                <button
                  onClick={() => setShowEnquiry(true)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white text-sm font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Send size={16} />
                  Send Enquiry
                </button>
                <Link
                  href="/catalog"
                  className="w-full flex items-center justify-center gap-2 bg-muted text-foreground text-sm font-semibold py-3 rounded-full hover:bg-secondary transition-colors"
                >
                  <Download size={16} />
                  Download Catalog
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Description */}
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16 p-8 bg-muted/40 border border-border rounded-2xl"
          >
            <h2 className="text-2xl font-bold text-foreground mb-4">Description</h2>
            <p className="text-muted-foreground leading-relaxed">{product.desc}</p>
          </motion.section>

          {/* Applications & Materials */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Applications */}
            <div className="p-8 bg-muted/40 border border-border rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Applications</h3>
              <ul className="space-y-3">
                {product.applications.map((app, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ChevronRight size={16} className="text-brand-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Materials */}
            <div className="p-8 bg-muted/40 border border-border rounded-2xl">
              <h3 className="text-xl font-bold text-foreground mb-6">Compatible Materials</h3>
              <ul className="space-y-3">
                {product.materials.map((material, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <ChevronRight size={16} className="text-brand-blue flex-shrink-0" />
                    <span className="text-muted-foreground">{material}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Specifications Table */}
          <motion.section
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
            <div className="overflow-x-auto border border-border rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Parameter</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Value</th>
                  </tr>
                </thead>
                <tbody>
                  {product.specifications.map((spec, idx) => (
                    <tr key={idx} className="border-b border-border hover:bg-muted/20 transition-colors">
                      <td className="px-6 py-4 text-sm text-muted-foreground font-semibold">{spec.param}</td>
                      <td className="px-6 py-4 text-sm text-foreground">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.section>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16"
          >
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Star size={20} className="text-brand-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1">Quality</p>
                  <p className="text-foreground font-semibold">Premium Grade</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <TrendingUp size={20} className="text-brand-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1">Performance</p>
                  <p className="text-foreground font-semibold">Industry Leading</p>
                </div>
              </div>
            </div>
            <div className="bg-brand-blue/10 border border-brand-blue/20 rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-brand-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mb-1">Warranty</p>
                  <p className="text-foreground font-semibold">Full Support</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Related Products */}
          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="py-12 border-t border-border"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/products/${rel.id}`}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-brand-blue/30 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <Image
                        src={rel.img}
                        alt={rel.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-foreground">{rel.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{rel.category}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </section>

      {/* Enquiry Modal */}
      {showEnquiry && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setShowEnquiry(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-background border border-border rounded-2xl p-8 max-w-md w-full"
          >
            <h3 className="text-2xl font-bold text-foreground mb-2">Send Enquiry</h3>
            <p className="text-muted-foreground mb-6">For {product.title}</p>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault()
                setShowEnquiry(false)
              }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 bg-muted border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-brand-blue transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-semibold py-3 rounded-full hover:bg-primary/90 transition-colors"
              >
                Send Enquiry
              </button>
            </form>

            <button
              onClick={() => setShowEnquiry(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close enquiry form"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-muted/40 border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">Need More Information?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our technical team is ready to assist you with any questions about this product.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-blue text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-primary/90 transition-all"
            >
              <Send size={16} />
              Contact Support
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
