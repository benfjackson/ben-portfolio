export default function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center z-10">
      <div className="text-xl font-bold">Ben Jackson</div>
      <div>
        <button
          onClick={() => scrollToSection("intro")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          Intro
        </button>
        <button
          onClick={() => scrollToSection("about")}
          className="mx-2 px-4 py-2 bg-white text-gray-800 hover:text-white hover:bg-blue-600 rounded"
        >
          About
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
