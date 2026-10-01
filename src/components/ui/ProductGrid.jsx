import { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

const TABS = [
  { key: 'all', label: 'All Items' },
  { key: 'sale', label: 'On Sale' },
  { key: 'new', label: 'New Arrivals' },
  { key: 'best', label: 'Best Sellers' },
]

/** Tabbed product grid used on all three storefronts. */
export default function ProductGrid({ title, sub, products, align = 'center', compact = false }) {
  const [tab, setTab] = useState('all')

  const shown = useMemo(() => {
    if (tab === 'sale') return products.filter((p) => p.was)
    if (tab === 'new') return products.filter((p) => p.badge === 'New')
    if (tab === 'best') return products.filter((p) => p.badge === 'Best' || !p.badge)
    return products
  }, [products, tab])

  return (
    <section className="section">
      <div className="container">
        <SectionHead
          title={title}
          sub={sub}
          align={align}
          action={
            <div className="flex flex-wrap gap-1">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  aria-pressed={tab === t.key}
                  className={`px-4 py-2 text-[14px] font-medium uppercase tracking-wide transition-colors duration-200 ${
                    tab === t.key ? 'bg-brand text-white' : 'bg-mist text-ink hover:text-brand'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          }
        />

        {shown.length === 0 ? (
          <Reveal>
            <p className="py-14 text-center text-[15px]">Nothing in this filter right now.</p>
          </Reveal>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {shown.map((p, i) => (
              <ProductCard key={p.name} product={p} delay={i * 70} compact={compact} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
