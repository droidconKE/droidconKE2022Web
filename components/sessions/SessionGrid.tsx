export const sessionGrid = () => {
  return (
    <section className="w-full py-6 md:py-12 mb-0">
      <div className="l-container flex flex-wrap">
        <div className="flex flex-row lg:flex-col w-full lg:w-1/12 h-auto lg:h-64 bor border-r-0 lg:border-r border-green-200 space-y-0 lg:space-y-6 space-x-6 lg:space-x-0 items-center lg:items-start justify-center lg:justify-start py-2 lg:py-0 sticky nav-bg nav-side z-0">
          <div className="w-4/12 px-4 py-2 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-secondary dark:bg-secondary-dark">
            <h4 className="font-bold text-white dark:text-white-dark">
              06 <small className="text-px-13 font-normal">Day 1</small>
            </h4>
          </div>
          <div className="w-4/12 px-4 py-3 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-green-100 dark:bg-black-dark">
            <h4 className="font-bold dark:text-white-dark">
              07 <small className="text-px-13 font-normal">Day 2</small>
            </h4>
          </div>
          <div className="w-4/12 px-4 py-3 lg:w-full cursor-pointer rounded-tl-lg rounded-bl-lg rounded-r-lg lg:rounded-r-none bg-green-100 dark:bg-black-dark">
            <h4 className="font-bold dark:text-white-dark">
              08 <small className="text-px-13 font-normal">Day 3</small>
            </h4>
          </div>
        </div>
        <div className="w-full lg:w-11/12">
          <div className="px-0 md:px-6">
            <p>Cards here</p>
          </div>
        </div>
      </div>
    </section>
  )
}
