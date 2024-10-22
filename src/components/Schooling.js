export default function Schooling() {
  return (
    <section
      id="schooling"
      className="min-h-screen bg-gray-400 flex flex-col justify-center items-center pt-20
      "
    >
      <div className="w-4/5  items-center  space-y-10">
        <h2 className="text-3xl font-bold">Schooling</h2>
        <div className="flex space-x-10">
          <div className="w-1/2 space-y-2">
            <p>
              I attended UNSW from 2019-2022, where my Advanced Mathematics &
              Compsci double degree let me formally study AI from all angles.
            </p>
            <p>
              Through my coursework and electives, I engaged with AI's theory,
              implementation, ethics, and even philosophy of mind to a high
              academic standard.
            </p>
          </div>
          <div>
            <h2 className="text-lg">Key subjects included:</h2>
            <ul className="pt-2 ml-4 list-disc">
              <li>Advanced Topics in Statistical Machine Learning</li>
              <li>Machine Learning and Data Mining</li>
              <li>Neural Networks and Deep Learning</li>
              <li>Mathematical Optimization for Data Science</li>
              <li>Statistical Modelling and Computing</li>
              <li>Mind, Ethics, and Freedom: Introduction to Philosophy</li>
              <li>Professional Issues and Ethics in Information Technology</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
