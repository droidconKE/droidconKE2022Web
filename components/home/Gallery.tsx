import Image from 'next/image'
import { gallery } from '../../constant/gallery'

const showMoreLink = false

export const Gallery = () => {
  return (
    <section className="w-full h-auto">
      <div className="flex flex-wrap md:py-12">
        <div className="w-full text-center p-6 md:py-10 items-center justify-center">
          <h3 className="title dark:text-accent-dark">
            Photos From DroidconKe 2019
          </h3>
        </div>
        <div className="w-full items-center flex flex-wrap">
          <div id="images-wrapper" className="lgx-photo-gallery">
            {gallery.map((image) => {
              return (
                <div className="lgx-gallery-single p-0.5" key={image.imageName}>
                  <Image
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
              <a
                className="uppercase text-sm font-bold"
                target="_blank"
                href="https://droidconke.pixieset.com/droidconke2019/"
                rel="noreferrer"
              >
                View More{' '}
                <i
                  className="fa fa-arrow-right ml-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                />
              </a>
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
