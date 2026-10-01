import Icon from './Icon'
import Reveal from './Reveal'

/** Section heading with optional subline and carousel arrows. */
export default function SectionHead({ title, sub, align = 'left', onPrev, onNext, action }) {
  const centered = align === 'center'

  return (
    <div className={`mb-8 flex flex-col gap-4 ${centered ? 'items-center text-center' : 'sm:flex-row sm:items-end sm:justify-between'}`}>
      <div className={centered ? 'max-w-[640px]' : ''}>
        <Reveal>
          <h2 className="sec-title">{title}</h2>
        </Reveal>
        {sub && (
          <Reveal delay={80}>
            <p className="sec-sub">{sub}</p>
          </Reveal>
        )}
      </div>

      {(onPrev || action) && (
        <Reveal delay={120}>
          <div className="flex items-center gap-3">
            {action}
            {onPrev && (
              <>
                <button type="button" onClick={onPrev} aria-label="Previous"
                  className="grid h-10 w-10 place-items-center rounded-full bg-mist text-ink transition hover:bg-brand hover:text-white">
                  <Icon name="arrowLeft" className="h-4 w-4" />
                </button>
                <button type="button" onClick={onNext} aria-label="Next"
                  className="grid h-10 w-10 place-items-center rounded-full bg-mist text-ink transition hover:bg-brand hover:text-white">
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </Reveal>
      )}
    </div>
  )
}
