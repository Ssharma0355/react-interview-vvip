import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserList = () => {
    const [userData, setUserData] = useState([]);
    

    useEffect(()=>{
        const getUser = async ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=> setUserData(res.data))
        }
        getUser();
    },[])

  return (
    <div>
        <ul>
            User Data
            {userData.map((user)=>(
                <li key={user.id}>{user.title}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default UserList
