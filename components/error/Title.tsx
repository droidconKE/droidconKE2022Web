interface Props {
  status: number | string
}

const TitleComponent = ({ status }: Props) => (
  <section className="error-code-section">
    <div className="w-screen mx-auto text-center pt-32 pb-16 md:pt-28 sm:pt-20 sm:pb-16 md:pb-20 2xl:pt-48 xl:pt-44 xl:pb-20 lg:pt-28 lg:pb-24">
      <h6 className="md:text-15 xl:text-19 lg:text-17 font-bold mb-0 dark:text-white">
        ERROR
      </h6>
      <h1 className="md:text-7xl xl:text-9xl lg:text-8xl text-6xl font-bold dark:text-white">
        {status}
      </h1>
    </div>
  </section>
)

export default TitleComponent
