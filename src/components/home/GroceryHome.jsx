import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import CategoryRail from '../ui/CategoryRail'
import ProductGrid from '../ui/ProductGrid'
import { money } from '../../context/CartContext'

/** Grocery: three-column hero — category list, main promo, side offer card. */
export default function GroceryHome({ store }) {
  const { hero, sideCard, sidebarCategories, categories, promos, products } = store

  return (
    <>
      {/* Hero row */}
      <section className="pt-6">
        <div className="container grid gap-5 lg:grid-cols-12">
          {/* Category list */}
          <Reveal className="hidden lg:col-span-3 lg:block">
            <ul className="border border-line">
              {sidebarCategories.map((c) => (
                <li key={c} className="border-b border-line last:border-0">
                  <a href="#" onClick={(e) => e.preventDefault()}
                    className="group flex items-center gap-3 px-5 py-[13px] text-[15px] text-ink transition-colors hover:text-brand">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                      <Icon name="plus" className="h-3 w-3" />
                    </span>
                    {c}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Main promo */}
          <Reveal delay={80} className="lg:col-span-6">
            <div className="relative h-full min-h-[380px] overflow-hidden bg-mist">
              <img src={hero.image} alt="" aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover" fetchPriority="high" />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/65 to-transparent" />
              <div className="relative flex h-full flex-col justify-center p-8 lg:p-10">
                <p className="max-w-[300px] text-[13px] font-medium uppercase tracking-wide text-ink">{hero.eyebrow}</p>
                <h1 className="mt-3 text-[36px] font-semibold leading-tight text-ink lg:text-[46px]">{hero.title}</h1>
                <p className="mt-2 text-[28px] font-semibold text-ink">{money(hero.price)}</p>
                <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-brand btn-pill mt-6 w-fit">
                  {hero.cta} <Icon name="arrowUpRight" className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Side offer */}
          <Reveal delay={160} className="lg:col-span-3">
            <div className="relative h-full min-h-[380px] overflow-hidden bg-[#f3e7dc]">
              <div className="relative z-10 p-7">
                <span className="inline-block rounded-full bg-white px-3 py-1 text-[12px] font-medium text-ink">{sideCard.badge}</span>
                <h2 className="mt-4 whitespace-pre-line text-[21px] font-semibold leading-snug text-ink">{sideCard.title}</h2>
                <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors hover:text-brand">
                  {sideCard.cta}
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-brand text-white">
                    <Icon name="arrowRight" className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
              <img src={sideCard.image} alt="" aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[55%] w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      <CategoryRail
        title="Shop By Aisle"
        sub="Everything picked the morning it ships."
        categories={categories}
        variant="card"
      />

      {/* Weekend banners */}
      <section className="pb-4">
        <div className="container grid gap-5 md:grid-cols-2">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <article className="group relative overflow-hidden bg-[#f3e7dc]">
                <img src={p.image} alt="" aria-hidden="true"
                  className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                <div className="absolute inset-y-0 left-0 flex w-[64%] flex-col justify-center p-8">
                  <span className="w-fit rounded-full bg-brand px-3 py-1 text-[12px] font-medium text-white">{p.kicker}</span>
                  <h3 className="mt-3 whitespace-pre-line text-[24px] font-semibold leading-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-[14px] text-body">{p.sub}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[15px] font-medium text-ink transition-colors group-hover:text-brand">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand">
                      <Icon name="arrowRight" className="h-4 w-4" />
                    </span>
                    Shop Now
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="products">
        <ProductGrid title="Fresh This Morning" sub="Picked, packed and out the door the same day." products={products} compact />
      </div>
    </>
  )
}
