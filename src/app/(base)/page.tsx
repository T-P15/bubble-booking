"use client";
import Feature from "~/components/home/Feature";
import Hero from "~/components/home/Hero";
import ImageWithCTA from "~/components/home/ImageWithCTA";
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
      <ImageWithCTA />
    </>
  );
}
