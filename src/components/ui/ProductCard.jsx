import Icon from './Icon'
import Reveal from './Reveal'
import { money, useCart } from '../../context/CartContext'

/**
 * Product tile shared by all three storefronts. The accent comes from CSS
 * variables, so the same component renders red, green or brown per store.
 */
export default function ProductCard({ product, delay = 0, compact = false }) {
  const { add, wishlist, toggleWish } = useCart()
  const wished = wishlist.includes(product.name)
  const off = product.was ? Math.round((1 - product.price / product.was) * 100) : null

  const actions = [
    { name: 'heart', label: wished ? 'Remove from wishlist' : 'Add to wishlist', on: () => toggleWish(product.name), active: wished },
    { name: 'compare', label: 'Compare', on: () => {} },
    { name: 'eye', label: 'Quick view', on: () => {} },
  ]

  return (
    <Reveal delay={delay} className="h-full">
      <article className="group flex h-full flex-col border border-line bg-white transition-all duration-300 hover:border-brand hover:shadow-card">
        <div className="relative overflow-hidden bg-mist">
          <img
            src={product.image}
            alt={product.name}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
              compact ? 'h-[190px]' : 'h-[260px]'
            }`}
            loading="lazy"
          />

          {(product.badge || off) && (
            <span className="absolute left-3 top-3 flex gap-1.5">
              {product.badge && (
                <span className="bg-brand px-2.5 py-1 text-[12px] font-medium uppercase tracking-wide text-white">
                  {product.badge}
                </span>
              )}
              {off && (
                <span className="bg-ink px-2.5 py-1 text-[12px] font-medium text-white">−{off}%</span>
              )}
            </span>
          )}

          {/* Hover rail */}
          <div className="absolute right-3 top-3 flex translate-x-12 flex-col gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            {actions.map((a) => (
              <button
                key={a.name}
                type="button"
                onClick={a.on}
                aria-label={a.label}
                aria-pressed={a.name === 'heart' ? wished : undefined}
                className={`grid h-9 w-9 place-items-center border border-line bg-white transition-colors duration-200 hover:border-brand hover:bg-brand hover:text-white ${
                  a.active ? 'border-brand bg-brand text-white' : 'text-ink'
                }`}
              >
                <Icon name={a.name} className="h-4 w-4" />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => add(product)}
            className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3 text-[14px] font-medium uppercase tracking-wide text-white transition-transform duration-300 group-hover:translate-y-0 hover:bg-brand"
          >
            Add To Cart
          </button>
        </div>

        <div className="flex flex-1 flex-col p-4 text-center">
          <span className="text-[13px] text-body">{product.cat}</span>
          <h3 className="mt-1 text-[16px] font-medium text-ink transition-colors duration-200 group-hover:text-brand">
            {product.name}
          </h3>

          <div className="mt-1.5 flex justify-center gap-0.5 text-brand">
            {Array.from({ length: 5 }).map((_, i) => (
              <Icon key={i} name="star" className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>

          <p className="mt-auto pt-3 flex items-baseline justify-center gap-2">
            <span className="text-[18px] font-semibold text-ink">{money(product.price)}</span>
            {product.was && <span className="text-[14px] text-body line-through">{money(product.was)}</span>}
          </p>
        </div>
      </article>
    </Reveal>
  )
}
