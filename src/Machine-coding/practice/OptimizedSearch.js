import React, { useEffect, useState } from 'react'

const OptimizedSearch = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [cache, setCache] = useState({});
    const fetchData= async()=>{
        if(cache[input]){
            console.log("Cahce result",cache[input])
            return;
        }
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
        const jsonData  = await data.json();
        setResult(jsonData.recipes);
        setCache(prev =>({...prev, [input]:jsonData?.recipes}))
    }

    useEffect(()=>{
       const timer= setTimeout(fetchData ,400) 
       return ()=>{
        clearInterval(timer)
       }

    },[input])
  return (
    <div>
        <input type='text' value={input} onChange={(e)=> setInput(e.target.value)} onFocus={()=>setShowResult(true)} onBlur={()=>setShowResult(false)}/>
        <div>
            {showResult && 
            <div>
                 {result.map((r)=>(
                <li key={r.id}>{r.name}</li>
            ))}
            </div>
            }
        </div>
    </div>
  )
}

export default OptimizedSearch
