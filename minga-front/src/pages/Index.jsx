import React from "react";
import Carousel from "../components/Carousel";
import Hero from "../components/Hero";

export default function Index() {
  return (
    <main className="box-border h-screen w-full md:p-6rem] md:w-5/6">
      <Carousel/>
      <Hero/>
    </main>
  );
}
