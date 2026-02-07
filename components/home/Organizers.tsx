import { Organizer } from '../../types/types'

function Organizers({ organizers }: { organizers: Organizer[] }) {
  return (
    <section className="bg-lighter dark:bg-black-dark">
      <div className="s-container pb-6 md:pb-12">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 ml-auto">
            <div className="md:pr-12 text-left mt-3 md:mt-12">
              <h2 className="title lowercase dark:text-accent-dark">
                <span>community</span>{' '}
                <span className="font-medium"> partners;</span>
              </h2>
            </div>
            <div className="mt-4 md:mt-8 mb-10 md:mb-0">
              <h4 className="title font-medium text-secondary md:text-3xl dark:text-secondary mt-6 md:mt-10 lowercase">
                <span>Android254</span>
              </h4>
              <p className="mt-4 text-base md:text-xl">
                Founded in 2015, Android254 is the largest and most active
                Android Developer community in Sub-Saharan Africa. With a
                steadfast commitment to fostering knowledge-sharing and skill
                development, we host monthly meetups that consistently draw over
                70 passionate attendees eager to delve into the latest Android
                development topics. <br />
                <br />
                Having orchestrated over 100 physical meetups to date, the
                Android254 community has flourished, boasting a membership of
                over 8,600 Android developers. Through these engaging
                gatherings, members have honed their skills, expanded their
                networks, and unlocked new career opportunities locally and
                abroad.
                <br />
                <br />
                Witnessing the transformative impact of our community,
                Android254 has observed members securing coveted positions
                across the globe while others have embraced opportunities beyond
                the borders of Africa. What began as a grassroots movement in
                Kenya has burgeoned into a regional phenomenon, attracting
                attendees and members from diverse Sub-Saharan African
                countries.
              </p>
            </div>
          </div>
          <div className="w-full md:w-6/12 mr-auto pt-4 sm:mt-10 md:pt-0 justify-end">
            <div className="mt-4 md:mt-8 mb-10 md:mb-0">
              <h4 className="title font-medium text-secondary md:text-3xl dark:text-secondary mt-6 md:mt-10 lowercase">
                <span>Kotlin Kenya</span>
              </h4>
              <p className="mt-4 text-base md:text-xl">
                Kotlin Kenya, founded in 2017, is the official Kotlin User group
                community in Kenya. With a membership of over 4,190 enthusiasts,
                Kotlin Kenya is the go-to hub for all things related to the
                dynamic Kotlin Language.
                <br />
                <br />
                Kotlin Kenya has evolved into a thriving ecosystem, boasting the
                largest and most active user group in Africa. Over the editions,
                Kotlin Kenya has curated and hosted more than 70 events, each
                attracting a diverse array of developers eager to explore the
                endless possibilities of Kotlin. The monthly meetups
                consistently draw over 70 attendees and serve as vibrant
                gatherings where knowledge is shared, connections are forged,
                and enthusiasm for Kotlin is palpable. The Kotlin Kenya and
                Android254 meetups happen at the same time and day.
                <br />
                <br />
                In a testament to its commitment to continuous learning and
                collaboration, Kotlin Kenya proudly partners with JetBrains to
                bring KotlinConf Global editions to Nairobi. These sessions,
                along with other planned engagements with the JetBrains team,
                further enrich our community with invaluable insights and
                opportunities.
              </p>
            </div>
          </div>
          <div className="w-full md:p-10 sm:p-0  grid md:grid-cols-7 grid-cols-3 gap-4 lg:gap-8">
            {organizers.map((org) => (
              <a
                key={org.created_at}
                target="_blank"
                href={org.link}
                className="w-24 h-24 p-3 flex rounded border border-green-200 bg-white dark:bg-white-dark justify-center"
                rel="noreferrer"
              >
                <img
                  className="p-0 w-full object-scale-down"
                  src={org.photo === null ? '/images/icon.png' : org.photo}
                  alt={org.name}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Organizers
