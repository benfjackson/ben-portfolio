// https://blog.logrocket.com/adding-custom-fonts-react-native/
import { useFonts } from "expo-font";

export default function loadFonts() {
  const [fontsLoaded] = useFonts({
    MochiyPop: require("./MochiyPopOne-Regular.ttf"),
    YoungSerif: require("./YoungSerif-Regular.ttf"),
    Endor: require("./ENDOR___.ttf"),
  });
  return fontsLoaded;
}
