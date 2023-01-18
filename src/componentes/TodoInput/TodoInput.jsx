const TodoInput = () => {
    return (
        <div className="mt-6 relative">
            <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none"  >
                <span className="border border-gray-500 border-solid p-3 rounded-full"></span>
            </div>
            <input 
                type="text" 
                className="focus:shadow-lg font-inter focus:shadow-text_secundary pl-12 w-full py-4 bg-gray-700 rounded-xl outline-none transition-all duration-300 easy-in-out"
                placeholder="Cuál es el siguiente...">    
            </input>
        </div>
    )
}


export { TodoInput }