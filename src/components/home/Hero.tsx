/* eslint-disable react/no-unescaped-entities */
"use client";

import { useCallback, useState } from "react";
import useInterval from "~/utils/hooks/useInterval";
import useQuery from "~/utils/hooks/useQuery";

const professionList = [
  "nurse",
  "wellness center",
  "spa",
  "barber",
  "tattooist",
  "lash and brow artist",
];

function Hero() {
  const { setSearchParam } = useQuery();

  const handleClickLogIn = useCallback(() => {
    setSearchParam("auth-modal", "sign_in");
  }, [setSearchParam]);

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
    <section id="hero">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16">
        <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:items-center lg:justify-center">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            className="h-fit w-full"
          />
        </div>
        <div className="m-auto flex flex-col gap-2 place-self-center lg:col-span-7 lg:gap-4">
          <h1 className="max-w-2xl text-4xl leading-none dark:text-white md:text-5xl xl:text-6xl">
            make the most <br /> out of your business
          </h1>
          <span className="text-3xl font-bold text-[#A195F9]">
            are you a{" "}
            <span key="profession" className={`underline`}>
              {professionList[currentProfessionIndex]}
            </span>
          </span>
          <p className="max-w-2xl text-gray-500 dark:text-gray-400 md:text-lg lg:text-xl">
            optimise your store easily with our booking and monetisation
            software. take advantage of what you already have using bubble
          </p>
          <div className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 flex flex-col items-start justify-start rounded-lg text-center text-base text-gray-600 focus:ring-4 dark:text-gray-200">
            <p>see what we're made of</p>
            <input placeholder="enter email address"></input>
            <button>start free trial</button>
            <svg
              className="-mr-1 ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <button
            onClick={handleClickLogIn}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
