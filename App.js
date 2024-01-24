import { StyleSheet, ImageBackground, SafeAreaView, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [enteredValue, setEnteredValue] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (pickedNumber) => {
    setEnteredValue(pickedNumber);
    setGameIsOver(false);
  };

  const startNewGameHandler = () => {
    setEnteredValue(null);
    setGuessRounds(0);
  };
  let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;
  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };
  if (enteredValue) {
    screen = (
      <GameScreen userNumber={enteredValue} OnGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && enteredValue) {
    screen = (
      <GameOverScreen
        userNumber={enteredValue}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={["#3C0023", "#f7cf02"]}
      style={styles.rootContainer}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={styles.rootContainer}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1 },
  backgroundImage: { opacity: 0.75 },
});
