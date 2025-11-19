import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";

export default function App() {
  // Task: Counter States (Number)

  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const addTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, { id: Date.now().toString(), text: todoInput }]);
      setTodoInput("");
    }
  };

  // Task: complete todo functionality

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <SafeAreaView style={[styles.safeArea]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={[styles.title]}>React Native useState Demo</Text>

          <View style={styles.section}>
            <Text style={[styles.sectionTitle]}>Todo List</Text>
            <TextInput
              style={styles.todoInput}
              value={todoInput}
              onChangeText={setTodoInput}
              placeholder="Add a new todo"
            />
            <Button title="Add Todo" onPress={addTodo} color="#4ECDC4" />
            <View style={styles.todoList}>
              {todos.length === 0 ? (
                <Text style={styles.emptyText}>No todos yet!</Text>
              ) : (
                todos.map((todo) => (
                  <View key={todo.id} style={styles.todoItem}>
                    <Text style={styles.todoText}>{todo.text}</Text>
                    <TouchableOpacity onPress={() => deleteTodo(todo.id)}>
                      {/* Task: complete todo functionality */}

                      <Text style={styles.deleteButton}>×</Text>
                    </TouchableOpacity>
                  </View>
                ))
              )}
            </View>
          </View>

          <StatusBar />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  darkBackground: {
    //HINT: Bonus Task
    backgroundColor: "#2C3E50",
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#2C3E50",
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
    color: "#34495E",
  },
  countText: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#2C3E50",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
  input: {
    backgroundColor: "#ECF0F1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#BDC3C7",
  },
  darkInput: {
    backgroundColor: "#34495E",
    borderColor: "#4A5F7F",
    color: "#ECF0F1",
  },
  resultText: {
    fontSize: 16,
    textAlign: "center",
    color: "#4ECDC4",
    fontWeight: "500",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    color: "#2C3E50",
  },
  todoInputRow: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 15,
  },
  todoInput: {
    flex: 1,
    backgroundColor: "#ECF0F1",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#BDC3C7",
  },
  todoList: {
    marginTop: 10,
  },
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ECF0F1",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
    color: "#2C3E50",
  },
  deleteButton: {
    color: "#E74C3C",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  emptyText: {
    textAlign: "center",
    color: "#95A5A6",
    fontStyle: "italic",
  },
  userInfo: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#ECF0F1",
    borderRadius: 8,
  },
  userData: {
    fontSize: 14,
    color: "#34495E",
    marginTop: 5,
  },
  darkText: {
    color: "#ECF0F1",
  },
});
