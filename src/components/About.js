import portrait from "./portrait.jpg";
export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-200 flex flex-col justify-center items-center"
    >
      <div className="w-4/5">
        <div className="flex items-center space-x-10">
          <div className="w-1/2 space-y-2">
            <p className="font-bold text-lg">Hi I'm Ben</p>
            <br />
            <p>
              I enjoy using AI in new and creative ways and applying it to
              interesting problems.
            </p>
            <p>
              AI is fascinating from so many angles: mathematical,
              philosophical, practical, ethical, and the intersections of these
              areas are particularly intriguing to explore.
            </p>
            <p>There are so many cool ways it can be understood and used!</p>
            <br />
            <p>
              While I'm passionate about AI and mathematics, I also value
              creativity. My creative hobbies complement my AI skills and enable
              me to think through these concepts in new and exciting ways.
            </p>
            <p>
              In my spare time I enjoy reading, writing, cooking, travelling and
              basketball.
            </p>
          </div>
          <img src={portrait} className="max-h-screen" />
        </div>
      </div>
    </section>
  );
}
