import React from "react";
import {
  DevToolComp,
  HeroBackground,
  Hero,
  Header,
  About,
} from "../components";

export default function Home() {
  return (
    <>
      <HeroBackground />
      <Header />
      <Hero />
      <About />
      <DevToolComp />
    </>
  );
}
