import { Link } from 'react-router-dom'
import { storeList } from '../../data/stores'

/**
 * Lets you jump between the three storefronts. A real deployment would run one
 * vertical per domain — this exists so all three designs are reachable in one build.
 */
export default function StoreSwitcher({ store, stacked = false }) {
  if (stacked) {
    return (
      <ul className="space-y-2">
        {storeList.map((s) => (
          <li key={s.key}>
            <Link
              to={s.path}
              data-store={s.key}
              className={`flex items-center justify-between border px-4 py-2.5 text-[15px] transition-colors ${
                s.key === store.key ? 'border-brand bg-brand text-white' : 'border-line text-ink hover:border-brand'
              }`}
            >
              {s.label}
              <span className={`h-3 w-3 rounded-full ${s.key === store.key ? 'bg-white' : 'bg-brand'}`} />
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className="flex items-center gap-1 rounded-full bg-black/20 p-1">
      {storeList.map((s) => (
        <Link
          key={s.key}
          to={s.path}
          data-store={s.key}
          aria-current={s.key === store.key ? 'page' : undefined}
          title={`${s.label} storefront`}
          className={`rounded-full px-3 py-1 text-[12px] font-medium uppercase tracking-wide transition-colors ${
            s.key === store.key ? 'bg-white text-ink shadow-sm' : 'text-current opacity-90 hover:opacity-100'
          }`}
        >
          {s.label}
        </Link>
      ))}
    </div>
  )
}
