import SkinSelect from "./SkinSelect.png";
import HomeScreen from "./HomeScreen.png";
import TwoPlayer from "./TwoPlayer.png";

export default function Life() {
  return (
    <div className="flex flex-col items-center">
      <h2> Life </h2>
      To show off: use of image models, frontend skills
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
