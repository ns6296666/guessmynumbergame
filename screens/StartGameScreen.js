import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

export default function StartGameScreen() {
  return (
    <View style={styles.startGameContainer}>
      <View>
        <TextInput title="Enter number" />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButtons>Reset</PrimaryButtons>
        <PrimaryButtons>Confirm</PrimaryButtons>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  startGameContainer: {
    marginTop: 100,
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: "#b80416",
    elevation: 20,
    shadowColor: "000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});
