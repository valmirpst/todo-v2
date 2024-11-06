import { BookCheck, Plus } from 'lucide-react';
import { useTodo } from '../contexts/todo-context';
import { useState } from 'react';
import { Task } from '../@types/task';

export default function Header() {
  const { setTasks } = useTodo();

  const [inputValue, setInputValue] = useState('');

  function handleNewTask() {
    if (!inputValue) window.alert('A tarefa não pode estar vazia!');
    const date = new Date();
    const newTask: Task = {
      text: inputValue,
      updated: date,
    };

    setTasks((prev) => [...prev, newTask]);
    setInputValue('');
  }

  return (
    <header className="h-32 sm:h-40 bg-zinc-950 text-zinc-50 flex items-center justify-center relative">
      <div className="flex items-center gap-4">
        <BookCheck className="stroke-emerald-500 size-8" />
        <p>
          <span className="font-bold text-4xl text-emerald-500">to</span>
          <span className="font-bold text-4xl text-emerald-600">do</span>
        </p>
      </div>
      <div className="min-w-80 sm:min-w-[704px] flex items-center gap-1 sm:gap-3 absolute bottom-0 translate-y-1/2">
        <input
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleNewTask();
          }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full bg-zinc-800 py-2 px-3 sm:p-3 rounded"
          type="text"
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type="button"
          onClick={handleNewTask}
          className="py-2 px-3 sm:py-3 sm:px-6 bg-emerald-800 rounded flex items-center justify-center gap-1 sm:gap-3"
        >
          <span className="font-medium">Criar</span>
          <Plus className="size-4 sm:size-5 stroke-zinc-50" />
        </button>
      </div>
    </header>
  );
}
