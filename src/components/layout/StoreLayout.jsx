import { useEffect } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import CartDrawer from './CartDrawer'
import BackToTop from './BackToTop'

/**
 * Wraps a storefront. The `data-store` attribute drives the CSS variables that
 * repaint the entire palette, so one component tree serves all three verticals.
 */
export default function StoreLayout({ store }) {
  useEffect(() => {
    document.title = `${store.label} — Kavo`
  }, [store])

  return (
    <div data-store={store.key} className="flex min-h-screen flex-col bg-white">
      <Header store={store} />
      <main className="flex-1">
        <Outlet context={{ store }} />
      </main>
      <Footer store={store} />
      <CartDrawer />
      <BackToTop />
    </div>
  )
}

export function useStore() {
  return useOutletContext().store
}
