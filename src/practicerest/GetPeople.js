import React, { useEffect, useState } from 'react'

const GetPeople = () => {
    const[people, setPeople] = useState([]);
    useEffect(()=>{
        const getPeople= async()=>{
            const data = await fetch("http://localhost:8000/")
            const resData = await data.json();
            setPeople(resData)
        }
        getPeople();
    },[])
  return (
    <div>
        {people.map((p)=>(
            <li key={p.name}>{p.name}</li>
        ))}
      
    </div>
  )
}

export default GetPeople
