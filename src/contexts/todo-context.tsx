import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useEffect, useState } from 'react';
import { Task } from '../@types/task';

interface Todo {
  tasks: Task[];
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const TodoContext = createContext<Todo | null>(null);

export function TodoProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('todo_tasks') || '[]'));

  useEffect(() => {
    localStorage.setItem('todo_tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoContext.Provider
      value={{
        tasks: tasks,
        setTasks: setTasks,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) throw new Error('Contexto Todo não encontrado.');
  return { ...context };
}
