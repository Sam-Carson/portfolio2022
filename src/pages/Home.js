import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Ticker from "../components/Ticker";
import Works from "../components/Works";
import Skills from "../components/Skills";
import RotateLoader from "react-spinners/RotateLoader";

import "../styles/Home-comp/Home-comp.css";

export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader-container">
          <RotateLoader size={15} color={"#f07c42"} loading={loading} />
        </div>
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Ticker />
          <Works />
          <Skills />
        </div>
      )}
    </div>
  );
}
