import { useEffect, useState } from 'react'
import Icon from '../ui/Icon'
import Reveal from '../ui/Reveal'
import CategoryRail from '../ui/CategoryRail'
import ProductGrid from '../ui/ProductGrid'
import { money } from '../../context/CartContext'

/** Counts down to a fixed offset from mount, so it always shows live digits. */
function Countdown({ hours = 72 }) {
  const [end] = useState(() => Date.now() + hours * 3600 * 1000)
  const [left, setLeft] = useState(end - Date.now())

  useEffect(() => {
    const t = setInterval(() => setLeft(Math.max(0, end - Date.now())), 1000)
    return () => clearInterval(t)
  }, [end])

  const s = Math.floor(left / 1000)
  const parts = [
    { v: Math.floor(s / 86400), u: 'd' },
    { v: Math.floor((s % 86400) / 3600), u: 'h' },
    { v: Math.floor((s % 3600) / 60), u: 'm' },
    { v: s % 60, u: 's' },
  ]

  return (
    <div className="mt-5 flex gap-2" role="timer" aria-label="Offer ends in">
      {parts.map((p) => (
        <span key={p.u} className="grid h-11 w-11 place-items-center border border-line bg-white text-[14px] font-medium text-ink">
          {p.v}
          {p.u}
        </span>
      ))}
    </div>
  )
}

/** Furniture: split hero on a circle motif, flat-sale banners, wide banner. */
export default function FurnitureHome({ store }) {
  const { hero, categories, flatSales, banner, products } = store

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f2efea]">
        <span aria-hidden="true"
          className="pointer-events-none absolute -right-[8%] -top-[30%] h-[720px] w-[720px] rounded-full bg-white/60" />
        <div className="container relative">
          <div className="grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-16">
            <div>
              <Reveal>
                <p className="text-[22px] uppercase tracking-[3px] text-ink/70 sm:text-[26px]">{hero.eyebrow}</p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-2 text-[46px] font-semibold uppercase leading-[1.02] text-ink sm:text-[64px] lg:text-[74px]">
                  {hero.title}
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-[17px] text-body">
                  {hero.priceLabel} <span className="font-semibold text-ink">{money(hero.price)}</span>
                </p>
              </Reveal>
              <Reveal delay={240}>
                <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn-line mt-7 uppercase tracking-wide">
                  {hero.cta}
                </a>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <img src={hero.image} alt="Featured armchair"
                className="mx-auto max-h-[520px] w-full object-contain animate-floatY" fetchPriority="high" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Flat sale banners */}
      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2">
          {flatSales.map((f, i) => (
            <Reveal key={f.title} delay={i * 110}>
              <article className="relative overflow-hidden bg-mist p-8 lg:p-10">
                <div className="relative z-10 max-w-[58%]">
                  <p className="text-[13px] font-medium uppercase tracking-wide text-brand">{f.kicker}</p>
                  <h3 className="mt-2 text-[30px] font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-[15px]">
                    Online promo code <span className="font-semibold text-ink underline">{f.code}</span>
                  </p>
                  <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="btn-line mt-5 bg-white uppercase tracking-wide">
                    Start Shopping
                  </a>
                  <Countdown hours={i === 0 ? 72 : 120} />
                </div>
                <img src={f.image} alt="" aria-hidden="true"
                  className="pointer-events-none absolute -right-4 bottom-0 h-[78%] w-[46%] object-contain" loading="lazy" />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div id="products">
        <ProductGrid title="Featured Items" sub="Made to order, delivered in four to six weeks." products={products} />
      </div>

      <CategoryRail title="Shop By Room" sub="Browse the range by where it goes." categories={categories} />

      {/* Wide banner */}
      <section className="section pt-0">
        <div className="container">
          <Reveal>
            <article className="relative overflow-hidden">
              <img src={banner.image} alt="" aria-hidden="true" className="h-[320px] w-full object-cover lg:h-[400px]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-transparent" />
              <div className="absolute inset-y-0 left-0 flex w-full max-w-[560px] flex-col justify-center p-9 lg:p-14">
                <h2 className="whitespace-pre-line text-[30px] font-semibold uppercase leading-tight text-white sm:text-[38px]">
                  {banner.title}
                </h2>
                <a href="#products" onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="btn mt-7 w-fit bg-white uppercase tracking-wide text-ink hover:bg-brand hover:text-white">
                  {banner.cta} <Icon name="arrowRight" className="h-4 w-4" />
                </a>
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  )
}
