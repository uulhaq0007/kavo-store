import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Icon, { CartMark } from '../ui/Icon'
import StoreSwitcher from '../ui/StoreSwitcher'
import { useCart, money } from '../../context/CartContext'
import { brand, mainNav, utilityNav } from '../../data/stores'

/**
 * One header, three arrangements. Fashion runs a coloured utility bar and a
 * dark nav strip; grocery uses pill controls on an accent nav; furniture keeps
 * the nav light with a dark announcement bar above.
 */
export default function Header({ store }) {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  const { count, total, setOpen: setCart, wishlist } = useCart()
  const { pathname } = useLocation()
  const isGrocery = store.key === 'grocery'
  const isFurniture = store.key === 'furniture'
  const base = store.path === '/' ? '' : store.path

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 200)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const to = (seg) => (seg === '.' ? base || '/' : `${base}/${seg}`)

  return (
    <header className="relative z-40">
      {/* Utility / announcement bar */}
      <div className={isFurniture ? 'bg-ink text-white' : 'bg-brand text-white'}>
        <div className="container flex h-10 items-center justify-between gap-4 text-[13px]">
          <ul className="hidden items-center gap-6 md:flex">
            {utilityNav.map((u) => (
              <li key={u}>
                <a href="#" onClick={(e) => e.preventDefault()} className="transition hover:opacity-70">{u}</a>
              </li>
            ))}
          </ul>
          <p className="truncate">{store.announce}</p>
          <div className="hidden items-center gap-5 lg:flex">
            <span>Need help? {brand.phone}</span>
          </div>
        </div>
      </div>

      {/* Search row */}
      <div className="border-b border-line bg-white">
        <div className="container flex items-center gap-5 py-4">
          <Link to={base || '/'} className="flex shrink-0 items-center gap-2 text-ink" aria-label={`${brand.name} home`}>
            <span className="text-brand"><CartMark /></span>
            <span className="text-[26px] font-semibold tracking-tight">{brand.wordmark}</span>
          </Link>

          <form
            onSubmit={(e) => e.preventDefault()}
            className={`hidden flex-1 items-center border border-line md:flex ${isGrocery ? 'rounded-full' : ''}`}
          >
            <label htmlFor="scope" className="sr-only">Search category</label>
            <select
              id="scope"
              className={`hidden shrink-0 border-r border-line bg-transparent px-4 py-3 text-[14px] text-ink outline-none lg:block ${
                isGrocery ? 'rounded-l-full' : ''
              }`}
            >
              {store.searchScopes.map((s) => <option key={s}>{s}</option>)}
            </select>
            <label htmlFor="q" className="sr-only">Search products</label>
            <input id="q" placeholder="Search here..." className="w-full bg-transparent px-4 py-3 text-[15px] text-ink outline-none" />
            <button
              type="submit"
              className={`flex shrink-0 items-center gap-2 bg-brand px-6 py-3 text-[14px] font-medium uppercase tracking-wide text-white transition hover:bg-brand-dark ${
                isGrocery ? 'm-1 rounded-full' : ''
              }`}
            >
              Search <Icon name="search" className="h-4 w-4" />
            </button>
          </form>

          <div className="ml-auto flex items-center gap-4">
            <button type="button" aria-label="Wishlist" className="relative hidden text-ink transition hover:text-brand sm:block">
              <Icon name="heart" className="h-6 w-6" />
              {wishlist.length > 0 && (
                <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-brand text-[11px] text-white">
                  {wishlist.length}
                </span>
              )}
            </button>

            {isGrocery || isFurniture ? (
              <button type="button" className="hidden items-center gap-2 rounded-full bg-mist px-5 py-2.5 text-[14px] text-ink transition hover:text-brand lg:flex">
                <Icon name="user" className="h-4 w-4" /> Login / Register
              </button>
            ) : (
              <div className="hidden text-right text-[13px] leading-tight lg:block">
                <span className="block text-body">Call us now:</span>
                <span className="block font-medium text-ink">{brand.phone}</span>
              </div>
            )}

            <button
              type="button"
              onClick={() => setCart(true)}
              aria-label={`Cart, ${count} items`}
              className={`relative flex items-center gap-2 transition ${
                isGrocery || isFurniture
                  ? 'rounded-full bg-brand px-5 py-2.5 text-white hover:bg-brand-dark'
                  : 'text-ink hover:text-brand'
              }`}
            >
              <span className="relative">
                <Icon name="cart" className="h-6 w-6" />
                <span className={`absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full text-[11px] ${
                  isGrocery || isFurniture ? 'bg-ink text-white' : 'bg-brand text-white'
                }`}>{count}</span>
              </span>
              <span className="hidden text-[14px] font-medium sm:block">{money(total)}</span>
            </button>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center border border-line text-ink lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Nav strip */}
      <div
        className={`${stuck ? 'fixed inset-x-0 top-0 z-40 shadow-card' : 'relative'} ${
          isFurniture ? 'border-b border-line bg-white' : isGrocery ? 'bg-brand' : 'bg-ink'
        }`}
      >
        <div className="container flex items-center justify-between gap-6">
          <nav className="hidden lg:block">
            <ul className="flex">
              {mainNav.map((n) => (
                <li key={n.label}>
                  <NavLink
                    to={to(n.to)}
                    end={n.to === '.'}
                    className={({ isActive }) =>
                      `block px-6 py-4 text-[15px] font-medium uppercase tracking-wide transition-colors duration-200 ${
                        isFurniture
                          ? isActive ? 'text-brand' : 'text-ink hover:text-brand'
                          : isActive ? 'text-white/60' : 'text-white hover:text-white/70'
                      }`
                    }
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-4 py-2.5 lg:flex-none">
            <StoreSwitcher store={store} />
            <span className={`hidden items-center gap-3 text-[14px] xl:flex ${isFurniture ? 'text-ink' : 'text-white'}`}>
              Get 30% discount now
              <span className={`px-3 py-1 text-[12px] font-semibold uppercase ${
                isFurniture ? 'bg-brand text-white' : 'bg-white text-brand'
              }`}>Sale</span>
            </span>
          </div>
        </div>
      </div>
      {stuck && <div className="h-[58px]" aria-hidden="true" />}

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
        />
        <aside className={`absolute right-0 top-0 flex h-full w-[300px] max-w-[86vw] flex-col bg-white transition-transform duration-400 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="flex items-center gap-2 text-ink">
              <span className="text-brand"><CartMark className="h-6 w-6" /></span>
              <span className="text-[21px] font-semibold">{brand.wordmark}</span>
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu"
              className="grid h-9 w-9 place-items-center bg-mist text-ink transition hover:bg-brand hover:text-white">
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-3">
            <ul className="divide-y divide-line">
              {mainNav.map((n) => (
                <li key={n.label}>
                  <NavLink to={to(n.to)} end={n.to === '.'}
                    className={({ isActive }) => `block py-3.5 text-[16px] font-medium uppercase tracking-wide ${isActive ? 'text-brand' : 'text-ink'}`}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-5">
              <p className="mb-3 text-[13px] uppercase tracking-wide text-body">Switch storefront</p>
              <StoreSwitcher store={store} stacked />
            </div>
          </nav>
        </aside>
      </div>
    </header>
  )
}
