import React, { useEffect, useState } from 'react'
import axios from 'axios';

const UserList = () => {
    const [userData, setUserData] = useState([]);
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("");
    const [search, setSearch] = useState("");
    const [postData, setPostData] = useState(null);
    


    const addPost = async ()=>{
        try{
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts",{
                title,body
            })
            setPostData(response.data)
        }
        catch(err){
            console.log(err)
        }
      
    }
 
    useEffect(()=>{
        const getUser = async ()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res)=> setUserData(res.data))
        }
        getUser();
    },[])


  return (
    <div>
        <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} />
    
            <h1>Add Title</h1>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
            <br />
            <h1>Add Body</h1>
            <input type="text" value={body} onChange={(e)=> setBody(e.target.value)} />
            <br />
            <button onClick={addPost}>Add Post</button>
            <br />

            {postData && (
                <div>
                    <h1>{postData.id}</h1>
                </div>
            )}
         
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
