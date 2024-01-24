import React, { useEffect, useMemo, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/Title";
import PrimaryButtons from "../components/PrimaryButtons";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/InstructionText";
import Card from "../components/Card";
import { FontAwesome6 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import GuessLogItem from "../components/game/GuessLogItem";

const generateRandomBetween = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, OnGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (userNumber === currentGuess) {
      return OnGameOver();
    }
  }, [currentGuess, userNumber, OnGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);
  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRounds((prev) => [newRndNumber, ...prev]);
    console.log(maxBoundary, minBoundary);
  }
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or lower?
        </InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("greater")}>
              <FontAwesome6 name="plus" size={24} color="white" />
            </PrimaryButtons>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButtons onPress={() => nextGuessHandler("lower")}>
              <Fontisto name="minus-a" size={24} color="white" />
            </PrimaryButtons>
          </View>
        </View>
      </Card>

      <View>
        <FlatList
          data={guessRounds}
          renderItem={(item) => (
            <GuessLogItem
              roundsNumber={guessRounds.length - item.index}
              guess={item.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: { marginBottom: 24 },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
