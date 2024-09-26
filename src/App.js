import React from "react";

export default function HomePage() {
  // Scroll function to scroll to the specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-10">
        <div className="text-xl font-bold">My Portfolio</div>
        <div>
          <button
            onClick={() => scrollToSection("intro")}
            className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded-full"
          >
            Intro
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded-full"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded-full"
          >
            Projects
          </button>
        </div>
      </header>

      {/* Main content sections */}
      <main className="pt-20">
        <section
          id="intro"
          className="min-h-screen bg-gray-100 flex justify-center items-center"
        >
          <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </section>

        <section
          id="about"
          className="min-h-screen bg-gray-200 flex justify-center items-center"
        >
          <h2 className="text-3xl font-bold">About Me</h2>
        </section>

        <section
          id="projects"
          className="min-h-screen bg-gray-300 flex justify-center items-center"
        >
          <h2 className="text-3xl font-bold">My Projects</h2>
        </section>
      </main>
    </div>
  );
}
