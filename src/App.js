import { Title } from "./componentes/Title/Title";
import { TodoInput } from "./componentes/TodoInput/TodoInput";


function App() {
  return (
    <div className="bg-primary min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div>
        <Title />
        <TodoInput />
      </div>      
    </div>
  );
}

export default App;
