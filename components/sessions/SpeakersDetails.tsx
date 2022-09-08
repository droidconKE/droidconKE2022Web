// import { SpeakerSkeleton } from './skeletons/SpeakerSkeleton'

export const SpeakersDetails = () => {
  return (
    <div className="w-full flex-wrap lg:w-4/12 flex border-r-0 pr-0 lg:pr-4 mb-6 md:mb-0">
      <div className="w-full py-4">
        <h4 className="w-full lowercase font-black text-2xl md:text-3xl dark:text-white-dark">
          Speaker
        </h4>
      </div>
      <div className="w-full flex items-start text-center">
        <div className="w-28 h-28 md:w-36 md:h-36 md:pr-4 flex-none bg-green-c-2 rounded">
          <img
            className="w-full p-0 rounded-lg border-2 border-green-500"
            src="https://sessionize.com/image/09c1-400o400o2-cf-9587-423b-bd2e-415e6757286c.b33d8d6e-1f94-4765-a797-255efc34390d.jpg"
            alt="speaker.name"
          />
        </div>
        <div className="w-full text-left px-2 py-1 lg:py-4">
          <div className="md:text-xl text-primary dark:text-white-dark font-bold">
            Frank Tamre
          </div>
          <p className="text-xs md:text-sm text-light dark:text-lighter-dark py-1">
            COO/Chief Innovation Officer Droidcon Global
          </p>
          <p className="pt-1">
            <a
              href="https://twitter.com/franktamzi"
              target="_blank"
              rel="noreferrer"
              className="text-primary dark:text-white-dark text-sm lowercase"
            >
              <i className="fa fa-twitter" /> @franktamzi
            </a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <h4 className="font-bold mt-5 text-xl md:mt-4 dark:text-white-dark">
          Bio:
        </h4>
        <p className="mt-2 md:mt-4 mb-4 lg:mb-16">
          Been in the tech industry for over 20 years. Am passionate about
          developer communities, motivating people and building successful
          organizations. Proven track record in product development, business
          development, and nurturing mission critical strategic partner
          relationships. Have lived and worked in Germany for 10 years. Fluent
          in German and English.
        </p>
      </div>
      {/* <SpeakerSkeleton /> */}
    </div>
  )
}
