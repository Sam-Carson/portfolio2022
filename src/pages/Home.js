import React, { useState, useEffect } from "react";
import { Hero, Header, Works, Skills, About } from "../components";
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
    <>
      {loading ? (
        <div className="loader-container">
          <RotateLoader size={15} color={"#f07c42"} loading={loading} />
        </div>
      ) : (
        <div>
          <Header />
          <Hero />
          <Works />
          <Skills />
          <About />
        </div>
      )}
    </>
  );
}
