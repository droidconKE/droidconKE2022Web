import Link from 'next/link'

export const Sponsor = () => {
  return (
    <section className="w-full bg-black dark:bg-black-dark">
      <div className="s-container mt-20 md:mt-24 mb-20 md:py-20 py-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-6/12 justify-start sm:pr-6">
            <div className="md:pr-12 text-left">
              <h3 className="title-w text-white dark:text-white-dark pt-10 md:pt-0">
                SPONSOR DROIDCONKE
              </h3>
              <h6 className="mt-4 text-lighter dark:text-lighter-dark pr-0 md:pr-20">
                PROMOTE YOUR BRAND | DEMONSTRATE THOUGHT LEADERSHIP | MEET &
                ENGAGE WITH DEVELOPERS.
              </h6>
              <div className="mt-5 md:mt-12 mb-10 md:mb-0">
                <Link href="/sponsors">
                  <a className="btn-secondary">sponsor droidconke</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12 md:p-24 md:mr-24 mb-14 md:mb-0 justify-end md:absolute md:right-0">
            <img
              alt="sponsors img"
              className="w-full sponsor-img"
              src="/images/sponsor.png"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
