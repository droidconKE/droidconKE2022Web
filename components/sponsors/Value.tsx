const values = [
  {
    label: 'Brand awareness',
    bg: 'bg-primary',
    text: 'text-white dark:text-white',
  },
  {
    label: 'User adoption',
    bg: 'bg-accent',
    text: 'text-black dark:text-black',
  },
  {
    label: 'Build relationships',
    bg: 'bg-primary',
    text: 'text-white dark:text-white',
  },
  {
    label: 'User insights',
    bg: 'bg-accent',
    text: 'text-black dark:text-black',
  },
  {
    label: 'Find ambassadors',
    bg: 'bg-primary',
    text: 'text-white dark:text-white',
  },
  {
    label: 'Lead generation',
    bg: 'bg-accent',
    text: 'text-black dark:text-black',
  },
]

export const Value = () => (
  <div className="items-center flex flex-wrap mt-4 md:mt-0 mb-0">
    <div className="w-full md:w-4/12 px-2 md:px-0 mt-4 md:mt-0">
      <div className="text-center md:text-left">
        <h3 className="font-display text-2xl md:text-4xl leading-tight md:leading-tight text-primary dark:text-primary w-full mt-6 md:mt-0 md:max-w-[20rem]">
          Value built in every package
        </h3>
      </div>
    </div>
    <div className="w-full flex flex-wrap md:w-8/12 mt-8 mb-6 md:mb-0 justify-center md:mt-0 px-2 md:px-0">
      <div className="w-full grid grid-cols-3 gap-x-2 gap-y-4 md:gap-x-2 md:gap-y-6">
        {values.map((value) => (
          <div
            key={value.label}
            className={`flex items-center justify-center rounded-2xl px-6 md:px-8 py-4 md:py-5 text-center ${value.bg}`}
          >
            <p
              className={`text-sm md:text-2xl font-semibold leading-tight md:leading-tight ${value.text}`}
            >
              {value.label.split(' ')[0]}
              <br />
              {value.label.split(' ').slice(1).join(' ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
