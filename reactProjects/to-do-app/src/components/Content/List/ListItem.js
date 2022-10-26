import React from 'react'
import { useTodo } from '../../../contexts/TodoContext'

const ListItem = ({todo}) => {

  const {toggleTodo, destroyTodo} = useTodo();

  const handleChange = (id) => {
    toggleTodo(id);
  }
  const handleDestroy = (id) => {
    destroyTodo(id);
  }

  return (
    <div>
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          <div className="view">
              <input 
                className="toggle" 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => handleChange(todo.id)} 
              />
              <label>{todo.text}</label>
              <button className="destroy" onClick={() => handleDestroy(todo.id)}></button>
          </div>
      </li>
    </div>
  )
}

export default ListItem