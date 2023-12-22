import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Button
        onPress={() => props.navigation.navigate("list")}
        style={styles.btn}
        title="Go to the List Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Components")}
        title="Go to the Component Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Img")}
        title="Go to the Image Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Counter")}
        title="Go to the Counter Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Colors")}
        title="Go to the Color Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Square")}
        title="Go to the Square Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("URCounter")}
        title="Go to the UR Counter Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Text")}
        title="Go to the Text Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Layout")}
        title="Go to the Layout Screen"
      />
      <Button
        onPress={() => props.navigation.navigate("Exercise")}
        title="Go to the Exercise Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    textAlign: "center",
  },
  touchBtn: {
    marginTop: 20,
  },
});

export default HomeScreen;
