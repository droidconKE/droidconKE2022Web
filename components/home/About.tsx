import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <section className="s-container mt-8 md:mt-0 pb-6 md:pb-12">
      <div className="flex flex-wrap">
        <div className="w-full md:w-7/12">
          <h2 className="title lowercase dark:text-accent-dark">
            <span>about</span> <span className="font-medium">droidconke</span>
          </h2>
          <p className="dark:text-lighter-dark py-5 md:py-8 text-xl md:text-2xl">
            This 6th in-person event will include several tech communities from
            the East African Region and continental members. Participants will
            have an excellent chance to learn about Android development and
            opportunities and to network with Android experts in the ecosystem.
          </p>
          <Link href="/about" className="lowercase text-xl font-bold">
            more about droidconke
          </Link>
        </div>
        <div className="flex justify-center items-center w-full md:w-5/12 py-6">
          <img
            className="w-[300px] md:w-[450px]"
            src="/images/oporo.png"
            alt="oporo"
          />
        </div>
      </div>
    </section>
  )
}

export default About
