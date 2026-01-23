import { useContext, createContext } from "react";

export const ToDoContext = createContext({
    todos : [
        {
            id : 1,
            todo : "Sample ToDo",
            isCompleted : false
        }
    ],
    addToDo : (todo) => {},
    deleteToDo : (id) => {},
    toggleToDo : (id) => {},
    updatetodo : (id, todo) => {}
});

export const useToDoContext = () => {
    return useContext(ToDoContext)
};

export const ToDoProvider = ToDoContext.Provider;