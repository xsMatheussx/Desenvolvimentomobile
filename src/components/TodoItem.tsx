import React from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import type { Todo } from "../hooks/useTodos"; // caminho correto

interface Props {
  todo: Todo;
  onToggle: (id: string) => void;
}

export default function TodoItem({ todo, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, todo.completed && styles.completed]}>
        {todo.title}
      </Text>
      <Switch value={todo.completed} onValueChange={() => onToggle(todo.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "space-between", marginVertical: 8 },
  text: { fontSize: 16 },
  completed: { textDecorationLine: "line-through", color: "gray" },
});
