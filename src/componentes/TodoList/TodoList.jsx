import { TodoFilters } from "../TodoFilters";
import { Todo } from "../Todo/Todo"

const TodoList = ({ todos, handleSetComplete, handleDelete, activeFilter, showActiveTodos, showAllTodos, showCompleted, handleClearComplete }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2-xl">
            {todos.map(todo => {
                return (
                    <Todo 
                        key={todo.id} 
                        todo={todo} 
                        handleSetComplete={handleSetComplete}
                        handleDelete={handleDelete}
                    />
                )
            })}
            <TodoFilters 
            activeFilter={activeFilter}
            total={todos.length}
            showActiveTodos={showActiveTodos}
            showAllTodos={showAllTodos}
            showCompleted={showCompleted}
            handleClearComplete={handleClearComplete}
            />
        </div>
    )

}

export { TodoList };