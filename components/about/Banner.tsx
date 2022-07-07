import Link from 'next/link'

export const Banner = () => {
  return (
    <div className="s-container">
      <div className="w-full flex flex-col md:flex-row items-center min-h-screen justify-between">
        <div className="mt-32 md:mt-0">
          <h1 className="font-black text-4xl md:text-5xl">
            About <br />
            <span className="font-black text-4xl md:text-5xl">
              DROIDCONKE
            </span>
          </h1>
          <div className="flex flex-wrap mt-8 md:mt-4 items-center" />
          <div>
            <div className="mt-16 md:mt-16 text-xl md:text-1xl font-light">
              <p className="dark:text-white-dark">
                LARGEST ANDROID FOCUSED <br />
                DEVELOPER CONFERENCE IN AFRICA.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          {/* <video
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
          </video> */}
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
