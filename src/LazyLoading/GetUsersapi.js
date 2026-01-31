import axios from 'axios'
import React, { use, useEffect, useState } from 'react'

const GetUsersapi = () => {
    const [user, setUsers] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data)
        }
        getData();
    },[])
    console.log(user)
  return (
    <div>
        <ul>
            {user.map((u)=>(
                <li key={u.name}>{u.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default GetUsersapi
