'use client'

import Image from 'next/image'
import Link from 'next/link'
import { SiteLayout } from '@/components/site-layout'
import { FadeIn } from '@/components/motion'
import { ArrowRight, CheckCircle2, Download, MessageSquare } from 'lucide-react'

export const industries = [
  {
    name: 'Aerospace',
    tagline: 'Flight-critical precision, every time.',
    desc: 'Aerospace components demand the tightest tolerances and absolute reliability. Our tooling solutions help manufacturers achieve the micron-level accuracy required for flight-critical parts, with cutting tools optimised for titanium, Inconel, and aluminium alloys.',
    challenges: ['Tight dimensional tolerances (±0.005mm)', 'Exotic material machinability', 'Surface finish requirements', 'Tool wear in difficult alloys'],
    solutions: ['Carbide drills with TiAlN coating', 'High-feed endmills for titanium', 'Thread mills for aircraft fasteners', 'CBN inserts for nickel alloys'],
    img: '/images/produtmateriallogo/Solid-Carbide-Drill.jpg',
    pdfUrl: '/pdf/korloy/KorloyAerospaceIndustryCatalog.pdf',
  },
  {
    name: 'Automotive',
    tagline: 'High-volume, zero-defect production.',
    desc: 'The automotive industry demands consistent, high-volume output with zero defects. Our tooling selection supports engine block machining, transmission components, brake systems, and chassis parts across all automotive sub-sectors.',
    challenges: ['High-volume consistency', 'Cycle time reduction', 'Multi-material machining', 'Cost per part optimisation'],
    solutions: ['Indexable insert tooling for volume', 'PCD inserts for aluminium engines', 'Thread taps for engine blocks', 'Modular boring systems'],
    img: '/images/produtmateriallogo/CCMT-Turning-Insert.png',
    pdfUrl: '/pdf/korloy/KorloyAutomotiveIndustryCatalog.pdf',
  },
  {
    name: 'Precision Engineering',
    tagline: 'Where every micron matters.',
    desc: 'Precision engineering workshops demand tooling that consistently delivers superior surface finish and dimensional accuracy. From jigs and fixtures to complex multi-axis components, our product range is tailored for the most demanding precision work.',
    challenges: ['Sub-micron surface finish', 'Complex geometries', 'Small-batch versatility', 'Setup time reduction'],
    solutions: ['Fine grain carbide endmills', 'Anti-vibration boring bars', 'Precision collet systems', 'Digital measuring instruments'],
    img: '/images/produtmateriallogo/Digital-Micrometer.png',
    pdfUrl: '/pdf/korloy/KorloyHardToCutMaterialCuttingSolution.pdf',
  },
  {
    name: 'Metal Fabrication',
    tagline: 'Structural strength meets precise cutting.',
    desc: 'Metal fabrication encompasses a wide range of cutting, drilling, and forming operations on structural steel, sheet metal, and plates. Our product range covers the full breadth of cutting tools required across fabrication shops.',
    challenges: ['High material removal rates', 'Structural steel hardness', 'Large workpiece handling', 'Versatile application needs'],
    solutions: ['Bandsaw blades for structural profiles', 'Circular saw blades for bars', 'Heavy-duty drills for thick plate', 'Cutting fluids for long tool life'],
    img: '/images/produtmateriallogo/Bi-Metal-Bandsaw-Blade.png',
    pdfUrl: '/pdf/korloy/KorloyHoleMakingSolution.pdf',
  },
  {
    name: 'Tool & Die Manufacturing',
    tagline: 'Tooling for the toolmakers.',
    desc: 'Die and mould manufacturers work with hardened steels, carbide, and complex 3D profiles. We supply specialist tooling for graphite machining, hard milling, EDM electrode machining, and precision cavity work.',
    challenges: ['Hard material machining (HRC 60+)', '3D profile accuracy', 'Graphite electrode machining', 'Extended tool life in mould steel'],
    solutions: ['Ball nose endmills for 3D milling', 'Carbide endmills for hard milling', 'Graphite-specific cutters', 'CBN grinding wheels for hardened steel'],
    img: '/images/produtmateriallogo/Carbide-Endmill-4-Flute.jpg',
    pdfUrl: '/pdf/korloy/KorloyMoldDieSolution.pdf',
  },
  {
    name: 'Heavy Engineering',
    tagline: 'Scale without compromise.',
    desc: 'Heavy engineering applications involve large-scale components, heavy cuts, and demanding machining environments. Our heavy-duty tooling solutions are designed to perform under extreme conditions with maximum material removal rates.',
    challenges: ['Large workpiece machining', 'Heavy interrupted cuts', 'Long overhang requirements', 'Rigidity and vibration control'],
    solutions: ['Heavy-duty face milling cutters', 'Damped boring bars for deep holes', 'Large diameter drills', 'Ceramic inserts for cast iron'],
    img: '/images/produtmateriallogo/Boring-Bar-Set.png',
    pdfUrl: '/pdf/korloy/KorloyPipeIndustryCatalog.pdf',
  },
]

