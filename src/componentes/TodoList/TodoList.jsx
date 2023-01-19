const TodoList = ({ children }) => {
    return (
        <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-2-xl">
            {children}
        </div>
    )

}

export { TodoList };