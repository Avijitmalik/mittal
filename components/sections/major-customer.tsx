'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/motion'
import Link from 'next/link'

const brands = [
  { name: 'Deskar', slug: 'deskar', logo: '/images/autho/deskar.webp' },
  { name: 'CDBP Tools', slug: 'cdbp-tools', logo: '/images/autho/cdbp.png' },
  { name: 'Insize', slug: 'insize', logo: '/images/autho/insize.jpg' },
  { name: 'Mitutoyo', slug: 'mitutoyo', logo: '/images/autho/mitutoyo.jpg' },
  { name: 'Xtra-Power', slug: 'xtra-power', logo: '/images/autho/xtra-power.png' },
  { name: 'Bosch', slug: 'bosch', logo: '/images/autho/bosch.png' },
  { name: 'Baker', slug: 'baker', logo: '/images/autho/BAKER.png' },
  { name: 'CUMI', slug: 'cumi', logo: '/images/autho/cumi.jpg' },
  { name: 'Taparia', slug: 'taparia', logo: '/images/autho/taparia.png' },
  { name: 'Fenner', slug: 'fenner', logo: '/images/autho/fenner.jpg' },     
]

export function MajorCustomer() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-[20px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
            some of our eminent clients 
          </span>
        </FadeIn>

        {/* Responsive grid layout with 1:1 aspect ratio cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <Link
              key={`${brand.slug}-${i}`}
              href={`/catalog/${brand.slug}`}
              className="relative w-full aspect-square flex items-center justify-center p-4 bg-background/50 rounded-lg border border-border/50 hover:border-brand-blue/50 transition-all group overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity filter"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}