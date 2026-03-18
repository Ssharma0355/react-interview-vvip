import React, { useEffect, useState } from 'react'

const ListUser = () => {
    const [users, setUser] = useState([])
    const getData = async()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const dataJson = await data.json()
        setUser(dataJson)
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        {users.map((user)=>(
            <li key={user.id}>
                <h1>{user.title}</h1>
                <p>{user.body}</p>
                </li>
        ))}
      
    </div>
  )
}

export default ListUser
