import PageBanner from '../components/layout/PageBanner'
import Reveal from '../components/ui/Reveal'
import { useStore } from '../components/layout/StoreLayout'
import { brand } from '../data/stores'

export default function AboutPage() {
  const store = useStore()
  return (
    <>
      <PageBanner title="About" crumb="About" />
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <Reveal>
            <img src={store.categories[0].image} alt="" aria-hidden="true"
              className="h-[380px] w-full object-cover" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <h2 className="sec-title">One Shop, Three Counters</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5">
                {brand.name} began as a single shopfront in Bellhaven and grew sideways rather than upwards — adding a
                counter at a time as we found suppliers we trusted. Today that means {store.tagline.toLowerCase()},
                each run by people who buy the stock themselves.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4">
                Nothing is drop-shipped. If it is listed here, it is on a shelf in the warehouse and someone has
                checked it. That is the whole model, and it is why our returns rate sits under three percent.
              </p>
            </Reveal>
            <Reveal delay={230}>
              <dl className="mt-9 grid grid-cols-3 gap-6 border-t border-line pt-7">
                {[['12', 'Years trading'], ['3', 'Storefronts'], ['<3%', 'Returns rate']].map(([v, l]) => (
                  <div key={l}>
                    <dt className="sr-only">{l}</dt>
                    <dd>
                      <span className="block text-[30px] font-semibold text-brand">{v}</span>
                      <span className="block text-[14px]">{l}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
