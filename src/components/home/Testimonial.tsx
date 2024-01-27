"use client";
const TESTIMONIALS = [
  {
    quote:
      "and pages starting from login screen to complex dashboard.Perfect choice for your next SaaS application.",
    author: "Micheal Gough",
    bio: "CEO at Google",
  },
  {
    quote:
      "me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.",
    author: "Neil Sims",
    bio: "CTO at Microsoft",
  },
  {
    quote:
      "but as soon as I saw and started playing with FlowBite my mind was blown and became so productive.",
    author: "Helene Engels",
    bio: "Creative designer at Adobe",
  },
];

function Testimonial() {
  return (
    <section id="testimonials">
      <div
        className={`mx-auto max-w-screen-lg px-4 py-8 text-center lg:px-6 lg:py-16`}
      >
        <div className="mx-auto mb-8 flex max-w-screen-md flex-col items-center">
          <h2 className="mb-4 text-center text-4xl tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="max-w-screen-sm text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="flex w-full flex-row gap-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="flex h-full w-full p-6">
              <figure
                className={`mx-auto h-full w-full rounded-full border backdrop-blur transition-all`}
              >
                <blockquote className="">
                  <p className="p-6 text-lg text-gray-900 dark:text-white">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-center space-x-3">
                  <img
                    className="h-6 w-6 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="profile picture"
                  />
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 text-gray-900 dark:text-white">
                      {testimonial.author}
                    </div>
                    <div className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.bio}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
