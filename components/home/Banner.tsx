import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
// Type-only — erased at compile time, so the runtime stays lazily imported.
import type { Application } from '@splinetool/runtime'
import { TICKETS_LINK } from '../../constant/constants'
// CFP is closed for 2026 — restore alongside the SUBMIT A TALK button next year.
// import { CFS_LINK } from '../../constant/constants'

/**
 * The hero cube is a Spline scene fetched from Spline's servers at runtime, so
 * it is client-only, lazily imported, and must never block first paint. It is
 * skipped entirely for reduced-motion users and where WebGL is unavailable.
 */
const SPLINE_SCENE =
  'https://prod.spline.design/3-9N8U0eD6vQIZ6B/scene.splinecode'

const useCubeEnabled = () => {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    const probe = document.createElement('canvas')
    const hasWebGL = Boolean(
      probe.getContext('webgl') || probe.getContext('experimental-webgl')
    )
    setEnabled(!reduced && hasWebGL)
  }, [])

  return enabled
}

/**
 * The scene's camera does not auto-fit its canvas: at zoom 1 the cube is drawn
 * at its authored size and anything past the canvas edge is simply clipped.
 * Zooming in proportion to the canvas width keeps the whole cube visible and
 * its size consistent across breakpoints. Lower REFERENCE = larger cube.
 */
const CUBE_ZOOM_REFERENCE = 720

/**
 * The scene is a real Rubik's cube: 27 separate meshes all named `Cube`, nested
 * Column > Row > 1x1/1x2/1x3. So there is no single object to spin — the motion
 * is a choreographed sequence across the cubies, authored `start-once` /
 * `runMode: Once`, which is why it stops after one 30s pass.
 *
 * Replaying therefore means re-firing the choreography on whichever objects
 * carry the `start` event, alternating direction because a `Once` transition
 * will not re-fire forward once it has landed on its end state.
 */
const CUBE_INTRO_MS = 30000

const SplineCube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    let app: Application | null = null
    let cancelled = false
    let observer: ResizeObserver | null = null
    let visibility: IntersectionObserver | null = null
    let loop: ReturnType<typeof setInterval> | null = null
    let onScreen = true
    let targets: string[] = []
    // Starts false: the scene plays itself forward on load, so the first
    // re-fire has to run backwards. Sending it forward again would be a no-op
    // against the end state it is already parked on.
    let forward = false

    const fit = () => {
      const canvas = canvasRef.current
      if (!app || !canvas) return
      app.setZoom(canvas.clientWidth / CUBE_ZOOM_REFERENCE)
    }

    // Every object carrying the `start` event, resolved from the live scene —
    // with 27 identically-named cubies there is nothing safe to hardcode.
    const resolveTargets = () => {
      if (!app) return
      const events = app.getSplineEvents() ?? {}
      const startKey = Object.keys(events).find(
        (key) => key.toLowerCase() === 'start'
      )
      targets = startKey ? Object.keys(events[startKey]) : []
    }

    // Replay the choreography, alternating direction so a `Once` transition
    // does not simply sit on its end state.
    const replay = () => {
      if (!app || !onScreen || document.hidden) return
      // Re-resolve if empty: the runtime registers its event handlers slightly
      // after load() settles, so resolving only once can race and come back
      // empty, leaving nothing to fire at.
      if (!targets.length) resolveTargets()
      if (!targets.length) return
      targets.forEach((target) => {
        if (forward) app?.emitEvent('start', target)
        else app?.emitEventReverse('start', target)
      })
      forward = !forward
    }

    import('@splinetool/runtime')
      .then(async (runtime) => {
        if (cancelled || !canvasRef.current) return
        app = new runtime.Application(canvasRef.current)
        await app.load(SPLINE_SCENE)
        if (cancelled || !canvasRef.current) return
        fit()
        observer = new ResizeObserver(fit)
        observer.observe(canvasRef.current)

        // Deliberately NOT calling app.stop() off-screen: it freezes events and
        // the transition state machine, and play() brings the cube back frozen
        // on its end state. Visibility only gates our own rotation, so the
        // renderer does keep running off-screen — see REDESIGN-PLAN.md.
        visibility = new IntersectionObserver(([entry]) => {
          onScreen = entry.isIntersecting
        })
        visibility.observe(canvasRef.current)

        // Resolved again inside replay() — see the race noted there.
        resolveTargets()

        // Re-fire once the authored pass has had time to finish, then keep it
        // going on that same cadence.
        loop = setInterval(replay, CUBE_INTRO_MS)
      })
      .catch(() => {
        // Scene unreachable (offline, or the Spline project moved) — the hero
        // still reads fine without it, so fail quietly.
      })

    return () => {
      cancelled = true
      if (loop) clearInterval(loop)
      observer?.disconnect()
      visibility?.disconnect()
      app?.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full" />
}

