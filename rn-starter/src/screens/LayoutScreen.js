import { View, Text, StyleSheet } from "react-native";
import React from "react";

const LayoutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>LayoutScreen</Text>
      <Text style={styles.text2}>LayoutScreen</Text>
      <Text style={styles.text}>LayoutScreen</Text>
      <Text style={styles.text}>LayoutScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  text1: {
    alignItems: "center",
    backgroundColor: "#98afe5",
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    margin: 15,
  },
  text2: {
    backgroundColor: "#98afe5",
    alignSelf: "center",
    borderColor: "black",
    borderWidth: 1,
    padding: 15,
    margin: 15,
  },
});

export default LayoutScreen;
