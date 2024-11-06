import Header from './components/header';
import Tasks from './components/tasks/tasks';
import { TodoProvider } from './contexts/todo-context';

function App() {
  return (
    <TodoProvider>
      <div className="h-screen grid grid-rows-[auto_1fr]">
        <Header />
        <Tasks />
      </div>
    </TodoProvider>
  );
}

export default App;
