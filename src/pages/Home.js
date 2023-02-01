import React from "react";

import { HeroBackground, Hero, About, Projects, Footer } from "../components";

export default function Home() {
  return (
    <>
      <HeroBackground />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
