import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImageScreen from "./src/screens/ImageScreen";
import CounterScreen from "./src/screens/CounterScreen";
import ColorScreen from "./src/screens/ColorDetails";
import SquareScreen from "./src/screens/SquareScreen";
import CounterScreenUR from "./src/screens/counterscreenUR";
import TextScreen from "./src/screens/TextScreen";
import LayoutScreen from "./src/screens/LayoutScreen";
import ExerciseLayout from "./src/screens/ExerciseLayout";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    list: ListScreen,
    Img: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorScreen,
    Square: SquareScreen,
    URCounter: CounterScreenUR,
    Text: TextScreen,
    Layout: LayoutScreen,
    Exercise: ExerciseLayout,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
