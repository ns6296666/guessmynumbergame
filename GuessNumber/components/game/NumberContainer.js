import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import colors from "../../constants/colors";

function NumberContainer({ children }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={width > 500 ? styles.wideContainer : styles.container}>
      <Text style={styles.number}>{children}</Text>
    </View>
  );
}

export default NumberContainer;
const dimensionWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  wideContainer: {
    borderWidth: 4,
    borderColor: colors.primary500,
    padding: dimensionWidth < 380 ? 12 : 12,
    borderRadius: 8,
    marginHorizontal: 10,
    verticalAlign: "middle",
    alignItems: "center",
    justifyContent: "center",
  },
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
