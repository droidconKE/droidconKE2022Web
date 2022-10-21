export const SessionGridCard = ({ schedules }: { schedules: any }) => {
  return (
    <>
      <div className="lg:grid gap-4 grid-cols-3">
        {Object.keys(schedules)?.map((key) => (
          <div key={key}>
            {/* component */}
            {schedules[key]?.map((schedule) => (
              <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-lighter dark:bg-black-dark mb-6">
                <img
                  className="object-cover md:object-cover"
                  src="images/testara.png"
                  alt=""
                />
                <div className="m-4">
                  <h3 className="text-light text-sm mt-4">
                    @ {schedule.start_time} AM |{' '}
                    {schedule.rooms?.map((venue) => (
                      <span className="rooms">{venue.title}</span>
                    ))}
                  </h3>
                  <p className="text-sm mt-2 h-10 font-bold dark:text-white-dark">
                    {schedule.title}
                  </p>
                  <div className="flex justify-between mt-4 h-8">
                    <div className="flex items-start space-x-4">
                      {!schedule.is_serviceSession}
                      {schedule.speakers?.map((speaker) => (
                        <div className="w-9 h-9">
                          <img
                            className="rounded-full border border-accent shadow-sm"
                            src={speaker.avatar}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                    <div className="w-full flex items-center justify-end">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="27.895"
                          height="27"
                        >
                          <g data-name="Layer 2">
                            <g data-name="Layer 1">
                              <path
                                data-name="Rectangle 593"
                                fill="none"
                                d="M.474 0h27v27h-27z"
                              />
                              <path
                                data-name="Path 114"
                                d="M26.603 10.459a.634.634 0 0 0-.537-.435l-7.971-1.16-3.572-7.236a.639.639 0 0 0-1.149 0L9.801 8.864l-7.987 1.16a.639.639 0 0 0-.35 1.074l5.77 5.656-.032.188-1.311 7.767a.628.628 0 0 0 .258.628.618.618 0 0 0 .677.048l7.144-3.76 7.144 3.763a.639.639 0 0 0 .892-.677l-1.342-7.957 5.774-5.635a.628.628 0 0 0 .165-.66Z"
                                fill="none"
                              />
                              <path
                                data-name="Path 115"
                                d="M27.307 10.234a1.37 1.37 0 0 0-1.117-.945l-7.6-1.1-3.4-6.892a1.386 1.386 0 0 0-2.482 0l-3.4 6.892-7.6 1.1a1.38 1.38 0 0 0-1.117.945 1.364 1.364 0 0 0 .349 1.418l5.49 5.361-1.291 7.568a1.386 1.386 0 0 0 2.009 1.461l6.8-3.545 6.795 3.545a1.418 1.418 0 0 0 .65.161 1.364 1.364 0 0 0 .811-.263 1.391 1.391 0 0 0 .537-1.359l-1.273-7.568 5.5-5.371a1.364 1.364 0 0 0 .339-1.408Zm-6.644 6.521 1.343 7.955a.639.639 0 0 1-.929.677l-7.145-3.759-7.144 3.76a.618.618 0 0 1-.677-.048.628.628 0 0 1-.22-.628l1.329-7.769.032-.188-5.8-5.635a.639.639 0 0 1 .355-1.074l7.987-1.16 3.579-7.258a.639.639 0 0 1 1.147 0l3.572 7.235 7.987 1.16a.639.639 0 0 1 .355 1.074Z"
                                fill="#000ceb"
                                stroke="#000ceb"
                              />
                            </g>
                          </g>
                        </svg>
                      </span>
                    </div>
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
