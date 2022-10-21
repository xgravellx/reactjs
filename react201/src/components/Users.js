import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        /* axios('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                axios(`https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`)
                    .then((res) => console.log(res.data))
            })
            .finally(() => setLoading(false)) */

        getData();
    }, [])

    const getData = async () => {
        const {data:users} = await axios('https://jsonplaceholder.typicode.com/users')
        const {data:posts} = axios(`https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`)
        
        console.log('users', users);
        console.log('posts', posts);
    }

  return (
    <div>
        <h2>Users</h2>
        <div>
            {loading && 'Yükleniyor..'}
        </div>
        <ul>
            {users.map((users) => ( 
                <li key={users.id}>{users.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users