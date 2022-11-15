import { Session } from '../../types/types'
import { hour } from '../../utils/helpers'
import { StarIcon } from '../shared/StarIcon'
// import { SessionDetailSkeleton } from './skeletons/SessionDetailSkeleton'

export const SessionDetails = ({ session }: { session: Session }) => {
  return (
    <div className="w-full flex-wrap content-start items-start lg:w-5/12 px-0 lg:px-6 flex border-r-0 lg:border-r border-l-0 lg:border-l border-green-200">
      <div className="w-full flex flex-wrap py-4 items-center">
        <h4 className="lowercase font-black text-2xl md:text-3xl text-primary dark:text-white-dark mr-0 md:mr-10">
          Session
        </h4>
        <p className="text-px-14 gray w-full">
          <span className="mr-2 md:ml-4 lg:ml-0">Level:</span>{' '}
          <span className="uppercase text-xs text-white dark:text-dark text-px-10 bg-black dark:bg-white-dark py-0.5 px-2 rounded-full">
            #{session.is_keynote ? 'Keynote' : session.session_level}
          </span>
        </p>
      </div>
      <div className="w-full flex items-start flex-col">
        <div className="pt-4 md:pt-6">
          {session.session_image && (
            <img
              className="rounded-lg h-auto md:h-56"
              src={session.session_image}
              alt="session"
            />
          )}
        </div>
        <h4 className="text-accent text-sm dark:text-accent-dark mt-4">
          {session.session_format}
        </h4>
        <h4 className="text-light text-sm dark:text-lighter-dark mt-2">
          {' '}
          {hour(session.start_date_time)} - {hour(session.end_date_time)}{' '}
          |&nbsp;
          {session.rooms.map((room, i) => (
            <span key={room.id}>
              {room.title} {i + 1 < session.rooms.length ? ',' : ''}
            </span>
          ))}
        </h4>
        <p className=" text-xl md:text-2xl mt-1 font-bold">{session.title}</p>
        <h6 className="text-primary dark:text-white-dark font-bold mt-4 md:mt-10 w-full">
          Session Description:
        </h6>
        <p className="p gray mt-2">{session.description}</p>

        <div className="w-full justify-center md:justify-start flex flex-col mt-4 md:mt-10 mb-4 lg:mb-16">
          <StarIcon isStar={false} session={session} />
        </div>
      </div>
      {/* <SessionDetailSkeleton /> */}
    </div>
  )
}
