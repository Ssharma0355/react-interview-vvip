import React, { useEffect, useState } from 'react'

const AutoPractice = () => {
    const [input, setInput] = useState("");
    const[data, setData] = useState([]);

    const fetchData = async()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
        const jsonData = await data.json();
        setData(jsonData.recipes);

    }

    useEffect(()=>{
        const timer = setTimeout(fetchData, 400);
        return ()=>{
            clearInterval(timer)

        }
    },[input])

  return (
    <div>
     <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} />
     <>
     {data.map((d)=>(
        <li key={d.id}>{d.name}</li>
     ))}
     </>

    </div>
  )
}

export default AutoPractice
