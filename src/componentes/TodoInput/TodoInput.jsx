import { useState } from "react"

const TodoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    const handleTodo = (e) => {
        if (e.key.toLowerCase() === 'enter') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none"  >
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
                type="text" 
                className="focus:shadow-lg font-inter focus:shadow-text_secundary pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 easy-in-out"
                placeholder="Cuál es el siguiente..."
                value={title}
                onChange={e => setTitle(e.target.value)} 
                onKeyDown={e => handleTodo(e)} />
        </div>
    )
}


export { TodoInput }