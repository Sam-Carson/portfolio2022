import React from "react";

import {
  HeroBackground,
  Hero,
  About,
  Projects,
  Footer,
  Animation,
} from "../components";

export default function Home() {
  return (
    <>
      {/* <HeroBackground /> */}
      <Animation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
