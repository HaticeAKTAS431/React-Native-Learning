import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useState } from "react";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 20,
    borderColor: "black",
    borderWidth: 0.5,
    padding: 5,
  },
});

export default TextScreen;
