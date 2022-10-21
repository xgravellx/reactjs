import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {

  const [users, setUsers] =useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>Users
      <ul>
        {users.map((users) => ( 
            <li key={users.id}>
              <Link to={`${users.id}`} state={users}>{users.name}</Link>
            </li>
        ))}
      </ul>
    </div>

  )
}

export default Users