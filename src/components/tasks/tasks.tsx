import { useTodo } from '../../contexts/todo-context';

export default function Tasks() {
  const { tasks } = useTodo();

  return (
    <main className="h-full bg-zinc-900 text-zinc-50">
      {tasks.map((task) => {
        return <div>{task.text}</div>;
      })}
    </main>
  );
}
