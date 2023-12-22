///   REDUKTOR KULLANIMI

import { View, Text } from "react-native";
import React from "react";
import ColorCounter from "../components/ColorCounter";
import { useReducer } from "react";
import { color } from "react-native-reanimated";

const Color_Increment = 15;

const reduser = (state, action) => {
  // state === red=number , green = number , blue = number
  // action === colorToChange : 'red' || 'green' || 'blue' , amount:number

  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    default:
      return state;
  }
};
const SquareScreen = () => {
  const [state, dispatch] = useReducer(reduser, { red: 0, blue: 0, green: 0 });
  const { red, blue, green } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "red", amount: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "red", amount: -1 * Color_Increment })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "blue", amount: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "blue", amount: -1 * Color_Increment })
        }
        color="blue"
      />

      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "green", amount: Color_Increment })
        }
        onDecrease={() =>
          dispatch({ colorToChange: "green", amount: -1 * Color_Increment })
        }
        color="green"
      />

      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red} , ${green} , ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
