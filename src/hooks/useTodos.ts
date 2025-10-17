import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const json = await AsyncStorage.getItem("@todos");
        if (json) setTodos(JSON.parse(json));
      } catch (e) {
        console.log("Erro ao carregar todos:", e);
      } finally {
        setLoading(false);
      }
    };
    loadTodos();
  }, []);

  const toggleTodo = async (id: string) => {
    const newTodos = todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(newTodos);
    await AsyncStorage.setItem("@todos", JSON.stringify(newTodos));
  };

  const addTodo = async (title: string) => {
    const newTodo: Todo = { id: Date.now().toString(), title, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    await AsyncStorage.setItem("@todos", JSON.stringify(newTodos));
  };

  return { todos, loading, toggleTodo, addTodo };
}
