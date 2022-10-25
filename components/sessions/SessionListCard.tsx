import { StarIcon } from '../shared/StarIcon'

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str
  }
  return `${str.slice(0, num)}...`
}

const SessionListCard = ({ schedules }: { schedules: any }) => {
  return (
    <>
      <div className="space-y-10 md:pl-4">
        {Object.keys(schedules)?.map((key) => (
          <div key={key}>
            {schedules[key]?.map((schedule) => (
              <div
                key={schedule.id}
                className="shadow-md px-2 h-auto rounded-md py-4 justify-center content-center bg-white dark:bg-black-dark mb-6"
              >
                <div className="flex flex-row items-start">
                  <div className="flex flex-col w-2/12 justify-start items-center">
                    <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
                      {schedule.start_time}
                    </h4>
                    <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
                      AM
                    </h4>
                  </div>
                  <div className="w-9/12 content-center justify-center">
                    <h4 className="font-bold md:text-xl dark:text-white">
                      {schedule.title}
                    </h4>
                    <p className="font-normal text-sm md:text-base py-2">
                      {truncateString(schedule.description, 100)}
                    </p>
                    <p className="text-xs md:text-sm font-light">
                      <span>
                        {schedule.start_time}-{schedule.end_time}
                      </span>{' '}
                      |{' '}
                      {schedule.rooms?.map((venue) => (
                        <span className="rooms">{venue.title}</span>
                      ))}
                    </p>
                  </div>
                  <div className="flex w-1/12 justify-center items-start md:pr-4">
                    <StarIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .rooms ~ .rooms::before {
            content: ', ';
          }
        `}
      </style>
    </>
  )
}

export default SessionListCard
