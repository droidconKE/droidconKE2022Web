import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="s-container mt-32 md:mt-0">
      <div className="w-full flex flex-col md:flex-row items-center min-h-screen justify-between">
        <div>
          <h1 className="font-light text-2xl black px-0">
            WELCOME TO <br />
            <span className="font-black text-4xl md:text-5xl">
              DROIDCONKE22
            </span>
          </h1>
          <div className="flex mt-4 items-center">
            <img src="/ing/" alt="droid alt" />
            <div className="text-accent dark:text-accent-dark font-black text-base md:text-xl">
              <span>16TH - 18TH</span> <br />
              NOVEMBER
            </div>
          </div>
          <div className="mt-10 md:mt-20">
            <div className="flex flex-wrap md:space-x-4">
              <a
                href="https://bit.ly/droidconKE20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Get your ticket
              </a>
              <Link href="/sponsors">
                <a className="btn-primary mt-4 md:mt-0">Sponsor droidconke</a>
              </Link>
            </div>
            <div className="mt-6 md:mt-8">
              <a
                href="https://bit.ly/droidconKE20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                submit a talk
              </a>
            </div>
            <div className="mt-6 md:mt-16 text-xl md:text-2xl font-light">
              <h3>
                LARGEST ANDROID FOCUSED <br />
                DEVELOPER CONFERENCE IN AFRICA.
              </h3>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="rounded-xl aspect-video h-[250px] w-full md:h-[400px] md:w-[560px]"
            src="https://www.youtube.com/embed/AO-j2kLvKJw?start=5&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          />
        </div>
      </div>
    </div>
  )
}
