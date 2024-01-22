"use client";

import { useEffect, useState } from "react";

import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TESTIMONIALS = [
  {
    quote:
      "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard.Perfect choice for your next SaaS application.",
    author: "Micheal Gough",
    bio: "CEO at Google",
  },
  {
    quote:
      "Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application.",
    author: "Neil Sims",
    bio: "CTO at Microsoft",
  },
  {
    quote:
      "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was blown and became so productive.",
    author: "Helene Engels",
    bio: "Creative designer at Adobe",
  },
];

function Testimonial() {
  const [testimonialPlacement, setTestimonialPlacement] = useState(0);

  const handleNextTestimonial = () => {
    setTestimonialPlacement((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrevTestimonial = () => {
    setTestimonialPlacement((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTestimonialPlacement((prev) =>
        prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-gray-200 dark:bg-gray-900">
      <div
        className={`mx-auto max-w-screen-lg px-4 py-8 text-center lg:px-6 lg:py-16`}
      >
        <div className="mx-auto mb-8 flex max-w-screen-md flex-col items-center">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="max-w-screen-sm text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        {TESTIMONIALS.map((testimonial, index) => (
          <figure
            className={`mx-auto mb-4 max-w-screen-md transition-all ${
              testimonialPlacement === index ? "block" : "hidden"
            }`}
            key={index}
          >
            <blockquote
              className={` text-2xl font-medium text-gray-900 transition-all dark:text-white ${
                testimonialPlacement === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
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
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  {testimonial.author}
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {testimonial.bio}
                </div>
              </div>
            </figcaption>
          </figure>
        ))}
        <div>
          <IconButton
            className="text-gray-500 dark:text-white"
            onClick={handlePrevTestimonial}
          >
            <ArrowBack />
          </IconButton>
          <IconButton
            className="text-gray-500 dark:text-white"
            onClick={handleNextTestimonial}
          >
            <ArrowForward />
          </IconButton>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
