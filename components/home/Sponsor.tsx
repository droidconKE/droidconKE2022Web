import Link from 'next/link'

export const Sponsor = () => {
  return (
    <section className="w-full bg-black-dark">
      <div className="s-container pb-6 md:pb-16 md:py-20 py-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full flex justify-center">
            <div className="text-left md:text-center">
              <h2 className="title dark:text-accent lowercase">
                <span>sponsor</span>{' '}
                <span className="font-medium"> droidconke23</span>
              </h2>
              <div className="w-full">
                <h6 className="mt-4 text-white text-xl md:text-2xl">
                  To earn a spot here/Meet our partners By sponsoring
                  {/* droidconke23 you support and bring together{' '}
                  <br className="hidden md:block" />
                  the Android developer community. */}
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
