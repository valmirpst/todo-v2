import { useTodo } from '../../contexts/todo-context';
import Task from './task';

export default function Tasks() {
  const { tasks } = useTodo();

  return (
    <main className="h-full bg-zinc-900 text-zinc-50 flex justify-center">
      <section className="mt-16 min-w-80 sm:min-w-[704px] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="font-bold flex items-center gap-3">
            <span className="text-emerald-500">Tarefas criadas</span>
            <span className="text-xs bg-zinc-800 px-3 py-0.5 rounded-full">{tasks.length}</span>
          </div>
          <div className="font-bold flex items-center gap-3">
            <span className="text-emerald-600">Concluidas</span>
            <span className="text-xs bg-zinc-800 px-3 py-0.5 rounded-full">
              {tasks.filter(task => task.checked).length}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {tasks.map((task, i) => {
            return <Task key={i} task={task} />;
          })}
        </div>
      </section>
    </main>
  );
}
