import React, { useState } from 'react'

const defaultItems = [
    {
        name: 'Item A'
    },
    {
        name: 'Item B'
    },
    {
        name: 'Item C'
    }
]

const Todo = () => {

    const [text, setText] = useState('');
    const [items, setItems] = useState(defaultItems);

    const handleAddItem = () => {
        setItems([...items, {name: text}])
        setText('');
    }

  return (
    <div>
        <input title='input' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleAddItem}>Add</button>
        <br />

        {
            items.map((item, key) => (
                <div key={key}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Todo