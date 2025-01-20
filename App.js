import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
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
        <TextInput style={styles.input} placeholder={"Write a new task:"} />
        <TouchableOpacity>
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
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
    width: 250,
    backgroundColor: "#FFF",
  },
  addWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    marginLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
  },
  addText: {},
});
