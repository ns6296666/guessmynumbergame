import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

export default function InstructionText({ children }) {
  return <Text style={styles.instructionText}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: colors.primary500,
    textAlign: "center",
  },
});
