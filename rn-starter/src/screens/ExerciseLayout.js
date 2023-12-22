import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ExerciseLayout = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image1} />
      <View style={styles.image2} />
      <View style={styles.image3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  image1: {
    backgroundColor: "pink",
    height: 100,
    width: 100,
    margin: 5,
  },
  image2: {
    backgroundColor: "green",
    height: 100,
    width: 100,
    margin: 50,
  },
  image3: {
    backgroundColor: "blue",
    height: 100,
    width: 100,
    margin: 5,
  },
});

export default ExerciseLayout;
