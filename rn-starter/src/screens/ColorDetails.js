import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

const ColorDetails = () => {
  const [colors, setColor] = useState([]);
  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => {
          setColor([...colors, randomRGB()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);

  return ` rgb(${red} , ${blue} , ${green})`;
};

const styles = StyleSheet.create({});
export default ColorDetails;
