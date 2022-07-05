import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

export const ToggleTheme = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="inline-block p-4 absolute top-0 right-0 mt-3 lg:mt-2  mr-12 md:mr-12 lg:mr-0">
      <button
        type="button"
        className="flex items-center cursor-pointer"
        onClick={() => toggleTheme()}
      >
        <div className="relative">
          <input
            id="toogleA"
            checked={isDarkTheme}
            type="checkbox"
            className="hidden"
            onChange={() => null}
          />
          <div className="toggle__line w-6 h-3 bg-accent rounded-full shadow-inner" />
          <div className="toggle__dot absolute w-4 h-4 bg-primary dark:bg-secondary-dark rounded-full shadow inset-y-0 left-0" />
        </div>
        <div className="ml-3 text-gray-700 font-sm" />
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
