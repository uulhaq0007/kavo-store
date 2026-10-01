import { useRef } from 'react'
import Reveal from './Reveal'
import SectionHead from './SectionHead'

/**
 * Horizontally scrollable category strip. Arrows nudge the scroll container
 * rather than driving an index, so it stays usable with touch and keyboard.
 */
export default function CategoryRail({ title, sub, categories, variant = 'tile' }) {
  const rail = useRef(null)
  const nudge = (dir) => rail.current?.scrollBy({ left: dir * 320, behavior: 'smooth' })

  return (
    <section className="section">
      <div className="container">
        <SectionHead title={title} sub={sub} onPrev={() => nudge(-1)} onNext={() => nudge(1)} />

        <div ref={rail} className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 70} className="shrink-0 snap-start">
              {variant === 'card' ? (
                <a href="#" onClick={(e) => e.preventDefault()}
                  className="group flex w-[200px] flex-col items-center border border-line bg-white p-5 text-center transition-all duration-300 hover:border-brand hover:shadow-card">
                  <span className="grid h-[120px] w-[120px] place-items-center overflow-hidden rounded-full bg-mist">
                    <img src={c.image} alt="" aria-hidden="true"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </span>
                  <h3 className="mt-4 text-[16px] font-medium text-ink transition-colors group-hover:text-brand">{c.name}</h3>
                  <p className="text-[13px] text-body">{c.count} items</p>
                </a>
              ) : (
                <a href="#" onClick={(e) => e.preventDefault()}
                  className="group block w-[220px] bg-mist p-3 transition-colors duration-300 hover:bg-brand/10">
                  <span className="block overflow-hidden">
                    <img src={c.image} alt="" aria-hidden="true"
                      className="h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </span>
                  <h3 className="mt-3 pb-1 text-center text-[15px] font-medium uppercase tracking-wide text-ink transition-colors group-hover:text-brand">
                    {c.name}
                  </h3>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
