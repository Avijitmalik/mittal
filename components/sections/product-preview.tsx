'use client'

import React from 'react'
import Image from 'next/image'

const authobrands = [
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

const eminentbrands = [
  { name: 'Korloy', slug: 'korloy', logo: '/images/autho/korloy.jpg' },
  { name: 'YG-1', slug: 'yg-1', logo: '/images/autho/yg_1_india_logo.jpg' },
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

const majorbrands = [
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

export function ProductPreview() {
  return (
    <div className="py-12 bg-background space-y-12">
      
      {/* 1. Eminent Brands */}
      <section className="space-y-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-semibold text-muted-foreground uppercase">
            Authorised Brands   
        </h2>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...eminentbrands, ...eminentbrands].map((brand, i) => (
              <div key={i} className="px-3 flex shrink-0 items-center">
                <div className="relative w-40 h-24 bg-white rounded-xl border border-border/80 shadow-sm flex items-center justify-center p-3">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill
                    sizes="160px"
                    className="object-contain p-3" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Authorised Brands */}
      <section className="space-y-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-muted-foreground uppercase">
           Eminent Brands  
          </h2>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused]">
            {[...majorbrands, ...majorbrands].map((brand, i) => (
              <div key={i} className="px-3 flex shrink-0 items-center">
                <div className="relative w-40 h-24 bg-white rounded-xl border border-border/80 shadow-sm flex items-center justify-center p-3">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill
                    sizes="160px"
                    className="object-contain p-3" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
       </section>
             {/* 3. Major Brands */}
        <section className="space-y-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-muted-foreground uppercase">
        Major Brands
          </h2>
        </div>
        <div className="relative overflow-hidden cursor-pointer select-none">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <div className="flex w-max animate-marquee active:[animation-play-state:paused]">
            {[...authobrands, ...authobrands].map((brand, i) => (
              <div key={i} className="px-3 flex shrink-0 items-center">
                <div className="relative w-40 h-24 bg-white rounded-xl border border-border/80 shadow-sm flex items-center justify-center p-3">
                  <Image 
                    src={brand.logo} 
                    alt={brand.name} 
                    fill
                    sizes="160px"
                    className="object-contain p-3" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}