import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import colors from "../constants/colors";

export default function Card({ children }) {
  return <View style={styles.startGameContainer}>{children}</View>;
}
const dimensionWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  startGameContainer: {
    // marginTop: dimensionWidth < 380 ? 0 : 0,
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
});
