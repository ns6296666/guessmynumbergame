import { StyleSheet, View, Text } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <LinearGradient
      colors={["#63022b", "#f7cf02"]}
      style={styles.rootContainer}
    >
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: { flex: 1, backgroundColor: "#f7cf02" },
});
