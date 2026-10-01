import PageBanner from '../components/layout/PageBanner'
import Reveal from '../components/ui/Reveal'
import { useStore } from '../components/layout/StoreLayout'
import { posts } from '../data/stores'

export default function BlogPage() {
  const store = useStore()
  return (
    <>
      <PageBanner title="Blog" crumb="Blog" />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <article className="group h-full border border-line transition-all duration-300 hover:border-brand hover:shadow-card">
                <img src={store.categories[i % store.categories.length].image} alt="" aria-hidden="true"
                  className="h-[210px] w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <span className="text-[13px] font-medium uppercase tracking-wide text-brand">{p.cat}</span>
                  <h2 className="mt-2 text-[19px] font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-[14px]">{p.date}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
