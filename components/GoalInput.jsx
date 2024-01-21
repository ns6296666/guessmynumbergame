import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput({ addGoalHandler, visible, onClose }) {
  const [goal, setGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setGoal(enteredText);
  };
  const onAddingGoal = () => {
    addGoalHandler(goal);
    setGoal("");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/goal.webp")}
          alt=""
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={goal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f249ed" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={onAddingGoal} color="#cf89f5" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#1e058e",
  },
  image: {
    width: 100,
    height: 100,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#f0e1f7",
    backgroundColor: "#f0e1f7",
    width: "100%",
    padding: 16,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
