import { Session } from '../../types/types'
import { hour } from '../../utils/helpers'

export const SessionDetails = ({ session }: { session: Session }) => {
  return (
    <div className="relative isolate overflow-hidden w-full rounded-4xl md:rounded-5xl bg-accent p-6 md:p-12">
      {/* halftone dots at the top of the card */}
      <span className="pointer-events-none absolute top-0 left-0 right-0 h-28 z-0 [background-image:radial-gradient(rgba(255,255,255,0.5)_1.4px,transparent_1.6px)] [background-size:10px_10px] [mask-image:linear-gradient(to_bottom,#000,transparent)] [-webkit-mask-image:linear-gradient(to_bottom,#000,transparent)]" />
      <div className="relative z-10">
        <p className="text-primary dark:text-primary font-bold uppercase tracking-wide text-sm md:text-base mb-4">
          ( Session )
        </p>
        <h1 className="font-display text-black dark:text-black text-4xl md:text-6xl leading-tight">
          {session.title}
        </h1>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-4 text-black/80 dark:text-black/80 text-sm md:text-base font-medium">
          <span>#{session.is_keynote ? 'Keynote' : session.session_level}</span>
          {session.session_format && (
            <>
              <span>·</span>
              <span>{session.session_format}</span>
            </>
          )}
          <span>·</span>
          <span>
            {hour(session.start_date_time)} - {hour(session.end_date_time)}
          </span>
          {session.rooms?.length > 0 && (
            <>
              <span>·</span>
              <span>
                {session.rooms.map((room, i) => (
                  <span key={room.id}>
                    {room.title}
                    {i + 1 < session.rooms.length ? ', ' : ''}
                  </span>
                ))}
              </span>
            </>
          )}
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          {session.session_image && (
            <img
              className="rounded-2xl w-full md:w-64 md:flex-none self-start"
              src={session.session_image}
              alt="session"
            />
          )}
          <p className="flex-1 text-black dark:text-black leading-relaxed whitespace-pre-line break-words">
            {session.description}
          </p>
        </div>
      </div>
    </div>
  )
}
