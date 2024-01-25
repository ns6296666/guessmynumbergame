import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import colors from "../constants/colors";
import PrimaryButtons from "../components/PrimaryButtons";

export default function GameOverScreen({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) {
  const { width, height } = useWindowDimensions();
  console.log("width", width);
  const imageContainerWidth = width < 400 ? 150 : 300;
  const imageContainerHeight = width < 400 ? 150 : 300;
  const borderRadius = width < 380 ? 75 : 150;
  let content = (
    <>
      <View style={styles.screen}>
        <Title>Game Over!</Title>
        <View
          style={[
            styles.imageContainer,
            {
              width: imageContainerWidth,
              height: imageContainerHeight,
              borderRadius: borderRadius,
            },
          ]}
        >
          <Image
            source={require("../assets/success.jpeg")}
            style={styles.image}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone needed
            <Text style={styles.summaryHighlight}>{roundsNumber} </Text>
            rounds to guess the number
            <Text style={styles.summaryHighlight}> {userNumber}</Text>.
          </Text>
          <PrimaryButtons onPress={onStartNewGame}>
            Start new game
          </PrimaryButtons>
        </View>
      </View>
    </>
  );
  if (width > 500) {
    content = (
      <>
        <View style={styles.screenWide}>
          <Title>Game Over!</Title>
          <View
            style={[
              styles.imageContainerWide,
              {
                width: imageContainerWidth,
                height: imageContainerHeight,
                borderRadius: width < 500 ? 50 : 75,
              },
            ]}
          >
            <Image
              source={require("../assets/success.jpeg")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.summaryTextWide}>
              Your phone needed
              <Text style={styles.summaryHighlight}>{roundsNumber} </Text>
              rounds to guess the number
              <Text style={styles.summaryHighlight}> {userNumber}</Text>.
            </Text>
            <PrimaryButtons onPress={onStartNewGame}>
              Start new game
            </PrimaryButtons>
          </View>
        </View>
      </>
    );
  }

  return <>{content}</>;
}

const styles = StyleSheet.create({
  screenWide: {
    flex: 1,
    padding: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainerWide: {
    // width: imageContainerWidth,
    // height: imageContainerHeight,
    //borderRadius: dimensionWidth < 380 ? 50 : 75,
    borderWidth: 3,
    borderColor: colors.primary700,
    overflow: "hidden",
    margin: 20,
  },
  imageContainer: {
    // width: dimensionWidth < 380 ? 100 : 300,
    // height: dimensionWidth < 380 ? 100 : 300,
    //borderRadius: dimensionWidth < 380 ? 50 : 150,
    borderWidth: 3,
    borderColor: colors.primary700,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryTextWide: { fontSize: 24, textAlign: "center", marginBottom: 15 },
  summaryText: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  summaryHighlight: {
    color: colors.primary600,

    fontWeight: "bold",
  },
});
