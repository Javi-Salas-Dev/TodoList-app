import { useEffect, useState } from "react";
import { Title } from "./componentes/Title/Title";
import { TodoInput } from "./componentes/TodoInput/TodoInput";
import { TodoList } from "./componentes/TodoList/TodoList";


function App() {

const [todos, setTodos] = useState ([
  {
    id: 1,
    title: 'Ver final de la champions',
    completed: false,
  },
  {
    id: 2,
    title: 'Leer un libro',
    completed: false,
  },
  {
    id: 3,
    title: 'Hacer la cena',
    completed: false,
  },
  {
    id: 4,
    title: 'Estudiar dos horas',
    completed: false,
  },
])

const [activeFilter, setActiveFilter] = useState('all');
const [filteredTodos, setFilteredTodos] = useState(todos)

const addTodo = (title) => {
  const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

  const newTodo = {
    id: lastId + 1,
    title,
    completed: false
  }

  const todoList = [...todos]
  todoList.push(newTodo);
  setTodos(todoList);
}

const handleSetComplete = (id) => {
  const updateList = todos.map(todo => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed}
    }
    return todo
  })
  setTodos(updateList)
}

const handleClearComplete = () => {
  const updatedList = todos.filter(todo => !todo.completed);
  setTodos(updatedList);
};

const handleDelete = (id) => {
  const updatedList = todos.filter(todo => todo.id !== id);
  setTodos(updatedList);
}

const showAllTodos = () => {
  setActiveFilter('all')
}

const showActiveTodos = () => {
  setActiveFilter('active')
}

const showCompleted = () => {
  setActiveFilter('completed')
}

useEffect(() => {
  if(activeFilter === 'all') {
    setFilteredTodos(todos);
  } else if (activeFilter === 'active') {
      const activeTodos = todos.filter(todo => todo.completed === false); 
      setFilteredTodos(activeTodos); 
  } else if (activeFilter === 'completed') {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
  }
}, [activeFilter, todos]);

  return (
    <div className="bg-primary min-h-screen h-full text-gray-100 flex items-center font-inter justify-center py-20 px-5">
    {/* opción de fondo: bg-optional-background bg-no-repeat bg-cover */}
      <div>
        <Title />
        <TodoInput addTodo={addTodo}/>
        <TodoList 
          todos={filteredTodos}
          activeFilter={activeFilter}
          handleSetComplete={handleSetComplete}
          handleDelete={handleDelete}
          showActiveTodos={showActiveTodos}
          showAllTodos={showAllTodos}
          showCompleted={showCompleted}
          handleClearComplete={handleClearComplete}
        />
      </div>
    </div>
  );
}

export default App;
