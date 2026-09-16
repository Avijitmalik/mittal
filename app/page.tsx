import { SiteLayout } from '@/components/site-layout'
import { HeroSection } from '@/components/sections/hero-section'
import { AboutPreview } from '@/components/sections/about-preview'
import { ProductCategories } from '@/components/sections/product-categories'
import { BrandsMarquee } from '@/components/sections/brands-marquee'
import { IndustriesPreview } from '@/components/sections/industries-preview'
import { WhyChooseUs } from '@/components/sections/why-choose-us'
import { StatsSection } from '@/components/sections/stats-section'
import { CatalogCTA } from '@/components/sections/catalog-cta'
import { ContactPreview } from '@/components/sections/contact-preview'
import { MajorCustomer } from '@/components/sections/major-customer'

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutPreview />
      <ProductCategories />
      <BrandsMarquee />
      <MajorCustomer/>
      <IndustriesPreview />
      <WhyChooseUs />
      <StatsSection />
      <CatalogCTA />
      <ContactPreview />
    </SiteLayout>
  )
}
