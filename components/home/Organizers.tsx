function Organizers() {
  // Pattern overlay style using radial-gradient to simulate the Figma dot pattern
  const patternOverlayStyle = {
    backgroundImage: 'radial-gradient(circle, #0055FF 15%, transparent 15%)',
    backgroundSize: '16px 16px',
    opacity: 0.8,
    WebkitMaskImage: 'linear-gradient(to bottom, transparent 10%, black 90%)',
    maskImage: 'linear-gradient(to bottom, transparent 10%, black 90%)',
  }

  return (
    <section className="s-container w-full h-auto bg-white dark:bg-dark pt-10 md:pt-20 transition-colors">
      {/* Header Block */}
      <div className="w-full bg-accent rounded-3xl p-8 mb-8 md:mb-12">
        <div className="flex items-center text-black text-sm md:text-base font-medium mb-4 md:mb-6 opacity-90">
          <div className="w-6 md:w-8 h-px bg-black mr-3" />
          Community Partners
        </div>
        <h2 className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight font-display whitespace-nowrap">
          Community Partners
        </h2>
      </div>

      {/* Checkerboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16">
        {/* Row 1: Android254 */}
        <div className="w-full bg-primary rounded-[24px] md:rounded-[20px] p-8 md:p-12 flex flex-col justify-center">
          <h4 className="title font-display text-accent text-5xl md:text-6xl mb-6">
            Android254
          </h4>
          <p className="text-white text-base md:text-lg leading-relaxed opacity-90">
            Founded in 2015, Android254 is the largest and most active Android
            Developer community in Sub-Saharan Africa. With a steadfast
            commitment to fostering knowledge-sharing and skill development, we
            host monthly meetups that consistently draw over 70 passionate
            attendees eager to delve into the latest Android development topics.{' '}
            <br />
            <br />
            Having orchestrated over 100 physical meetups to date, the
            Android254 community has flourished, boasting a membership of over
            8,600 Android developers. Through these engaging gatherings, members
            have honed their skills, expanded their networks, and unlocked new
            career opportunities locally and abroad.
            <br />
            <br />
            Witnessing the transformative impact of our community, Android254
            has observed members securing coveted positions across the globe
            while others have embraced opportunities beyond the borders of
            Africa. What began as a grassroots movement in Kenya has burgeoned
            into a regional phenomenon, attracting attendees and members from
            diverse Sub-Saharan African countries.{' '}
          </p>
        </div>
        <div className="w-full min-h-[300px] md:min-h-[400px] relative rounded-[24px] md:rounded-[32px] overflow-hidden">
          <img
            src="/images/gallery/096.jpg"
            alt="Android254 Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/10 mix-blend-multiply" />
          {/* Polka Dot Pattern Overlay */}
          <div className="absolute inset-0 z-10" style={patternOverlayStyle} />
        </div>

        {/* Row 2: Kotlin Kenya */}
        <div className="w-full min-h-[300px] md:min-h-[400px] relative rounded-[24px] md:rounded-[32px] overflow-hidden order-last lg:order-none">
          <img
            src="/images/gallery/TTT_DOC_KI_58.jpg"
            alt="Kotlin Kenya Community"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-100 mix-blend-multiply" />
          {/* Polka Dot Pattern Overlay */}
          <div className="absolute inset-0 z-10" style={patternOverlayStyle} />
        </div>
        <div className="w-full bg-accent rounded-[24px] md:rounded-[32px] p-8 md:p-12 flex flex-col justify-center">
          <h4 className="title font-display text-primary text-5xl md:text-6xl mb-6">
            Kotlin Kenya
          </h4>
          <p className="text-black dark:text-dark text-base md:text-lg leading-relaxed opacity-90">
            Kotlin Kenya, founded in 2017, is the official Kotlin User group
            community in Kenya. With a membership of over 4,190 enthusiasts,
            Kotlin Kenya is the go-to hub for all things related to the dynamic
            Kotlin Language.
            <br />
            <br />
            Kotlin Kenya has evolved into a thriving ecosystem, boasting the
            largest and most active user group in Africa. Over the editions,
            Kotlin Kenya has curated and hosted more than 70 events, each
            attracting a diverse array of developers eager to explore the
            endless possibilities of Kotlin. The monthly meetups consistently
            draw over 70 attendees and serve as vibrant gatherings where
            knowledge is shared, connections are forged, and enthusiasm for
            Kotlin is palpable. The Kotlin Kenya and Android254 meetups happen
            at the same time and day.
            <br />
            <br />
            In a testament to its commitment to continuous learning and
            collaboration, Kotlin Kenya proudly partners with JetBrains to bring
            KotlinConf Global editions to Nairobi. These sessions, along with
            other planned engagements with the JetBrains team, further enrich
            our community with invaluable insights and opportunities.
          </p>
        </div>
      </div>

      {/* Existing Organizers Logos */}
      {/* Retain this incase of future use */}
      {/* <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-8 pt-8">
        {organizers.map((org) => (
          <a
            key={org.created_at || org.name}
            target="_blank"
            href={org.link}
            className="w-full aspect-square p-4 flex items-center justify-center rounded-2xl bg-[#F4F4F4] dark:bg-[#121212] hover:scale-105 transition-transform"
            rel="noreferrer"
          >
            <img
              className="w-full h-full object-contain"
              src={org.photo === null ? '/images/icon.png' : org.photo}
              alt={org.name}
            />
          </a>
        ))}
      </div> */}
    </section>
  )
}

export default Organizers
