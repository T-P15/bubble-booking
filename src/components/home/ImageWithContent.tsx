"use client";

import { useState } from "react";
import useInterval from "~/utils/hooks/useInterval";

import { useAutoAnimate } from "@formkit/auto-animate/react";

const professionList = [
  "nurse",
  "wellness center",
  "spa",
  "barber",
  "tattooist",
  "lash and brow artist",
];

function ImageWithContent() {
  const [parent] = useAutoAnimate();
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useInterval({
    callback: () => {
      setCurrentProfessionIndex((prevIndex) => {
        return (prevIndex + 1) % professionList.length;
      });
    },
    delay: 2000,
  });

  return (
    <section ref={parent}>
      <div className="mx-auto max-w-screen-lg items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
        <div className="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            a booking and monetisation app that knows what it is like on the
            floor
          </h2>
          <p className="mb-4">
            we are passionate about making your life easier.
          </p>
          <p>
            are you a{" "}
            <span key="profession" className={`underline`}>
              {professionList[currentProfessionIndex]}
            </span>
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          <img
            className="w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full rounded-lg lg:mt-10"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}

export default ImageWithContent;
