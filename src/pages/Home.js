import React from "react";
import styled from "styled-components";
import config from "react-reveal/globals";
import {
  Hero,
  Header,
  About,
  Projects,
  Footer,
  Animation,
} from "../components";

export default function Home() {
  //Prevents flickering for react-reveal components
  config({ ssrFadeout: true });
  return (
    <>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

const AnimationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
`;
