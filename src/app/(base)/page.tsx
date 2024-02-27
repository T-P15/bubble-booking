"use client";
import Feature from "~/components/home/Feature";
import Hero from "~/components/home/Hero";
import ImageWithCTA from "~/components/home/ImageWithCTA";
import Socials from "~/components/home/Socials";
import Testimonial from "~/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      {/* <ImageWithContent />
      <CustomerLogos />
      <SocialProof /> */}
      <Testimonial />
      <Socials />
      <ImageWithCTA />
    </>
  );
}
