"use client";
import Feature from "~/components/home/Feature";
import Hero from "~/components/home/Hero";
import ImageWithContent from "~/components/home/ImageWithContent";
import ImageWithCTA from "~/components/home/ImageWithCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <ImageWithContent />
      {/* <CustomerLogos />
      <SocialProof />
      <Testimonial /> */}
      <ImageWithCTA />
    </>
  );
}
