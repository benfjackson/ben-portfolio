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
        accessories. So I made myself a bespoke life counter.
      </p>
      <p>
        To do this, I used image generation and animation tools such as Leonardo
        AI, Midjourney, DALLE
      </p>

      <div className=" flex space-x-2">
        <div className=" flex flex-col space-y-2">
          <img src={HomeScreen} width={250} />{" "}
          <h4>Overly dramatic play button</h4>
        </div>
        <div className=" flex flex-col space-y-2">
          <img src={SkinSelect} width={250} /> <h4>Skin selection screen</h4>
        </div>
        <div className=" flex flex-col space-y-2">
          <img src={TwoPlayer} width={250} /> <h4>Ingame Life tracking</h4>
        </div>
      </div>
    </div>
  );
}
