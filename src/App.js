import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Schooling from "./components/Schooling";

export default function HomePage() {
  return (
    <div>
      <Header />;
      <main>
        {/* <Intro /> */}

        <About />

        <Schooling />

        <Skills />

        <Projects />
      </main>
    </div>
  );
}