export default function IndustriesPage() {
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
              Industries We Serve
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground text-balance mb-6 max-w-4xl">
              Tooling Solutions
              <br />
              <span className="text-muted-foreground">Across Every Sector</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Our deep sector expertise enables us to recommend precisely the right tooling for your specific
              application — whether you machine titanium aero-parts or structural steel fabrications.
            </p>
          </FadeIn>

          {/* Industry chips */}
          <FadeIn delay={0.2} className="flex flex-wrap gap-3 mt-10">
            {industries.map((ind) => (
              <a
                key={ind.name}
                href={`#${ind.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-semibold px-5 py-2 rounded-full border border-border hover:border-brand-blue/40 hover:bg-primary/5 hover:text-brand-blue transition-all"
              >
                {ind.name}
              </a>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* Industries alternating sections */}
      <section className="bg-background">
        {industries.map((ind, i) => (
          <div
            key={ind.name}
            id={ind.name.toLowerCase().replace(/\s+/g, '-')}
            className={`py-24 ${i % 2 === 1 ? 'bg-muted/40' : 'bg-background'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Image */}
                <FadeIn direction={i % 2 === 1 ? 'right' : 'left'}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:[direction:ltr]">
                    <Image
                      src={ind.img}
                      alt={ind.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <span className="text-xs tracking-widest uppercase text-white/60 block mb-1">Industry</span>
                      <span className="text-2xl font-bold text-white">{ind.name}</span>
                    </div>
                  </div>
                </FadeIn>

                {/* Content */}
                <FadeIn direction={i % 2 === 1 ? 'left' : 'right'} delay={0.1} className="lg:[direction:ltr]">
                  <span className="text-[11px] tracking-[0.25em] uppercase text-brand-blue font-semibold block mb-3">
                    {ind.tagline}
                  </span>
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                    {ind.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8">{ind.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-muted-foreground font-semibold mb-3">
                        Key Challenges
                      </h4>
                      <ul className="space-y-2">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs tracking-widest uppercase text-brand-blue font-semibold mb-3">
                        Our Solutions
                      </h4>
                      <ul className="space-y-2">
                        {ind.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 size={14} className="text-brand-blue mt-0.5 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Cleaned Actions Bar */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={ind.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center gap-1.5 text-[12px] font-semibold px-4 py-2.5 bg-brand-blue text-white rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <Download size={13} />
                      Download Catalog
                    </a>

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-1.5 text-[12px] font-semibold px-4 py-2.5 bg-brand-blue text-white rounded-full hover:bg-primary/90 transition-colors"
                    >
                      <MessageSquare size={13} />
                      Enquire
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-blue dark:bg-[#1a2d4a]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-balance mb-4">
              Serving Your Industry with Precision
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Not sure which tooling solution is right for your application? Our technical experts
              are ready to guide you to the perfect solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="flex items-center gap-2 bg-white text-brand-blue text-sm font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-all">
                Talk to an Expert
              </Link>
              <Link href="/products" className="flex items-center gap-2 border border-white/20 text-white text-sm font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                Browse Products
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </SiteLayout>
  )
}