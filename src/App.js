import { Title } from "./componentes/Title/Title";
import { Todo } from "./componentes/Todo/Todo";
import { TodoInput } from "./componentes/TodoInput/TodoInput";
import { TodoList } from "./componentes/TodoList/TodoList";


function App() {
  return (
    <div className="bg-primary min-h-screen h-full text-gray-100 flex items-center font-inter justify-center py-20 px-5">
      <div>
        <Title />
        <TodoInput />
        <TodoList>
          <Todo />
          <Todo />
          <Todo />
        </TodoList>
      </div>
    </div>
  );
}

export default App;
