import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { set } from "react-native-reanimated";

export default function CounterScreen() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Arttır"
        onPress={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
      />
      <Button
        title="Azalt"
        onPress={() => {
          setCounter(counter - 1);
          console.log(counter);
        }}
      />
      <Text>CounterScreen {counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
