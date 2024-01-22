import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButtons({ children }) {
  const PressHandler = () => {};
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={PressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    overflow: "hidden",
    margin: 4,
  },
  buttonInnerContainer: {
    elevation: 2,
    backgroundColor: "#72063c",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
