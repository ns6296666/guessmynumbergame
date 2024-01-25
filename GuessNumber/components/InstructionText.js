import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../constants/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: colors.primary500,
    textAlign: "center",
  },
});
