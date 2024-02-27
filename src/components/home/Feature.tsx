"use client";

import Image from "next/image";

import AnimateComponentInView from "../AnimatePresence";

function Feature() {
  return (
    <AnimateComponentInView>
      <section id="feature" className="bg-white/30 dark:bg-black/30">
        <div className="mx-auto max-w-screen-lg px-4 py-8 sm:py-16 lg:px-6">
          <div className="mx-auto mb-5 flex max-w-screen-lg flex-col gap-4 lg:mb-12">
            <span className="from-primary-dark-blue dark:from-primary-blue via-secondary-dark-white-blue dark:via-secondary-white-blue to-tertiary-dark-baby-pink dark:to-tertiary-baby-pink mb-2 inline-block w-fit bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
              why bubble?
            </span>
            <h2 className="text-4xl tracking-tight text-gray-900 dark:text-white">
              bubble is the assistant you always dreamed of
            </h2>
            <p className="font-light text-gray-500  dark:text-gray-400 lg:text-xl">
              make your life simpler with us
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
                <Image
                  src="/images/feature-online-bookings.png"
                  alt="online bookings"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mb-2 text-center text-xl dark:text-white">
                online bookings
              </h3>
              <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
                create a seamless, easy experience for your customers so you
                dont have to book them manually. plus features such as suggested
                services!
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
                <Image
                  src="/images/feature-staff-and-instore-sales.png"
                  alt="online bookings"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mb-2 text-center text-xl dark:text-white">
                staff and instore sales
              </h3>
              <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
                we know how chaotic it can get in store, trial a booking and
                monetisation app that knows what it is really like on the floor.
              </p>
            </div>
            <div>
              <div className="bg-primary-100 dark:bg-primary-900 mb-4 flex w-full items-center justify-center rounded-full">
                <Image
                  src="/images/feature-flexibility-and-customisation.png"
                  alt="online bookings"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="mb-2 text-center text-xl dark:text-white">
                flexibility and customisation
              </h3>
              <p className="mb-4 text-center text-gray-500 dark:text-gray-400">
                every business is unique in the way it operates. customise each
                service by location, time and you and your staffs availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </AnimateComponentInView>
  );
}

export default Feature;