export const Banner = () => {
  const cubeEnabled = useCubeEnabled()

  return (
    <div className="w-full flex flex-col items-center pt-10 md:pt-12 min-h-[calc(100vh-80px)] justify-center">
      <div className="w-full flex flex-col justify-center items-center pb-8 md:pb-12">
        <div className="max-w-5xl w-full px-4 flex flex-col items-center text-center">
          {/* Hero lockup — the cube sits behind the wordmark */}
          {/* `isolate` scopes the z-10 below to this container. Without it the
              headline ties with the fixed nav (also z-10) and, being later in
              the DOM, paints over it on scroll. */}
          <div className="relative isolate w-full flex items-center justify-center mb-16 md:mb-24">
            {/* The scene's camera frames the cube to the canvas box, so the box
                must stay square — a short, wide one crops the cube. */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[58%] w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] pointer-events-none"
            >
              {cubeEnabled && <SplineCube />}
            </div>

            <img
              src="/images/new-design/droidcon_icon.png"
              alt=""
              aria-hidden="true"
              className="absolute right-0 -top-4 md:-top-10 w-16 md:w-28 lg:w-36 object-contain pointer-events-none select-none"
            />

            <h1 className="relative z-10 font-display leading-none py-8 md:py-16 text-5xl md:text-7xl lg:text-[110px] bg-[linear-gradient(90deg,#0055FF_0%,#8FC4F5_28%,#D6F5E8_50%,#FF8AEE_74%,#FF57E9_100%)] bg-clip-text text-transparent">
              Beyond Stacks
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-700 dark:text-accent-dark text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mb-8 leading-snug mx-auto text-center">
            Sub-Saharan Africa&apos;s premier mobile development conference.
            <br />2 Days 1 Ticket.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-12 w-full justify-center">
            <a
              href={TICKETS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary whitespace-nowrap"
            >
              GET YOUR TICKET
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H16V12M16 6L6 16"
                />
              </svg>
            </a>
            {/* CFP closed for 2026 — restore next year.
            <a
              href={CFS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              SUBMIT A TALK
            </a>
            */}
            <Link href="/sponsors" className="btn-accent whitespace-nowrap">
              SPONSOR DROIDCONKE
            </Link>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="w-full l-container pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 border-y border-gray-300 dark:border-gray-700 text-left">
          <div className="py-6 px-4 md:px-6 border-r border-b md:border-b-0 border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 font-semibold">
              DATE
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-white uppercase">
              05-06 NOV 2026
            </p>
          </div>
          <div className="py-6 px-4 md:px-6 border-b md:border-b-0 md:border-r border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 font-semibold">
              LOCATION
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-white uppercase">
              NAIROBI, KENYA
            </p>
          </div>
          <div className="py-6 px-4 md:px-6 border-r border-gray-300 dark:border-gray-700">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 font-semibold">
              EDITION
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-white uppercase">
              7TH &middot; ANNUAL
            </p>
          </div>
          <div className="py-6 px-4 md:px-6">
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase mb-2 font-semibold">
              CONFERENCES
            </p>
            <p className="font-bold text-sm md:text-base text-black dark:text-white uppercase">
              DROIDCON &middot; FLUTTERCON
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
