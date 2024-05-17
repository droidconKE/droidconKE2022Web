// import Image from 'next/image'
import { gallery } from '../../constant/gallery'
import { gallery2022 } from '../../constant/gallery2022'

const allImages = [...gallery, ...gallery2022]

const showMoreLink = true

export const Gallery = () => {
  return (
    <section className="w-full h-auto">
      <div className="flex flex-wrap md:mb-10 md:py-12">
        <div className="w-full text-center p-6 md:py-10 items-center justify-center">
          <h2 className="title lowercase dark:text-accent-dark">
            <span>Photos From</span>{' '}
            <span className="font-medium">past DroidconKe</span>
          </h2>
        </div>
        <div className="w-full items-center flex flex-wrap">
          <div id="images-wrapper" className="lgx-photo-gallery">
            {allImages.map((image) => {
              return (
                <div className="lgx-gallery-single p-0.5" key={image.imageName}>
                  <img
                    title={image.imageTitle}
                    src={`/images/gallery/${image.imageName}.jpg`}
                    alt={image.imageTitle}
                    width={image.imageWidth}
                    height={image.imageHeight}
                  />
                </div>
              )
            })}
          </div>
          <div className="w-full flex flex-wrap mt-4 mb-20 md:mb-0 justify-center items-center">
            {showMoreLink && (
              <div className="space-x-3 flex px-2">
                <a
                  className="lowercase font-bold btn-secondary"
                  target="_blank"
                  href="https://bit.ly/DCKE23Day1"
                  rel="noreferrer"
                >
                  View Day 1 Photos{' '}
                  {/* <i
                  className="fa fa-arrow-right ml-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                /> */}
                </a>
                <a
                  className="lowercase font-bold btn-secondary"
                  target="_blank"
                  href="https://bit.ly/DCKE23Day2"
                  rel="noreferrer"
                >
                  View Day 2 Photos{' '}
                  {/* <i
                  className="fa fa-arrow-right ml-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                /> */}
                </a>
                <a
                  className="lowercase font-bold btn-secondary"
                  target="_blank"
                  href="https://bit.ly/DCKE23Day3"
                  rel="noreferrer"
                >
                  View Day 3 Photos{' '}
                  {/* <i
                  className="fa fa-arrow-right ml-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                /> */}
                </a>
              </div>
            )}
          </div>
        </div>
        <style jsx>
          {`
            #images-wrapper {
              width: 100% !important;
              line-height: 0;
              -webkit-column-count: 4;
              -webkit-column-gap: 0px;
              -moz-column-count: 4;
              -moz-column-gap: 0px;
              column-count: 4;
              column-gap: 0px;
              margin-bottom: 10px;
            }
            #images-wrapper img {
              width: 100% !important;
              height: auto !important;
              padding: 2px;
            }
            #images-wrapper {
              display: inline-block;
              margin-right: auto;
              margin-left: auto;
            }
            @media (max-width: 1000px) {
              #images-wrapper {
                -moz-column-count: 3;
                -webkit-column-count: 3;
                column-count: 3;
              }
            }
            @media (max-width: 800px) {
              #images-wrapper {
                -moz-column-count: 2;
                -webkit-column-count: 2;
                column-count: 2;
              }
            }
            @media (max-width: 400px) {
              #images-wrapper {
                -moz-column-count: 2;
                -webkit-column-count: 2;
                column-count: 2;
              }
            }
          `}
        </style>
      </div>
    </section>
  )
}
