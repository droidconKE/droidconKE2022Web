import { SaveSession } from './SaveSession'
// import { SessionDetailSkeleton } from './skeletons/SessionDetailSkeleton'

export const SessionDetails = () => {
  return (
    <div className="w-full flex-wrap content-start items-start lg:w-5/12 px-0 lg:px-6 flex border-r-0 lg:border-r border-l-0 lg:border-l border-green-200">
      <div className="w-full flex py-4 items-center">
        <h4 className="lowercase font-black text-2xl md:text-3xl text-primary dark:text-white-dark mr-0 md:mr-10">
          Session
        </h4>
        <p className="text-px-14 gray w-full">
          <span className="mr-2 ml-4 lg:ml-0">Level:</span>{' '}
          <span className="uppercase text-xs text-white dark:text-dark text-px-10 bg-black dark:bg-white-dark py-0.5 px-2 rounded-full">
            #beginner
          </span>
        </p>
      </div>
      <div className="w-full flex items-start flex-col">
        <div className="pt-4 md:pt-6">
          <img
            className="rounded-lg h-auto md:h-56"
            src="http://droidcon-erp.herokuapp.com/upload/sessions/4IUDxED2zy.%20png"
            alt="session"
          />
        </div>
        <h4 className="text-light text-sm dark:text-lighter-dark mt-4">
          {' '}
          10:30AM - 11:00AM | Room 1
        </h4>
        <p className=" text-xl md:text-2xl mt-1 font-bold">
          Compose Beyond Material Design
        </p>
        <h6 className="text-primary dark:text-white-dark font-bold mt-4 md:mt-10 w-full">
          Session Description:
        </h6>
        <p className="p gray mt-2">
          Been in the tech industry for over 20 years. Am passionate about
          developer communities, motivating people and building successful
        </p>

        <div className="w-full justify-center md:justify-start flex flex-col mt-4 md:mt-10 mb-4 lg:mb-16">
          <SaveSession />
        </div>
      </div>
      {/* <SessionDetailSkeleton /> */}
    </div>
  )
}
