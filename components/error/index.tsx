import Link from 'next/link'
import { ErrorInterface } from '../../types/types'

const ErrorComponent = ({ message, status }: ErrorInterface) => {
  // Short codes (404, 500) render huge; word statuses (OFFLINE) render smaller.
  const isShort = String(status).length <= 4

  return (
    <div className="s-container min-h-[75vh] flex flex-col items-center justify-center text-center py-16 md:py-24">
      <p className="text-primary dark:text-primary font-bold uppercase tracking-wide text-sm md:text-base mb-3">
        ( Error )
      </p>
      <h1
        className={`relative font-display text-black dark:text-white-dark leading-none break-words max-w-full ${
          isShort ? 'text-8xl md:text-[11rem]' : 'text-5xl md:text-8xl'
        }`}
      >
        {status}
        {/* halftone accent behind the code */}
        <span className="pointer-events-none absolute -top-4 -right-6 w-24 h-24 [background-image:radial-gradient(#00FF4F_1.5px,transparent_1.7px)] [background-size:10px_10px] [mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)] [-webkit-mask-image:radial-gradient(circle_at_top_right,#000,transparent_70%)]" />
      </h1>
      <p className="mt-6 text-base md:text-lg text-black dark:text-white-dark max-w-md">
        {message}
      </p>
      <Link href="/" className="btn-primary uppercase mt-8">
        Head back home
      </Link>
    </div>
  )
}

export default ErrorComponent
