import { gallery } from '../../constant/gallery'
import { gallery2022 } from '../../constant/gallery2022'

const allImages = [...gallery, ...gallery2022]

// Deals the images across the columns in turn, so they read left to right a
// row at a time and the first in the list sit along the top. CSS `columns`
// fills each column top to bottom instead, which stacked the newest photos
// down the left edge.
const dealInto = <T,>(items: T[], columns: number): T[][] =>
  Array.from({ length: columns }, (__, column) =>
    items.filter((_, index) => index % columns === column)
  )

// One layout per breakpoint, shown by CSS rather than picked in JS, so the
// server render matches every screen width and nothing reflows on load.
const LAYOUTS = [
  { columns: 2, className: 'flex md:hidden' },
  { columns: 3, className: 'hidden md:flex lg:hidden' },
  { columns: 4, className: 'hidden lg:flex' },
]

interface IGalleryImage {
  imageName: string
  imageTitle?: string
  imageWidth?: number
  imageHeight?: number
}

const GalleryImage = ({ image }: { image: IGalleryImage }) => {
  return (
    <div className="relative p-[3px] bg-accent w-full rounded-xl">
      <div className="w-full bg-white dark:bg-black relative overflow-hidden rounded-xl">
        <img
          src={`/images/gallery/${image.imageName}.jpg`}
          alt={image.imageTitle || 'Gallery image'}
          width={image.imageWidth}
          height={image.imageHeight}
          loading="lazy"
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
        {/* One line from sm up; a phone narrower than the line lets it wrap. */}
        <h2 className="text-accent text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight font-display sm:whitespace-nowrap">
          Past droidcon events
        </h2>
      </div>

      {/* Masonry: each image keeps its own shape, nothing is cropped. */}
      {LAYOUTS.map(({ columns, className }) => (
        <div key={columns} className={`${className} w-full gap-4 md:gap-6`}>
          {dealInto(displayImages, columns).map((column, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="flex-1 min-w-0 flex flex-col gap-4 md:gap-6"
            >
              {column.map((image) => (
                <GalleryImage key={image.imageName} image={image} />
              ))}
            </div>
          ))}
        </div>
      ))}

      {/* The full album, in a Drive folder shared with anyone with the link. */}
      <div className="mt-10 md:mt-14 flex justify-center">
        <a
          href="https://drive.google.com/drive/folders/16ljETGsOJ-JkqucVWzd4hMe5tCkBJsAv"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary whitespace-nowrap"
        >
          SEE ALL PHOTOS
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  )
}
