import Contact from "./Contact";

export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // section.scrollIntoView({ behavior: "smooth", alignToTop: true });
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4  justify-between items-center z-10 flex ">
      <div className="text-xl font-bold pl-10">Ben Jackson</div>
      <div className="">
        <Contact />
        <button
          onClick={() => scrollToSection("about")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          Me
        </button>
        <button
          onClick={() => scrollToSection("schooling")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          Schooling
        </button>
        <button
          onClick={() => scrollToSection("skills")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("projects")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          Projects
        </button>
      </div>
    </header>
  );
}
