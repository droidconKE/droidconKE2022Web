export const NoSessions = () => {
  return (
    <div className="l-container flex flex-wrap">
      <div className="w-2/12 h-20 items-center justify-center text-right hidden lg:flex" />
      <div className="w-full lg:w-10/12 flex bg-white dark:bg-black-dark rounded-lg">
        <div className="h-auto w-full lg:h-24 shadow rounded-lg px-4 py-3 flex flex-col justify-center">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12">
              <div className="mb-2">
                Seems there are no seesions here from the filter or saved
                session !
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
