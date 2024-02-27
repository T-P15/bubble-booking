/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useCallback, useState } from "react";
import useInterval from "~/utils/hooks/useInterval";
import useQuery from "~/utils/hooks/useQuery";

import { Button, ButtonGroup } from "@mui/material";

import HeroImage from "../../../public/images/hero.jpg";
import AnimateComponentInView from "../AnimatePresence";

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
    <AnimateComponentInView>
      <section id="hero">
        <div className="mx-auto grid max-w-screen-lg px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="m-auto flex flex-col place-self-center lg:col-span-6">
            <div className="flex flex-col gap-4">
              <span className="from-primary-dark-blue dark:from-primary-blue to-tertiary-dark-baby-pink dark:to-tertiary-baby-pink mb-2 inline-block w-fit bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
                are you a{" "}
                <span key="profession" className={`underline`}>
                  {professionList[currentProfessionIndex]}?
                </span>
              </span>
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                make the most <br /> out of your business
              </h1>
              <p className="mb-4 max-w-2xl font-light text-gray-500 dark:text-gray-400 lg:text-xl">
                optimise your store easily with our booking and monetisation
                software. take advantage of what you already have using bubble
              </p>
              <ButtonGroup variant="outlined" color="inherit">
                <Button className="w-fit">
                  <a href="#image-with-cta">Get started</a>
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="w-full lg:col-span-6 lg:mt-0 lg:flex lg:items-center">
            <Image
              src={HeroImage}
              alt={"hero image"}
              className="aspect-square h-fit w-full rounded-3xl bg-blend-normal "
            />
          </div>
        </div>
      </section>
    </AnimateComponentInView>
  );
}

export default Hero;
