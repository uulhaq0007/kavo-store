import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon, { CartMark } from '../ui/Icon'
import Reveal from '../ui/Reveal'
import { brand, trustPoints } from '../../data/stores'

const columns = [
  { title: 'Shop', links: ['New Arrivals', 'Best Sellers', 'On Sale', 'Gift Cards', 'Store Locator'] },
  { title: 'Help', links: ['Delivery & Returns', 'Track An Order', 'Size Guide', 'FAQ', 'Contact Us'] },
  { title: 'Company', links: ['About Kavo', 'Careers', 'Press', 'Sustainability', 'Terms & Privacy'] },
]

export default function Footer({ store }) {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState(null)
  const base = store.path === '/' ? '' : store.path

  const subscribe = (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg({ ok: false, text: 'Enter a valid email address.' })
      return
    }
    // Front-end only — nothing leaves the browser.
    setMsg({ ok: true, text: 'Subscribed. (Demo only.)' })
    setEmail('')
  }

  return (
    <footer className="mt-2">
      {/* Trust strip */}
      <div className="border-y border-line bg-mist">
        <div className="container grid gap-6 py-9 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((t, i) => (
            <Reveal key={t.title} delay={i * 90}>
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[16px] font-semibold text-ink">{t.title}</h3>
                  <p className="mt-0.5 text-[14px]">{t.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="bg-white">
        <div className="container grid gap-10 py-14 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to={base || '/'} className="flex items-center gap-2 text-ink">
              <span className="text-brand"><CartMark /></span>
              <span className="text-[26px] font-semibold tracking-tight">{brand.wordmark}</span>
            </Link>
            <p className="mt-4 max-w-[320px] text-[15px]">
              One shop, three counters — {store.tagline.toLowerCase()}. Packed and dispatched from Bellhaven.
            </p>

            <ul className="mt-6 space-y-2.5 text-[15px]">
              <li className="flex gap-3"><Icon name="pin" className="mt-1 h-4 w-4 shrink-0 text-brand" />{brand.address}</li>
              <li className="flex gap-3">
                <Icon name="phone" className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <a href={`tel:${brand.phone.replace(/[^+\d]/g, '')}`} className="transition hover:text-brand">{brand.phone}</a>
              </li>
              <li className="flex gap-3">
                <Icon name="mail" className="mt-1 h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${brand.email}`} className="break-all transition hover:text-brand">{brand.email}</a>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[17px] font-semibold uppercase tracking-wide text-ink">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" onClick={(e) => e.preventDefault()}
                      className="inline-block text-[15px] transition-all duration-200 hover:translate-x-1 hover:text-brand">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="border-t border-line">
          <div className="container flex flex-col items-center justify-between gap-5 py-7 lg:flex-row">
            <div>
              <h3 className="text-[18px] font-semibold uppercase tracking-wide text-ink">Join the list</h3>
              <p className="text-[14px]">One email a month. Offers, new arrivals, nothing else.</p>
            </div>

            <form onSubmit={subscribe} noValidate className="w-full max-w-[440px]">
              <div className="flex">
                <label htmlFor="nl" className="sr-only">Email address</label>
                <input id="nl" type="email" value={email}
                  onChange={(e) => { setEmail(e.target.value); setMsg(null) }}
                  placeholder="Your email address" className="field" />
                <button type="submit" className="btn-brand shrink-0 whitespace-nowrap">Subscribe</button>
              </div>
              {msg && (
                <p className={`mt-2 text-[13px] ${msg.ok ? 'text-brand' : 'text-red-500'}`}>{msg.text}</p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="container flex flex-col items-center justify-between gap-3 py-5 text-[14px] md:flex-row">
            <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
            <p className="text-body">Fashion · Grocery · Furniture</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
