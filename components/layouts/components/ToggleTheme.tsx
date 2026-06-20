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
            aria-label="Toggle theme"
            title="Toggle theme"
          />
          <div className="toggle__line w-10 h-5 bg-black dark:bg-secondary rounded-full shadow-inner" />
          <div className="toggle__dot absolute top-0.5 left-0.5 w-4 h-4 bg-white dark:bg-black rounded-full shadow" />
        </div>
        <div className="ml-3 text-gray-700 font-sm" />
      </button>
      <style>
        {`
          .toggle__dot {
            transition: transform 0.3s ease-in-out;
          }

          input:checked ~ .toggle__dot {
            transform: translateX(1.25rem);
          }
        `}
      </style>
    </div>
  )
}
