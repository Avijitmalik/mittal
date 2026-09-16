import { notFound } from 'next/navigation'
import { SiteLayout } from '@/components/site-layout'
import { products } from '@/lib/products-data'
import { ProductDetailClient } from './product-detail-client'

export async function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const product = products.find((p) => p.id === parseInt(id))

  if (!product) {
    notFound()
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <SiteLayout>
      <ProductDetailClient product={product} related={related} />
    </SiteLayout>
  )
}
