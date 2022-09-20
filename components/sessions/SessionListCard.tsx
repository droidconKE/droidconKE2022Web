import React from 'react'
import { StarIcon } from '../shared/StarIcon'

const SessionListCard = () => {
  return (
    <div className="space-y-10 md:pl-4">
      <div className="shadow-md px-2 h-auto rounded-md py-4 justify-center content-center bg-white dark:bg-black-dark">
        <div className="flex flex-row items-start">
          <div className="flex flex-col w-2/12 justify-start items-center">
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              8.00
            </h4>
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              AM
            </h4>
          </div>
          <div className="w-9/12 content-center justify-center">
            <h4 className="font-bold md:text-xl dark:text-white">Arrival</h4>
            <p className="font-normal text-sm md:text-base py-2">
              Registration &amp; breakfast
            </p>
            <p className="text-xs md:text-sm font-light">
              8:00AM-9:00AM | VENUE
            </p>
          </div>
          <div className="flex w-1/12 justify-center items-start md:pr-4">
            <StarIcon />
          </div>
        </div>
      </div>

      <div className="shadow-md h-auto px-2 justify-center content-center rounded-md py-4 bg-white dark:bg-black-dark">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/12 justify-start items-center">
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              9.00
            </h4>
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              AM
            </h4>
          </div>
          <div className="flex flex-col w-9/12 items-start justify-center">
            <h4 className="font-bold dark:text-white md:text-xl">Keynote</h4>
            <p className="font-normal text-sm md:text-base py-2">
              Community on a global scale
            </p>
            <p className="text-xs md:text-sm font-light">
              9:00AM-9:30AM | AUDITORIUM
            </p>
            <a
              href="#1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm pt-1 text-primary dark:text-accent-dark"
            >
              <i className="fa fa-android" /> Greg fawson
            </a>
          </div>
          <div className="w-1/12 flex items-start justify-center">
            <StarIcon color="#FF6E4D" stroke="#FF6E4D" />
          </div>
        </div>
      </div>

      <div className="shadow-md px-2 h-auto justify-center rounded-md py-4 bg-white dark:bg-black-dark">
        <div className="flex flex-row">
          <div className="flex flex-col w-2/12 justify-start items-center">
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              9.30
            </h4>
            <h4 className="font-bold md:text-xl text-primary dark:text-accent-dark">
              AM
            </h4>
          </div>
          <div className="flex flex-col w-9/12 items-start justify-center">
            <h4 className="font-bold dark:text-white md:text-xl">
              Compose Beyond Material Desing
            </h4>
            <p className="font-normal text-sm md:text-base py-2">
              Been in the tech industry for oer 20 years. I&apos;m passionate
              about developer communities, innovating people and building
              successful.
            </p>
            <p className="text-xs md:text-sm font-light">
              9:00AM-9:30AM | ZOOM
            </p>
            <a
              href="#1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm pt-1 text-primary dark:text-accent-dark"
            >
              <i className="fa fa-android" /> Frank Tamzi
            </a>
          </div>
          <div className="flex w-1/12 justify-center items-start">
            <StarIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SessionListCard
