import React, { useEffect, useState } from 'react'

const AutoSearch = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([])

    const fetchData = async()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const jsonData = await data.json();
        setResults(jsonData.recipes)
    }

    useEffect(()=>{
        fetchData();
    },[input]);

    
  return (
    <div>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
        <div>
            {results.map((result)=>(
                <li key={result.id}>{result.name}</li>
            ))}
        </div>
    </div>
  )
}

export default AutoSearch
