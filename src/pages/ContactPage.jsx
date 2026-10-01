import { useState } from 'react'
import PageBanner from '../components/layout/PageBanner'
import Icon from '../components/ui/Icon'
import Reveal from '../components/ui/Reveal'
import { brand } from '../data/stores'

const empty = { name: '', email: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const update = (f) => (e) => {
    setForm((p) => ({ ...p, [f]: e.target.value }))
    setErrors((p) => ({ ...p, [f]: undefined }))
  }

  const submit = (e) => {
    e.preventDefault()
    const next = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (form.message.trim().length < 10) next.message = 'A little more detail helps us answer properly.'
    setErrors(next)
    if (Object.keys(next).length) return

    // Front-end only — nothing is transmitted.
    setSent(true)
    setForm(empty)
  }

  const details = [
    { icon: 'pin', title: 'Visit', lines: [brand.address] },
    { icon: 'phone', title: 'Call', lines: [brand.phone] },
    { icon: 'mail', title: 'Email', lines: [brand.email] },
  ]

  return (
    <>
      <PageBanner title="Contact" crumb="Contact" />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="sec-title">Talk To The Shop</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 max-w-[460px]">
                Questions about an order, a return or stock? Email or call during opening hours and a person will
                answer — we do not run a ticket queue.
              </p>
            </Reveal>

            <ul className="mt-9 space-y-5">
              {details.map((d, i) => (
                <Reveal key={d.title} delay={150 + i * 90}>
                  <li className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-[16px] font-semibold text-ink">{d.title}</h3>
                      {d.lines.map((l) => <p key={l} className="text-[15px]">{l}</p>)}
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={140}>
            <form onSubmit={submit} noValidate className="border border-line p-7 lg:p-9">
              <h3 className="text-[21px] font-semibold uppercase tracking-wide text-ink">Send a message</h3>

              {sent && (
                <div className="mt-5 flex items-center gap-3 bg-brand/10 px-5 py-4 text-[15px] text-ink">
                  <Icon name="check" className="h-5 w-5 shrink-0 text-brand" />
                  Thanks — captured locally. This demo has no backend, so nothing was sent.
                </div>
              )}

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="c-name" className="sr-only">Name</label>
                  <input id="c-name" placeholder="Your name" value={form.name} onChange={update('name')}
                    aria-invalid={Boolean(errors.name)} className={`field ${errors.name ? 'field-error' : ''}`} />
                  {errors.name && <p className="mt-1 text-[13px] text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="c-email" className="sr-only">Email</label>
                  <input id="c-email" type="email" placeholder="Email address" value={form.email} onChange={update('email')}
                    aria-invalid={Boolean(errors.email)} className={`field ${errors.email ? 'field-error' : ''}`} />
                  {errors.email && <p className="mt-1 text-[13px] text-red-500">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="c-subject" className="sr-only">Subject</label>
                <input id="c-subject" placeholder="Subject (optional)" value={form.subject} onChange={update('subject')} className="field" />
              </div>

              <div className="mt-4">
                <label htmlFor="c-message" className="sr-only">Message</label>
                <textarea id="c-message" rows={5} placeholder="How can we help?" value={form.message} onChange={update('message')}
                  aria-invalid={Boolean(errors.message)} className={`field resize-none ${errors.message ? 'field-error' : ''}`} />
                {errors.message && <p className="mt-1 text-[13px] text-red-500">{errors.message}</p>}
              </div>

              <button type="submit" className="btn-brand mt-6 w-full">Send Message</button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  )
}
