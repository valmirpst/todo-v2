import { Check, Trash2 } from 'lucide-react';
import { Task as TaskType } from '../../@types/task';
import { useTodo } from '../../contexts/todo-context';

export default function Task({ task }: { task: TaskType }) {
  const { tasks, setTasks } = useTodo();

  return (
    <div
      tabIndex={0}
      onClick={() => {
        const index = tasks.findIndex(prev => prev.text === task.text);
        const tasksTmp = tasks.filter(prevTask => prevTask.text !== task.text);
        tasksTmp.splice(index, 0, {
          text: task.text,
          checked: !task.checked,
          updated: task.updated,
        });
        setTasks(tasksTmp);
      }}
      className="bg-zinc-800 max-w-80 sm:max-w-[704px] min-h-[74px] px-6 py-3 border border-zinc-800 rounded-lg grid grid-cols-[auto_1fr_auto] items-center gap-4 group hover:border-zinc-700 transition"
    >
      <label
        htmlFor="check_input"
        className={`${
          task.checked ? 'bg-emerald-800 group-hover:bg-emerald-800/75' : 'bg-transparent group-hover:bg-emerald-800/25'
        } size-[18px] border-2 border-emerald-800 rounded-full flex items-center justify-center transition cursor-pointer`}
      >
        {task.checked && <Check size={12} />}
        <input type="checkbox" name="check_input" id="check_input" className="hidden" />
      </label>
      <span>{task.text}</span>
      <button
        type="button"
        onClick={e => {
          e.stopPropagation();
          setTasks(prev => prev.filter(prevTask => prevTask.text !== task.text));
        }}
        className="size-max"
      >
        <Trash2 size={18} className="stroke-zinc-600 hover:stroke-red-700 transition" />
      </button>
    </div>
  );
}
