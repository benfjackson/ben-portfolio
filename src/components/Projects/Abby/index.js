import logoText from "./blackTextLogoSmall.png";
import logoImage from "./BrandMarkSmall.png";

export default function Abby() {
  return (
    <div className=" ">
      <div className="flex items-center  space-x-1">
        <img src={logoImage} className="h-8" />
        <img src={logoText} className="h-10" />
      </div>

      <div className="flex justify-between">
        <div>
          <p>
            I worked in a team to develop Abby over the course of 2 years. Abby
            began as an AI journal analysis tool powered by custom models, then,
            as GPT technologies were developed, we integrated them to evolve
            Abby into to a fully fledged health assistant.
          </p>
        </div>
        <div>
          <h3 className="font-bold">Main responsibilities</h3>
          <ul className="list-disc">
            <li>
              Follow AI landscape, innovate, design and implement new uses of AI
              for our product
            </li>
            <li>Train custom models when needed</li>
            <li>Develop backend infrastructure</li>
            <li>Implement frontend designs</li>
          </ul>
        </div>
      </div>
      <a
        className="text-blue font-bold border-2 border-black p-2 rounded-full"
        href="https://www.abbyhealth.app/"
        target="blank"
      >
        {" "}
        Check out Abby here
      </a>
    </div>
  );
}
