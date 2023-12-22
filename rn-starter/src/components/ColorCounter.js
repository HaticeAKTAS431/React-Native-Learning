import { View, Text, Button } from "react-native";
import React from "react";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onDecrease()} title={`Azalt ${color}`} />
      <Button onPress={() => onIncrease()} title={`Arttır ${color}`} />
    </View>
  );
};

export default ColorCounter;
