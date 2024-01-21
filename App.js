import { useState } from "react";
import { Button, FlatList, Modal, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [modalShown, setModalShown] = useState(false);

  const addGoalHandler = (goal) => {
    setGoalsList((prev) => [...prev, { text: goal, key: Math.random() }]);
  };

  const DeleteHandler = (id) => {
    setGoalsList((currentList) =>
      currentList.filter((item) => item.key !== id)
    );
  };

  const StartGoalHandler = () => {
    setModalShown(true);
  };

  const closeModalHandler = () => {
    setModalShown(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add new Goal"
          color="#cf89f5"
          onPress={StartGoalHandler}
        />
        <GoalInput
          addGoalHandler={addGoalHandler}
          visible={modalShown}
          onAdd={StartGoalHandler}
          onClose={closeModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goalsList}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDelete={DeleteHandler} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 4,
  },
});
