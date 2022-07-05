import { useEffect, useState } from 'react'

export const UpdatesAvailablePrompt = () => {
  const [isUpdated, setIsUpdated] = useState(false)

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined
    ) {
      const { workbox } = window
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      workbox.addEventListener('installed', (event: any) => {
        // console.log('here it is !!!')
        if (event.isUpdate) {
          setIsUpdated(true)
        }
      })
    }
  }, [])

  if (!isUpdated) {
    return null
  }

  return (
    <div className="container mx-auto flex fixed bottom-0 z-50 justify-center">
      <div
        className="p-2 btn-secondary black items-center leading-none lg:rounded-full flex lg:inline-flex absolute z-50 mb-10 bottom-0"
        role="alert"
      >
        <span className="flex rounded-full uppercase px-2 py-1 bg-accent-2 dark:bg-accent-2-dark black mr-3">
          Update
        </span>
        <span className="font-semibold mr-2 text-left text-white flex-auto">
          There are new updates,{' '}
          <button
            type="button"
            className="underline"
            onClick={() => window.location.reload()}
          >
            click to update
          </button>
        </span>
      </div>
    </div>
  )
}
