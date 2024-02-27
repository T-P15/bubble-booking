"use client";

import AnimateComponentInView from "../AnimatePresence";

function Socials() {
  return (
    <AnimateComponentInView>
      <section id="socials" className="bg-white/30 dark:bg-black/30">
        <div className="m-auto flex max-w-screen-lg flex-col px-4 py-8 sm:py-16 lg:flex-row lg:gap-8 lg:px-6">
          <div className="mb-5 flex max-w-screen-lg flex-col gap-4 lg:mb-12">
            <span className="from-primary-dark-blue dark:from-primary-blue via-secondary-dark-white-blue dark:via-secondary-white-blue to-tertiary-dark-baby-pink dark:to-tertiary-baby-pink mb-2 inline-block w-fit bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
              want to hear more?
            </span>
            <h2 className="text-4xl tracking-tight text-gray-900 dark:text-white">
              join us on our adventure
            </h2>
            <p className="font-light text-gray-500  dark:text-gray-400 lg:text-xl">
              follow us to get personalised updates
            </p>
          </div>
          <div className="w-full space-y-8">
            <div
              className="sk-instagram-feed flex max-h-72 w-full !overflow-scroll rounded shadow"
              data-embed-id={25355780}
            />
            <script
              src="https://widgets.sociablekit.com/instagram-feed/widget.js"
              async
              defer
            ></script>
          </div>
        </div>
      </section>
    </AnimateComponentInView>
  );
}

export default Socials;
