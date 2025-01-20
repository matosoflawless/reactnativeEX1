import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from "react-native";
import Task from "./components/task";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Todays taks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Todays Tasks</Text>
        <View style={styles.items}>
          {/* Here goes the tasks */}
          <Task text={"Task 1"} />
          <Task text={"Task 2"} />
          <Task text={"Task 3"} />
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={"Write a new task:"} />{" "}
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    padding: 40,
  },
  tasksWrapper: {
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  items: {},
});
