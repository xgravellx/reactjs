import React from 'react'
import Forms from './NewTodoForm/Forms'

const Header = () => {
  return (
    <div>
        <header className="header">
            <h1>Todos</h1>
            <Forms />
        </header>
    </div>
  )
}

export default Header