import { gallery } from '../../constant/gallery'
import { gallery2022 } from '../../constant/gallery2022'

const allImages = [...gallery, ...gallery2022]

interface IGalleryImage {
  imageName: string
  imageTitle?: string
  imageWidth?: number
  imageHeight?: number
}

const GalleryImage = ({ image }: { image: IGalleryImage }) => {
  return (
    <div className="relative p-[3px] bg-accent w-full rounded-xl mb-4 md:mb-6 break-inside-avoid">
      <div className="w-full bg-white dark:bg-black relative overflow-hidden rounded-xl">
        <img
          src={`/images/gallery/${image.imageName}.jpg`}
          alt={image.imageTitle || 'Gallery image'}
          className="w-full h-auto block object-contain"
        />
      </div>
    </div>
  )
}

export const Gallery = () => {
  // Use all images as requested
  const displayImages = allImages

  return (
    <section className="s-container w-full h-auto bg-white dark:bg-dark py-10 md:py-20 transition-colors">
      {/* Header Block */}
      <div className="w-full bg-primary dark:bg-primary-dark rounded-[20px] p-8 mb-12 md:mb-16">
        <div className="flex items-center text-white text-sm md:text-base font-medium mb-4 md:mb-6 opacity-90">
          <div className="w-6 md:w-8 h-px bg-white mr-3" />
          Past droidcon events
        </div>
        {/* Sized to always fit on one line up to extra large screens */}
        <h2 className="text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight font-display whitespace-nowrap">
          Past droidcon events
        </h2>
      </div>

      {/* Masonry Layout to perfectly fit images without cropping */}
      <div className="w-full columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6">
        {displayImages.map((image, index) => (
          <GalleryImage key={image.imageName || index} image={image} />
        ))}
      </div>
    </section>
  )
}
