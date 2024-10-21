export function SkillList({ title, skills }) {
  return (
    <div className="flex flex-col space-y-2">
      <h4 className="text-xl font-bold">{title}</h4>
      {skills.map(({ skillTitle, skillSVG }, i) => {
        return (
          <div className="flex flex-row space-x-2 items-center" key={i}>
            <div>{skillSVG}</div> <div>{skillTitle}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const frameworks = [
    {
      skillTitle: "Docker",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/docker" />
      ),
    },
    //
    {
      skillTitle: "PostgreSQL",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/postgresql"
        />
      ),
    },
    {
      skillTitle: "GitHub",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/github" />
      ),
    },
    {
      skillTitle: "AWS",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/amazonwebservices"
        />
      ),
    },
    {
      skillTitle: "React & React Native",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/React" />
      ),
    },
    {
      skillTitle: "Node.js",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/node.js" />
      ),
    },
    {
      skillTitle: "Django",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/Django" />
      ),
    },
  ];
  const mlTools = [
    {
      skillTitle: "GPT Series",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/Openai" />
      ),
    },
    {
      skillTitle: "Llama",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/Ollama" />
      ),
    },
    {
      skillTitle: "Langchain",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/langchain"
        />
      ),
    },

    {
      skillTitle: "Pytorch",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/pytorch" />
      ),
    },
    {
      skillTitle: "Pandas",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/pandas" />
      ),
    },
    {
      skillTitle: "Scikit-learn",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/Scikitlearn"
        />
      ),
    },
    {
      skillTitle: "Spacy",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/Spacy" />
      ),
    },
  ];

  const languages = [
    {
      skillTitle: "python",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/python" />
      ),
    },
    {
      skillTitle: "JavaScript",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/JavaScript"
        />
      ),
    },
    {
      skillTitle: "Typescript",
      skillSVG: (
        <img
          height="32"
          width="32"
          src="https://cdn.simpleicons.org/Typescript"
        />
      ),
    },
    {
      skillTitle: "C",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/c" />
      ),
    },
    {
      skillTitle: "C++",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/C++" />
      ),
    },
    {
      skillTitle: "PHP",
      skillSVG: (
        <img height="32" width="32" src="https://cdn.simpleicons.org/PHP" />
      ),
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-300 flex flex-col justify-center items-center pt-20
      pb-20
      "
    >
      <div className=" w-4/5 items-center  space-y-10">
        <div>
          <h2 className="text-3xl font-bold">Schooling</h2>
          <p>
            <p>
              I attended UNSW from 2019-2022, where my Advanced Mathematics &
              Compsci double degree let me formally study AI from all angles. In
              courses theoretical, implementation, ethics, and even philosophy
              of mind.
            </p>
            <ul className="ml-4 list-disc">
              <li>Advanced Topics in Statistical Machine Learning</li>
              <li>Machine Learning and Data Mining</li>
              <li>Neural Networks and Deep Learning</li>
              <li>Mathematical Optimization for Data Science</li>
              <li>Statistical Modelling and Computing</li>
              <li>Mind, Ethics, and Freedom: Introduction to Philosophy</li>
              <li>Professional Issues and Ethics in Information Technology</li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="flex flex-row justify-between w-full">
            <SkillList title={"Frameworks and Tools"} skills={frameworks} />
            <SkillList title={"Programming Languages"} skills={languages} />
            <SkillList title={"AI & ML Tools"} skills={mlTools} />
          </div>
        </div>
      </div>
    </section>
  );
}
