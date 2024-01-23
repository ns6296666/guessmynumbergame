import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButtons from "../components/PrimaryButtons";
import StartGameScreen from "./StartGameScreen";

export default function GameOverScreen() {
  const startNewGameHandler = () => {
    return <StartGameScreen />;
  };
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.jpeg")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.summaryHighlight}>X </Text>
          rounds to guess the number
          <Text style={styles.summaryHighlight}> Y</Text>.
        </Text>
        <PrimaryButtons onPress={startNewGameHandler}>
          Start new game
        </PrimaryButtons>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  summaryHighlight: {
    color: colors.primary600,

    fontWeight: "bold",
  },
});
