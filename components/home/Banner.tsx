export const Banner = () => {
  return (
    <div className="s-container">
      <div className="w-full flex flex-col md:flex-row items-center min-h-screen justify-between">
        <div className="mt-32 md:mt-0">
          <h1 className="font-light text-3xl md:text-4xl black px-0">
            <span className="lowercase">WELCOME TO</span> <br />
            <span className="font-black text-4xl md:text-5xl">
              DROIDCONKE22
            </span>
          </h1>
          <div className="mt-12 md:mt-8 text-3xl md:text-4xl lowercase font-light">
            <h3 className="dark:text-white-dark">
              LARGEST ANDROID FOCUSED <br />
              DEVELOPER CONFERENCE IN AFRICA.
            </h3>
          </div>
          <div>
            <img
              className="w-full md:w-[440px] my-8 md:my-10"
              src="/images/lines.png"
              alt="line"
            />
          </div>
          <div>
            <div className="flex flex-wrap space-x-2 md:space-x-4">
              <a
                className="btn-primary mt-3 md:mt-0"
                href="https://bit.ly/getYourDcKE22Tickets"
                target="_blank"
                rel="noopener noreferrer"
              >
                get your ticket
              </a>

              <a
                href="https://bit.ly/speakatdroidconke22"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent mt-3 md:mt-0"
              >
                submit a talk
              </a>
            </div>
            <div className="flex flex-wrap mt-8 md:mt-10 items-center">
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
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <video
            className="rounded-xl aspect-video  w-full  md:w-[670px] "
            loop
            autoPlay
            muted
            preload="auto"
            controls
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
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
