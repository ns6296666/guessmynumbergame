import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import PrimaryButtons from "../components/PrimaryButtons";
import colors from "../constants/colors";
import Title from "../components/Title";
import InstructionText from "../components/InstructionText";

export default function StartGameScreen({ pickedNumber }) {
  const { height, width } = useWindowDimensions();
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
  const marginTopDistance = height < 400 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <View style={styles.startGameContainer}>
            <InstructionText>Enter a number</InstructionText>
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
                <PrimaryButtons onPress={ResetInputHandler}>
                  Reset
                </PrimaryButtons>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButtons onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButtons>
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  startGameContainer: {
    marginTop: 30,
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
    marginBottom: 20,
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
