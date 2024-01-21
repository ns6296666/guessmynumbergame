import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ itemData, onDelete }) {
  const DeleteHandler = () => {
    console.log(itemData);
    onDelete(itemData.item.key);
  };
  return (
    <View style={styles.goalItems}>
      <Pressable
        onPress={DeleteHandler}
        android_ripple={{ color: "lightblue" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalItem}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItems: {
    margin: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    padding: 10,
  },
  pressedItem: { opacity: 0.4 },
  goalItem: {
    color: "#fff",
  },
});
