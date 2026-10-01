import { useState } from 'react'
import { useStore } from '../components/layout/StoreLayout'
import ProductCard from '../components/ui/ProductCard'
import PageBanner from '../components/layout/PageBanner'
import Icon from '../components/ui/Icon'

export default function ShopPage() {
  const store = useStore()
  const [sort, setSort] = useState('featured')

  const sorted = [...store.products].sort((a, b) => {
    if (sort === 'low') return a.price - b.price
    if (sort === 'high') return b.price - a.price
    if (sort === 'name') return a.name.localeCompare(b.name)
    return 0
  })

  return (
    <>
      <PageBanner title="Shop" crumb="Shop" />
      <section className="section">
        <div className="container">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border border-line px-5 py-3">
            <p className="text-[15px]">
              Showing <span className="font-medium text-ink">{sorted.length}</span> products
            </p>
            <label className="flex items-center gap-2 text-[15px]">
              <Icon name="filter" className="h-4 w-4 text-brand" />
              <span className="sr-only">Sort products</span>
              <select value={sort} onChange={(e) => setSort(e.target.value)}
                className="border border-line bg-white px-3 py-2 text-[14px] text-ink outline-none focus:border-brand">
                <option value="featured">Featured</option>
                <option value="low">Price: low to high</option>
                <option value="high">Price: high to low</option>
                <option value="name">Name: A–Z</option>
              </select>
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sorted.map((p, i) => <ProductCard key={p.name} product={p} delay={i * 60} />)}
          </div>
        </div>
      </section>
    </>
  )
}
