import { StyleSheet, View, Pressable, Text } from "react-native";

export default function Button({ label, onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 43,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
    paddingHorizontal: 32,
    paddingVertical: 16,
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
