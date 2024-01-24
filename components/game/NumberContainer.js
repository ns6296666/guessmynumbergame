import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const dimensionWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.primary500,
    padding: dimensionWidth < 380 ? 12 : 24,
    borderRadius: 8,
    marginVertical: dimensionWidth < 380 ? 20 : 24,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: dimensionWidth < 380 ? 28 : 36,
    color: colors.primary500,
    fontWeight: "bold",
  },
});
