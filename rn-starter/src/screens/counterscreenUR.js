import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { set } from "react-native-reanimated";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

export default function CounterScreen() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { count } = state;

  return (
    <View>
      <Button
        title="Arttır"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Azalt"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text>{count} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
