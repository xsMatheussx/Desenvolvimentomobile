import { Todo } from '../types/Todo';

const API_URL = 'https://jsonplaceholder.typicode.com/todos?_limit=10';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error('Failed to fetch todos');
  return response.json();
};
