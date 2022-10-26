import React, {createContext, useContext, useState} from "react";
import {v4 as uuidv4} from 'uuid';

const TodoContext = createContext();

export const TodoProvider = ({children}) => {
    const [filter, setFilter] = useState('all');
    const [todos, setTodos] = useState([
        {
            id: 1,
            text: 'Learn React',
            completed: true,
        }
    ])

    const addTodo = (text) => {
        setTodos((prev) => [...prev, {id: uuidv4(), completed: false, text}])
    }

    // List Item Checkbox Tick
    const toggleTodo = (id) => {
        const clonedTodos = [...todos];
        const itemIndex = clonedTodos.findIndex((todo) => todo.id === id);
        const item = todos[itemIndex];
        item.completed = !item.completed;
        setTodos(clonedTodos);
    }

    // List Item Remove
    const destroyTodo = (id) => {
        const clonedTodos = [...todos];
        const itemIndex = clonedTodos.findIndex((todo) => todo.id === id);
        clonedTodos.splice(itemIndex, 1);
        setTodos(clonedTodos);
    }


    const values = {
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        destroyTodo,
        filter,
        setFilter,
    }

    return (
        <TodoContext.Provider value={values}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodo = () => {
    const context = useContext(TodoContext);

    if (context === undefined) {
        throw new Error('useTodo hook must be call inside TodoProvider component')
    }

    return context;
}