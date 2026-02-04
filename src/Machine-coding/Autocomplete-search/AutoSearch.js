import React, { useEffect, useState } from 'react'
import "./Autostyle.css"

const AutoSearch = () => {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [showResult, setShowResults] = useState(false);
    const [chache, setCache] = useState({})

    const fetchData = async()=>{
        if(chache[input]){
            console.log("Chache result",chache[input])
        }
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const jsonData = await data.json();
        setResults(jsonData?.recipes)
        setCache(prev => ({...prev,[input]:jsonData?.recipes}))
    }

    // Debouncing method for api calls after 4 secs 
    useEffect(()=>{
        const timer = setTimeout(fetchData, 400)
        return ()=>{
            clearTimeout(timer)
        }
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
