import { Organizer } from '../../types/types'

function Team({ organizers }: { organizers: Organizer[] }) {
  return (
    <section className="l-container pb-6 md:pb-12">
      <div>
        <div className="items-center flex flex-wrap">
          <div className="w-full px-0 md:px-24 mr-auto mb-4 md:mb-0 pb-10 lg:pb-16">
            <div className="w-full flex flex-wrap grid sm:grid-cols-4 md:grid-cols-5 grid-cols-3 gap-2 lg:gap-8 mb-14 md:mb-0">
              {organizers.map((org) => (
                <a
                  key={org.created_at}
                  target="_blank"
                  href={org.link}
                  className="text-center flex justify-center flex-wrap"
                  rel="noreferrer"
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 p-2 md:p-4 flex justify-center bg-green-c-2 rounded">
                    <img
                      className="w-full p-0 flex rounded border-2 border-green-500"
                      src={org.photo === null ? '/images/icon.png' : org.photo}
                      alt={org.name}
                    />
                  </div>
                  <p className="text-px-13 font-bold black mt-2 w-full">
                    {org.name}
                  </p>
                  <p className="text-px-12 gray">{org.tagline}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
