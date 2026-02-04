import React, { useEffect, useState } from 'react'
import "./Autostyle.css"

const AutoSearch = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [showResult, setShowResults] = useState(false);

    const fetchData = async()=>{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const jsonData = await data.json();
        setResults(jsonData.recipes)
    }
    const debounce =()=>{ setTimeout(()=>{
        fetchData();
    },3000);
}

    useEffect(()=>{
        debounce();
    },[input]);

  return (
    <div>
        <input className='search-input' type='text' value={input} onChange={(e)=>setInput(e.target.value)} onFocus={()=>setShowResults(true)} onBlur={()=>setShowResults(false)}/>
        <div>
                {showResult && 
                <div className='results'>
                   {results.map((result)=>(
                    <li className='result' key={result.id}>{result.name}</li>
                ))}
                  </div>
                }
        </div>
    </div>
  )
}

export default AutoSearch
