interface Props {
  status: number | string
}

const TitleComponent = ({ status }: Props) => (
  <section className="error-code-section flex flex-grow items-center">
    <div className="w-screen mx-auto text-center mt-32">
      <h6 className="md:text-15 lg:text-17 font-bold mb-0 dark:text-white">
        ERROR
      </h6>
      <h1 className="md:text-7xl xl:text-9xl lg:text-8xl text-6xl font-bold dark:text-white">
        {status}
      </h1>
    </div>
  </section>
)

export default TitleComponent
