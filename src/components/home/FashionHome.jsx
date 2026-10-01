import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import CategoryRail from '../ui/CategoryRail'
import ProductGrid from '../ui/ProductGrid'
import { money } from '../../context/CartContext'
import { posts } from '../../data/stores'

/** Fashion: full-bleed lifestyle hero, category rail, three promo tiles. */
export default function FashionHome({ store }) {
  const { hero, categories, promos, products } = store

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f4efec]">
        <div className="container relative">
          <div className="grid items-center gap-8 py-10 lg:grid-cols-2 lg:py-0">
            <div className="order-2 lg:order-1 lg:py-16">
              <img
                src={hero.image}
                alt="Autumn collection lookbook"
                className="mx-auto max-h-[520px] w-full object-contain"
                fetchPriority="high"
              />
            </div>

            <div className="order-1 lg:order-2 lg:pl-10">
              <Reveal>
                <p className="text-[14px] font-medium uppercase tracking-[2px] text-brand">{hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-4 whitespace-pre-line text-[38px] font-semibold uppercase leading-[1.05] text-ink sm:text-[52px] lg:text-[62px]">
                  {hero.title}
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="text-[16px] text-body">{hero.priceLabel}</span>
                  <span className="text-[34px] font-semibold text-brand">{money(hero.price)}</span>
                </p>
              </Reveal>
              <Reveal delay={240}>
                <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-brand mt-7">
                  {hero.cta}
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CategoryRail
        title="Best For Your Categories"
        sub={`${categories.length} categories across ${categories.reduce((n, c) => n + c.count, 0)} products`}
        categories={categories}
      />

      {/* Promo tiles */}
      <section className="pb-4">
        <div className="container grid gap-5 md:grid-cols-3">
          {promos.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group relative overflow-hidden bg-mist">
                <img src={p.image} alt="" aria-hidden="true"
                  className="h-[240px] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
                <div className="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-center p-7">
                  <p className="text-[13px] font-medium text-brand">{p.kicker}</p>
                  <h3 className="mt-2 whitespace-pre-line text-[21px] font-semibold leading-tight text-ink">{p.title}</h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors group-hover:text-brand">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-brand/15 text-brand">
                      <Icon name="plus" className="h-3.5 w-3.5" />
                    </span>
                    View Collections
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="products">
        <ProductGrid title="Trending This Week" sub="Restocked every Thursday morning." products={products} />
      </div>

      {/* Editorial */}
      <section className="section bg-mist">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <article className="group h-full bg-white p-7 transition-shadow duration-300 hover:shadow-card">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-brand">{p.cat}</span>
                  <h3 className="mt-3 text-[19px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] text-body">{p.date}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
