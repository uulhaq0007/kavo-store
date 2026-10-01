import { Link } from 'react-router-dom'
import Icon from '../ui/Icon'
import { useStore } from './StoreLayout'

export default function PageBanner({ title, crumb }) {
  const store = useStore()
  const base = store.path === '/' ? '' : store.path

  return (
    <section className="bg-mist py-12 lg:py-16">
      <div className="container text-center">
        <h1 className="text-[30px] font-semibold uppercase tracking-wide text-ink sm:text-[38px]">{title}</h1>
        <nav aria-label="Breadcrumb" className="mt-3">
          <ol className="flex items-center justify-center gap-2 text-[15px]">
            <li><Link to={base || '/'} className="transition hover:text-brand">Home</Link></li>
            <li aria-hidden="true"><Icon name="arrowRight" className="h-3.5 w-3.5" /></li>
            <li className="text-ink">{crumb}</li>
          </ol>
        </nav>
      </div>
    </section>
  )
}
