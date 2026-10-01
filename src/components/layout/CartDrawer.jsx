import { useEffect } from 'react'
import Icon from '../ui/Icon'
import { money, useCart } from '../../context/CartContext'

export default function CartDrawer() {
  const { items, count, total, open, setOpen, inc, dec, remove, clear } = useCart()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  return (
    <div className={`fixed inset-0 z-[60] ${open ? 'visible' : 'invisible'}`} aria-hidden={!open}>
      <div
        onClick={() => setOpen(false)}
        className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`absolute right-0 top-0 flex h-full w-[380px] max-w-[90vw] flex-col bg-white transition-transform duration-400 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-4">
          <h2 className="text-[18px] font-semibold uppercase tracking-wide text-ink">
            Cart <span className="text-body">({count})</span>
          </h2>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close cart"
            className="grid h-9 w-9 place-items-center bg-mist text-ink transition hover:bg-brand hover:text-white">
            <Icon name="close" className="h-4 w-4" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-mist text-body">
              <Icon name="cart" className="h-7 w-7" />
            </span>
            <p className="text-[15px]">Your cart is empty.</p>
            <button type="button" onClick={() => setOpen(false)} className="btn-brand">Continue Shopping</button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-line overflow-y-auto px-6">
              {items.map((i) => (
                <li key={i.name} className="flex gap-4 py-4">
                  <img src={i.image} alt={i.name} className="h-20 w-16 shrink-0 object-cover" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[15px] font-medium text-ink">{i.name}</p>
                    <p className="text-[13px] text-body">{i.cat}</p>

                    <div className="mt-2 flex items-center gap-3">
                      <div className="flex items-center border border-line">
                        <button type="button" onClick={() => dec(i.name)} aria-label={`Decrease ${i.name}`}
                          className="grid h-7 w-7 place-items-center text-ink transition hover:bg-brand hover:text-white">
                          <Icon name="minus" className="h-3 w-3" />
                        </button>
                        <span className="w-8 text-center text-[14px] text-ink">{i.qty}</span>
                        <button type="button" onClick={() => inc(i.name)} aria-label={`Increase ${i.name}`}
                          className="grid h-7 w-7 place-items-center text-ink transition hover:bg-brand hover:text-white">
                          <Icon name="plus" className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="text-[15px] font-semibold text-ink">{money(i.price * i.qty)}</span>
                    </div>
                  </div>
                  <button type="button" onClick={() => remove(i.name)} aria-label={`Remove ${i.name}`}
                    className="self-start text-body transition hover:text-brand">
                    <Icon name="close" className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>

            <div className="border-t border-line px-6 py-5">
              <div className="flex items-center justify-between text-[17px]">
                <span className="text-body">Subtotal</span>
                <span className="font-semibold text-ink">{money(total)}</span>
              </div>
              <p className="mt-1 text-[13px] text-body">Shipping and taxes calculated at checkout.</p>
              <button type="button" className="btn-brand mt-4 w-full">Checkout</button>
              <button type="button" onClick={clear} className="mt-2 w-full py-2 text-[14px] text-body transition hover:text-brand">
                Clear cart
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
