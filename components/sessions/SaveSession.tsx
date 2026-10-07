export const SaveSession = ({
  bookmark,
  isStared,
}: {
  bookmark: () => void
  isStared: boolean
}) => {
  return (
    <div>
      <button
        type="button"
        className="flex items-center cursor-pointer"
        onClick={bookmark}
      >
        <div className="relative">
          <input
            checked={isStared}
            type="checkbox"
            className="hidden"
            onChange={() => null}
          />
          <div className="save-toggle__line w-8 h-4 bg-accent dark:bg-accent-dark rounded-full shadow-inner" />
          <div className="save-toggle__dot absolute w-5 h-5 bg-primary dark:bg-primary-dark rounded-full shadow inset-y-0 left-0" />
        </div>
        <div className="ml-3 text-dark dark:text-white-dark font-sm">
          {isStared ? 'Remove Session' : 'Save Session'}
        </div>
      </button>
      <style>
        {`
          .save-toggle__dot {
            top: -0.25rem;
            left: -0.25rem;
            transition: all 0.3s ease-in-out;
          }
          .save-toggle__line {
            margin-top: -2px;
          }

          input:checked ~ .save-toggle__dot {
            transform: translateX(100%);
          }
        `}
      </style>
    </div>
  )
}
