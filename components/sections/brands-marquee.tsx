'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/motion'

const brands = [
  {name:  'Korloy', slug:'korloy', logo:'/images/autho/korloy.jpg'},
  { name :'YG-1', slug:'yg-1', logo: '/images/autho/yg_1_india_logo.jpg' },
  { name: 'IPOL', slug: 'ipol', logo: '/images/autho/ipol.jpg' },
  { name: 'Tooling Solutions', slug: 'tooling-solutions', logo: '/images/autho/toolingsol.jpg' },
  { name: 'Sizecontrol', slug: 'sizecontrol', logo: '/images/autho/sizecontrol.png' },
  { name: 'MEBA', slug: 'meba', logo: '/images/autho/meba.jpg' },
  { name: 'Vikas Machine Tools', slug: 'vikas-machine-tools', logo: '/images/autho/vikash.webp' },
  { name: 'Conact', slug: 'conact', logo: '/images/autho/conact.png' },
  { name: 'XPS', slug: 'xps', logo: '/images/autho/xps.png' },
  { name: 'WolCut', slug: 'wolcut', logo: '/images/autho/wolcut.png' },
  { name: 'JK Super Drive', slug: 'jk-super-drive', logo: '/images/autho/superdrive.jpg' },

]
export function BrandsMarquee() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-[20px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
            Authorised Distributors
          </span>
        </FadeIn>

        {/* 4-column responsive grid layout with 1:1 aspect ratio cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <Link
              key={`${brand.slug}-${i}`}
              href={`/catalog/${brand.slug}`}
              className="relative w-full aspect-square flex items-center justify-center p-4 rounded-lg border border-border/50  transition-all group overflow-hidden"
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