const values = [
  { label: 'Brand awareness', bg: 'bg-primary' },
  { label: 'User adoption', bg: 'bg-accent' },
  { label: 'Build relationships', bg: 'bg-primary' },
  { label: 'User insights', bg: 'bg-accent' },
  { label: 'Find ambassadors', bg: 'bg-primary' },
  { label: 'Lead generation', bg: 'bg-accent' },
]

export const Value = () => (
  <div className="items-center flex flex-wrap mt-4 md:mt-10 mb-0">
    <div className="w-full md:w-4/12 ml-auto px-2 md:px-8 mt-4 md:mt-0">
      <div className="text-center md:text-left">
        <h3 className="font-display capitalize text-3xl md:text-4xl text-primary dark:text-accent-dark w-full mt-6 md:mt-0">
          Value built in every package
        </h3>
      </div>
    </div>
    <div className="w-full flex flex-wrap md:w-8/12 mt-10 mb-14 md:mb-0 justify-center md:mt-0 px-2 md:px-10">
      <div className="w-full grid grid-cols-3 gap-3 md:gap-4">
        {values.map((value) => (
          <div
            key={value.label}
            className={`flex items-center justify-center rounded-2xl px-3 py-6 text-center ${value.bg}`}
          >
            <p className="text-xs md:text-lg font-semibold capitalize text-white">
              {value.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
)
