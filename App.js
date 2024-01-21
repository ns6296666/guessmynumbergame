import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return <StartGameScreen />;
}

const styles = StyleSheet.create({});
