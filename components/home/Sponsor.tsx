import Link from 'next/link'

export const Sponsor = () => {
  return (
    <section className="w-full bg-black dark:bg-black-dark">
      <div className="s-container pb-6 md:pb-12 md:py-20 py-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full flex justify-center">
            <div className="text-left md:text-center">
              <h2 className="title-w lowercase">
                <span>sponsor</span>{' '}
                <span className="font-medium"> droidconke22</span>
              </h2>
              <div className="w-full">
                <h6 className="mt-4 text-lighter dark:text-lighter-dark text-xl md:text-2xl">
                  By sponsoring droidconke22 you support and bring together the
                  Android developer community.
                </h6>
              </div>
              <div className="mt-5 md:mt-12 mb-10 md:mb-0">
                <Link href="/sponsors">
                  <a className="btn-secondary">sponsor droidconke</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
