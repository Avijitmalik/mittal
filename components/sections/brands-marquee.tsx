'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/motion'

const brands = [
  { name: 'Baker', slug: 'baker', logo: '/images/autho/BAKER.png' },
  { name: 'Bosch', slug: 'bosch', logo: '/images/autho/bosch.png' },
  { name: 'CDBP Tools', slug: 'cdbp-tools', logo: '/images/autho/cdbp.png' },
  { name: 'Conact', slug: 'conact', logo: '/images/autho/conact.png' },
  {name:  'Korloy', slug:'korloy', logo:'/images/autho/korloy.jpg'},
  { name: 'CUMI', slug: 'cumi', logo: '/images/autho/cumi.jpg' },
  { name: 'Deskar', slug: 'deskar', logo: '/images/autho/deskar.webp' },
  { name: 'Fenner', slug: 'fenner', logo: '/images/autho/fenner.jpg' },
  // { name: 'Hea-Rok', slug: 'hea-rok', logo: '/images/autho/hea-rok.png' },
  { name: 'Insize', slug: 'insize', logo: '/images/autho/insize.jpg' },
  { name: 'IPOL', slug: 'ipol', logo: '/images/autho/ipol.jpg' },
  { name: 'JK Super Drive', slug: 'jk-super-drive', logo: '/images/autho/super drive.jpg' },
  { name: 'MEBA', slug: 'meba', logo: '/images/autho/meba.jpg' },
  { name: 'Mitutoyo', slug: 'mitutoyo', logo: '/images/autho/mitutoyo.jpg' },
  { name: 'Size Control', slug: 'size-control', logo: '/images/autho/sizecontrol.png' },
  { name: 'Taparia', slug: 'taparia', logo: '/images/autho/taparia.png' },
  { name: 'Tooling Solutions', slug: 'tooling-solutions', logo: '/images/autho/tooling sol.jpg' },
  { name: 'Vikas Machine Tools', slug: 'vikas-machine-tools', logo: '/images/autho/vikash.webp' },
  { name: 'WolCut', slug: 'wolcut', logo: '/images/autho/wolcut.png' },
  { name: 'XPS', slug: 'xps', logo: '/images/autho/xps.png' },
  { name: 'Xtra-Power', slug: 'xtra-power', logo: '/images/autho/xtra-power.png' },
]
export function BrandsMarquee() {
  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
            Authorised Brands & Major Customers We Carry
          </span>
        </FadeIn>

        {/* 4-column responsive grid layout with 1:1 aspect ratio cards */}
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
                  className="object-contain opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
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