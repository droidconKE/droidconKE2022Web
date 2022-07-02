import type { NextPage } from 'next'
import Link from 'next/link'
import { Banner } from '../components/home/Banner'

const Home: NextPage = () => {
  return (
    <div>
      <Banner />
      <section className="l-container mt-8 md:mt-0">
        <div className="flex flex-wrap">
          <div className="w-full md:w-5/12">
            <h2 className="title">About</h2>
            <h3 className="title-l">droidconke</h3>
            <p className="text-2xl text-primary dark:text-primary-dark py-3">
              The Largest Android Focused Developer conference in Africa.
            </p>
            <p className="text-light dark:text-light-dark py-5 md:py-8">
              This 3rd edition of droidconKE will include several tech
              communities from the East African Region and continental members.
              It will give participants an excellent chance to learn about the
              local Android development ecosystem, opportunities and services as
              well as meet the engineers and companies who work on them.
            </p>
            <Link href="/about">
              <a className="uppercase text-xs font-bold">
                more about droidconke{' '}
                <i
                  className="fa fa-arrow-right ml-3"
                  style={{ transform: 'scale(2.0,0.8)' }}
                />
              </a>
            </Link>
          </div>
          <div className="flex justify-center items-center w-full md:w-7/12 py-6">
            <img
              className="w-[300px] md:w-[450px]"
              src="/images/oporo.png"
              alt="oporo"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
