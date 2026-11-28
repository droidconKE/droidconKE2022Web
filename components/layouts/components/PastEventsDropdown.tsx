import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import useComponentVisible from '../../../hooks/useComponentVisible'

export const PastEventsDropdown = () => {
  // One open state, and the outside-click ref wraps the button as well as the
  // menu, so a click on the button is never "outside" and always toggles. Two
  // flags used to disagree after a click elsewhere, and the next click on the
  // button did nothing.
  const {
    ref,
    isComponentVisible: open,
    setIsComponentVisible: setOpen,
  } = useComponentVisible(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const router = useRouter()

  // Any navigation closes it, from one of its links or the back button. Next
  // signals the start as soon as a link is clicked, so the menu does not wait
  // for the next page to load.
  useEffect(() => {
    const close = () => setOpen(false)
    router.events.on('routeChangeStart', close)
    return () => router.events.off('routeChangeStart', close)
  }, [router.events, setOpen])

  // Escape closes it and gives focus back to the button.
  useEffect(() => {
    if (!open) return undefined
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      buttonRef.current?.focus()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, setOpen])

  return (
    <div ref={ref} className="relative inline-block text-left">
      <div>
        <button
          ref={buttonRef}
          type="button"
          className="inline-flex w-full items-center justify-center gap-x-1.5 px-3"
          id="menu-button"
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={
              router.pathname.includes('past-events')
                ? 'active-link -ml-3'
                : 'link -ml-3'
            }
          >
            Past Events
          </span>
          <svg
            className={`-ml-5 h-5 w-5  ${
              router.pathname.includes('past-events')
                ? 'text-primary dark:text-accent'
                : 'text-black dark:text-white'
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div
          className="md:absolute md:right-0 z-10 mt-2 mb-2 ml-2 md:-mt-1 w-max min-w-[10rem] whitespace-nowrap origin-top-right rounded-md bg-lighter dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/2022"
              className={
                router.pathname === '/past-events/2022' ? 'active-link' : 'link'
              }
            >
              droidconKe 2022
            </Link>
          </div>
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/2023"
              className={
                router.pathname === '/past-events/2023' ? 'active-link' : 'link'
              }
            >
              droidconKe 2023
            </Link>
          </div>
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/2024"
              className={
                router.pathname === '/past-events/2024' ? 'active-link' : 'link'
              }
            >
              droidconKe 2024
            </Link>
          </div>
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/2025"
              className={
                router.pathname === '/past-events/2025' ? 'active-link' : 'link'
              }
            >
              droidconKe 2025
            </Link>
          </div>
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/2026"
              className={
                router.pathname === '/past-events/2026' ? 'active-link' : 'link'
              }
            >
              droidconKe 2026
            </Link>
          </div>
          <div className="py-1 text-sm" role="none">
            <Link
              href="/past-events/beyond-stacks-2026"
              className={
                router.pathname === '/past-events/beyond-stacks-2026'
                  ? 'active-link'
                  : 'link'
              }
            >
              Beyond Stacks 2026
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
