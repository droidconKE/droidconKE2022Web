import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="s-container">
      <div className="w-full flex flex-col md:flex-row items-center min-h-screen justify-between">
        <div className="mt-32 md:mt-0">
          <h1 className="font-light text-2xl black px-0">
            WELCOME TO <br />
            <span className="font-black text-4xl md:text-5xl">
              DROIDCONKE22
            </span>
          </h1>
          <div className="flex flex-wrap mt-8 md:mt-4 items-center">
            <img
              className="h-[50px] md:h-[63px] mr-3"
              src="/images/hashtag.png"
              alt="droid alt"
            />
            <div className="text-accent dark:text-accent-dark font-black text-base md:text-xl -mt-1">
              <span>16TH - 18TH</span> <br />
              NOVEMBER
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <div className="flex flex-wrap md:space-x-4">
              <a
                href="https://bit.ly/droidconKE20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mr-4 md:mr-0"
              >
                Get your ticket
              </a>
              <Link href="/sponsors">
                <a className="btn-primary mt-3 md:mt-0">Sponsor droidconke</a>
              </Link>
            </div>
            <div className="mt-4 md:mt-8">
              <a
                href="https://bit.ly/droidconKE20"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                submit a talk
              </a>
            </div>
            <div className="mt-14 md:mt-16 text-xl md:text-2xl font-light">
              <h3>
                LARGEST ANDROID FOCUSED <br />
                DEVELOPER CONFERENCE IN AFRICA.
              </h3>
            </div>
          </div>
        </div>
        <div className="mt-20 md:mt-0">
          <video
            className="rounded-xl aspect-video  w-full  md:w-[670px] "
            loop
            autoPlay
            muted
            preload="auto"
            controls
            disablePictureInPicture
            controlsList="nodownload"
          >
            <source
              type="video/mp4"
              src="/video/DroidconKe_2019_Highlight_Reel_HD.mp4"
            />
          </video>
          {/* <iframe
            className="rounded-xl aspect-video h-[250px] w-full md:h-[400px] md:w-[630px] -mt-20"
            src="https://www.youtube.com/embed/AO-j2kLvKJw?start=5&controls=0&showinfo=0&modestbranding=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          /> */}
        </div>
      </div>
    </div>
  )
}
