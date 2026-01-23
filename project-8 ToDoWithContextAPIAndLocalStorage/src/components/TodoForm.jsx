import React from 'react'

import { useToDoContext } from '../contexts/ToDoContext.js';
function TodoForm() {

    const [inputValue, setInputValue] = React.useState("");
    const { addToDo } = useToDoContext();
     
    const add = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") return;
        addToDo({ todo: inputValue, completed: false });
        setInputValue("");
    };

    return (
        <form  
        onSubmit={add}
        className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

