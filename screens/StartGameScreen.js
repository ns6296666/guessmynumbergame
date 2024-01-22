import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";

export default function StartGameScreen() {
  return (
    <View style={styles.startGameContainer}>
      <View>
        <TextInput
          title="Enter number"
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          //   autoComplete={false}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons>Reset</PrimaryButtons>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons>Confirm</PrimaryButtons>
        </View>
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
    backgroundColor: "#63022b",
    elevation: 20,
    shadowColor: "000",
    shadowOffset: { width: 6, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 42,
    fontSize: 32,
    borderBottomColor: "#f5c70f",
    borderBottomWidth: 2,
    color: "#f5c70f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
