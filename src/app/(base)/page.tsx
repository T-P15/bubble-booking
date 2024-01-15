"use client";
import CustomerLogos from "~/components/home/CustomerLogos";
import Feature from "~/components/home/Feature";
import Hero from "~/components/home/Hero";
import ImageWithContent from "~/components/home/ImageWithContent";
import ImageWithCTA from "~/components/home/ImageWithCTA";
import SocialProof from "~/components/home/SocialProof";
import Testimonial from "~/components/home/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Feature />
      <ImageWithContent />
      <CustomerLogos />
      <SocialProof />
      <Testimonial />
      <ImageWithCTA />
    </>
  );
}
