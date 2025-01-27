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
        <div className="pt-4 w-2/3">
          <p>
            I was one of two AI specialists in a team of 5 at the startup
            AbbyHealth. Over two years my colleagues and I developed Abby, the
            AI healthcare assistant, which began as an AI journal analysis tool
            and evolved with GPT technologies as they were developed.
          </p>
          <br />
          <a
            className="text-blue font-bold p-2 rounded-full bg-[#0065ff] text-white"
            href="https://www.abbyhealth.app/"
            target="blank"
          >
            See Abby in action here
          </a>
        </div>
        <div>
          <h3 className="font-bold">Main responsibilities</h3>
          <ul className="list-disc ml-4">
            <li>
              Follow AI landscape to innovate, design and implement new uses of
              AI for our product
            </li>
            <li>Train custom models</li>
            <li>
              Collaborate with medical team to safely and effectively
              incorporate their domain knowledge
            </li>
            <li>Develop backend infrastructure</li>
            <li>Implement frontend designs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
