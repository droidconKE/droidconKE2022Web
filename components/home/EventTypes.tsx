export const EventTypes = () => {
  return (
    <section className="py-12 md:py-10 bg-lighter dark:bg-black-dark">
      <div className="s-container">
        <div className="flex justify-center py-2">
          <h2 className="title-lower dark:text-accent-dark">Event Types</h2>
        </div>
        <div className="w-full flex flex-wrap mt-4 md:mt-12 dark:text-white-dark">
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="px-12 py-8 md:px-14 md:py-10 h-32 md:h-44 bg-secondary dark:bg-secondary-dark rounded-l-xl">
              <img src="/images/events/communitty.png" alt="community" />
            </div>
            <h4 className="mt-2 font-bold">Community Day</h4>
          </div>
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="px-[55px] md:px-[70px] py-8 h-32 md:h-44 bg-primary dark:bg-primaryy-dark md:rounded-none rounded-r-xl">
              <img src="/images/events/workshop.png" alt="workshop" />
            </div>
            <h4 className="mt-2 font-bold">Workshops</h4>
          </div>
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="px-12 py-10 md:px-16 md:py-12 h-32 md:h-44 bg-accent dark:bg-accent-dark md:rounded-none rounded-l-xl">
              <img src="/images/events/interview.png" alt="interview" />
            </div>
            <h4 className="mt-2 font-bold">Interviews</h4>
          </div>
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="p-10 md:px-12 md:py-12 h-32 md:h-44 bg-black dark:bg-dark md:rounded-none rounded-r-xl">
              <img src="/images/events/panels.png" alt="panels" />
            </div>
            <h4 className="mt-2 font-bold">Panels</h4>
          </div>
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="px-12 py-6 md:px-16 md:py-10 h-32 md:h-44 bg-accent-2 dark:bg-accent-2-dark md:rounded-none rounded-l-xl">
              <img src="/images/events/party.png" alt="party" />
            </div>
            <h4 className="mt-2 font-bold">Networking Bash</h4>
          </div>
          <div className="w-1/2 md:w-1/6 mt-10 md:mt-0">
            <div className="px-12 py-8 md:px-16 md:py-10 h-32 md:h-44 bg-secondary dark:bg-secondary-dark rounded-r-xl">
              <img src="/images/events/hackbounty.png" alt="hack bounty" />
            </div>
            <h4 className="mt-2 font-bold">HackBounty</h4>
          </div>
        </div>
      </div>
    </section>
  )
}
