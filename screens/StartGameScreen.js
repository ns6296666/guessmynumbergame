import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import { colors } from "../components/constants/colors";

export default function StartGameScreen({ pickedNumber }) {
  const [enteredValue, setEnteredValue] = useState("");

  const changeNumberHandler = (enteredText) => {
    setEnteredValue(enteredText);
  };

  const ResetInputHandler = () => {
    setEnteredValue("");
  };
  const confirmInputHandler = () => {
    let choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be number between 1 to 99",
        [{ text: "Okay", style: "destructive", onPress: ResetInputHandler }]
      );
      return;
    }
    pickedNumber(choosenNumber);
  };
  return (
    <View style={styles.startGameContainer}>
      <View>
        <TextInput
          title="Enter number"
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          value={enteredValue}
          onChangeText={changeNumberHandler}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={ResetInputHandler}>Reset</PrimaryButtons>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButtons onPress={confirmInputHandler}>Confirm</PrimaryButtons>
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
    backgroundColor: colors.primary700,
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
    borderBottomColor: colors.primary500,
    borderBottomWidth: 2,
    color: colors.primary500,
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
