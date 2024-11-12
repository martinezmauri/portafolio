import React from "react";
import { AboutMe } from "../../components/Aboutme/AboutMe";
import { Navbar } from "../../components/Navbar/Navbar";
import { Proyects } from "../../components/Proyects/Proyects";
import { Skills } from "../../components/Skills/Skills";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Proyects />
      <Skills />
      <Footer />
    </>
  );
};
