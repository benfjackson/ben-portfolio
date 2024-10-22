import SkinSelect from "./SkinSelect.png";
import HomeScreen from "./HomeScreen.png";
import TwoPlayer from "./TwoPlayer.png";

import Icon from "./icon.jpg";

export default function Life() {
  return (
    <div className="flex flex-col ">
      <div className="flex space-x-2 items-center">
        <img src={Icon} className="h-14 rounded-md" />
        <h2 className="font-bold font-endor tracking-wider text-2xl">
          {/* [0.2em] */}
          The Golden Heart
        </h2>
      </div>
      {/* show off I can use image generators creatively */}
      <p>
        Magic the Gathering is all about who has the coolest, shiniest cards &
        accessories.
      </p>
      <p>
        So I made myself a bespoke app to use ingame to count my life total.
      </p>
      <p>
        To do this, I experimented with tools such as Leonardo.AI, Midjourney
        and DALLE to create myself art, frames and animations to create myself
        an accessory that noone else had.
      </p>
      <p>The things I would do to this with access to some large GPUs...</p>
      <p className="pt-4">
        {" "}
        Check out the Repo (or download for android!)
        <a
          className="border-2 border-[#FFA500] px-4 ml-4 rounded-full text-[#FFA500] bg-black font-endor"
          target="blank"
          href="https://github.com/benfjackson/TheGoldenHeart"
        >
          Here
        </a>{" "}
      </p>

      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold">Some screenshots</h3>
        <div className=" flex space-x-2">
          <div className=" flex flex-col space-y-2 items-center">
            <img src={HomeScreen} width={250} />{" "}
            <h4 className="font-bold">Overly dramatic play button</h4>
          </div>
          <div className=" flex flex-col space-y-2 items-center">
            <img src={SkinSelect} width={250} />{" "}
            <h4 className="font-bold">Skin selection screen</h4>
          </div>
          <div className=" flex flex-col space-y-2 items-center">
            <img src={TwoPlayer} width={250} />{" "}
            <h4 className="font-bold">Ingame life total tracking</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
