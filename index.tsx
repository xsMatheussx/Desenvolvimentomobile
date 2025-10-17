import React, { useState } from "react";
import { ActivityIndicator, Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import TodoItem from "./src/components/TodoItem";
import { useTodos } from "./src/hooks/useTodos";

export default function Home() {
  const { todos, loading, toggleTodo, addTodo } = useTodos();
  const [text, setText] = useState("");

  if (loading) return <ActivityIndicator size="large" style={styles.loader} />;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicionar nova tarefa"
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Adicionar"
        onPress={() => {
          if (text.trim() === "") return;
          addTodo(text);
          setText("");
        }}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TodoItem todo={item} onToggle={toggleTodo} />}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 },
});
