import React from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

export default function HomePage() {
  // Scroll function to scroll to the specific section

  return (
    <div>
      {/* Sticky Header */}
      <Header />;{/* Main content sections */}
      <main className="">
        <Intro />

        <About />

        <Projects />
      </main>
    </div>
  );
}
