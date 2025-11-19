import { StyleSheet, Text, View, Button } from "react-native";

export default function Counter({ count, setCount }) {
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Counter Component</Text>
      <Text style={styles.countText}>Count: {count}</Text>
      <View style={styles.buttonRow}>
        <Button title="Decrement" onPress={decrement} color="#FF6B6B" />
        <Button title="Reset" onPress={reset} color="#95A5A6" />
        <Button title="Increment" onPress={increment} color="#4ECDC4" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
