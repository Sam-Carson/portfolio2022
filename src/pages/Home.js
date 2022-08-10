import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Ticker />
    </div>
  );
}
