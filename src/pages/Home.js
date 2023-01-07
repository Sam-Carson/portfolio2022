import React from "react";

import {
  DevToolComp,
  HeroBackground,
  Hero,
  Header,
  About,
  Projects,
  Credentials,
  Footer,
} from "../components";

export default function Home() {
  return (
    <>
      <HeroBackground />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
