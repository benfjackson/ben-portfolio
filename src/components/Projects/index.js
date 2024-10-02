import Abby from "./Abby";
import Life from "./Life";
import LoveClub from "./LoveClub";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-200 flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold py-10">My Projects</h2>
      <div className="flex flex-col">
        <Abby />
        <LoveClub />
        <Life />
      </div>
    </section>
  );
}
