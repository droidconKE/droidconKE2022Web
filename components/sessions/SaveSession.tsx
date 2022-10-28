import { useState } from 'react'

export const SaveSession = ({
  bookmark,
  isStared,
}: {
  bookmark: () => void
  isStared: boolean
}) => {
  const [isSaved, setIsSaved] = useState(isStared)

  return (
    <div>
      <button
        type="button"
        className="flex items-center cursor-pointer"
        onClick={() => {
          bookmark()
          setIsSaved(!isSaved)
        }}
      >
        <div className="relative">
          <input
            id="toogleA"
            checked={isSaved}
            type="checkbox"
            className="hidden"
            onChange={() => setIsSaved(!isSaved)}
          />
          <div className="toggle__line w-8 h-4 bg-accent dark:bg-accent-dark rounded-full shadow-inner" />
          <div className="toggle__dot absolute w-5 h-5 bg-primary dark:bg-primary-dark rounded-full shadow inset-y-0 left-0" />
        </div>
        <div className="ml-3 text-dark dark:text-white-dark font-sm">
          {isSaved ? 'Remove Session' : 'Save Session'}
        </div>
      </button>
      <style jsx>
        {`
          .toggle__dot {
            top: -0.25rem;
            left: -0.25rem;
            transition: all 0.3s ease-in-out;
          }
          .toggle__line {
            margin-top: -2px;
          }

          input:checked ~ .toggle__dot {
            transform: translateX(100%);
          }
        `}
      </style>
    </div>
  )
}
