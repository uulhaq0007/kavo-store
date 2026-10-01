import { Link } from 'react-router-dom'
import { storeList } from '../data/stores'

export default function NotFoundPage() {
  return (
    <div data-store="fashion" className="grid min-h-screen place-items-center bg-white px-6 text-center">
      <div>
        <p className="text-[110px] font-semibold leading-none text-mist sm:text-[150px]">404</p>
        <h1 className="-mt-6 text-[26px] font-semibold uppercase tracking-wide text-ink sm:text-[32px]">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-[420px]">
          That address does not match anything in the shop. Pick a storefront to get back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {storeList.map((s) => (
            <Link key={s.key} to={s.path} data-store={s.key} className="btn-brand">{s.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
