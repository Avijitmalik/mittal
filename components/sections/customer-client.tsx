'use client'

import Image from 'next/image'
import { FadeIn } from '@/components/motion'
import Link from 'next/link'

const brands = [
  { name: 'Zenso Technoforge', slug: 'zenso-technoforge', logo: '/images/customer/zenso.jpg' },
  { name: 'Singla Forging Pvt. Ltd.', slug: 'singla-forging', logo: '/images/customer/singla.jpg' },
  { name: 'PRF', slug: 'prf', logo: '/images/customer/prf.png' },
  { name: 'MT Autocraft', slug: 'mt-autocraft', logo: '/images/customer/mta_autocraft.jpg' },
  { name: 'MC', slug: 'mc', logo: '/images/customer/mc.png' },
  { name: 'JPF', slug: 'jpf', logo: '/images/customer/jpf.png' },
  { name: 'DP Industries', slug: 'dp-industries', logo: '/images/customer/dpindustries.png' },
  { name: 'BLW Engine Valves', slug: 'blw-engine-valves', logo: '/images/customer/blw.jpg' },
  { name: 'Aero Fasteners Pvt. Ltd.', slug: 'aero-fasteners', logo: '/images/customer/aero.png' },
]

export function CustomerClient() {
  return (
    <section className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <span className="text-[20px] tracking-[0.25em] uppercase text-muted-foreground font-semibold">
            some of our major client
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