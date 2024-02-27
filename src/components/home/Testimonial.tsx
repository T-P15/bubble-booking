"use client";

import AnimateComponentInView from "../AnimatePresence";

const TESTIMONIALS = [
  {
    quote:
      "so flexible! i've always had trouble setting up a booking system that fits around my schedule and services. bubble is a life saver!",
    author: "larissa",
    bio: "lash artist sole trader",
  },
  {
    quote:
      "even my staff have fun with upselling and rebooking clients. i've seen a dramatic change in profit margins when using bubble",
    author: "elly",
    bio: "hairdresser business owner",
  },
  {
    quote:
      "i have to handle a lot of staff between locations, and bubble has made this possible. it organises my clinics like no other system.",
    author: "brad",
    bio: "laser clinic franchiser",
  },
];

function Testimonial() {
  return (
    <AnimateComponentInView>
      <section id="testimonials">
        <div className={`mx-auto max-w-screen-lg px-4 py-8 lg:px-6 lg:py-16`}>
          <div className="mx-auto mb-5 flex max-w-screen-lg flex-col gap-4 lg:mb-12">
            <span className="from-primary-dark-blue dark:from-primary-blue via-secondary-dark-white-blue dark:via-secondary-white-blue to-tertiary-dark-baby-pink dark:to-tertiary-baby-pink mb-2 inline-block w-fit bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
              dont trust us yet?
            </span>
            <h2 className="text-4xl tracking-tight text-gray-900 dark:text-white">
              {/* ⭐ testimonials ⭐ */}
              see why our customers love bubble
            </h2>
            <p className="font-light text-gray-500  dark:text-gray-400 lg:text-xl">
              here are some of our great users
            </p>
          </div>
          <div className="flex w-full flex-row gap-4">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="flex w-full items-center justify-center rounded-xl border border-gray-500 bg-white/30 p-6 backdrop-blur dark:border-gray-400 dark:bg-black/30"
              >
                <div className={`flex h-full flex-col justify-between gap-4`}>
                  <div className="mx-auto flex h-full w-full ">
                    <p className="text-lg font-normal text-gray-900 dark:text-white">
                      {testimonial.quote}
                    </p>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <div className="pr-3 text-gray-900 dark:text-white">
                        {testimonial.author}
                      </div>
                      <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.bio}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateComponentInView>
  );
}

export default Testimonial;
