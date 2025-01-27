import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Task from "./components/task";

export default function App() {
  const [tasks, setTasks] = useState("");
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    if (tasks.trim().length > 0) {
      Keyboard.dismiss();
      setTaskItems([...taskItems, tasks]);
      setTasks("");
    }
  };
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Today's tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {/* Render tasks */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Input Section */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a new task:"}
          value={tasks}
          onChangeText={(text) => setTasks(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    padding: 20,
  },
  tasksWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 10,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 60,
    width: "70%",
    backgroundColor: "#FFF",
    borderColor: "#C0C0C0",
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 60,
    backgroundColor: "#C0C0C0",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
  },
});
