import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/skills";

export default function HomePage() {
  return (
    <div>
      {/* Sticky Header */}
      <Header />;{/* Main content sections */}
      <main className="">
        <Intro />

        <About />

        <Skills />

        <Projects />
      </main>
    </div>
  );
}
