import Abby from "./Abby";
import Life from "./Life";
import LoveClub from "./LoveClub";

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-200 flex flex-col justify-center items-center pb-20"
    >
      <h2 className="text-3xl font-bold py-20">Projects</h2>
      <div className="flex flex-col  w-4/5  space-y-10">
        <Abby />
        <hr className="border-black border-opacity-50" />
        <Life />
        <hr className="border-black border-opacity-50" />
        <LoveClub />
      </div>
    </section>
  );
}
