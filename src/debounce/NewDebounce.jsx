import React, { useEffect, useState } from 'react'

const NewDebounce = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState([]);
    console.log(input);

    const getData = async () =>{
        try{
        const data = await fetch(`https://dummyjson.com/recipes/search?q=${input}`)
        const dataJson = await data.json()
        setOutput(dataJson.recipes)
        }
        catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{
       const timer =  setTimeout(()=>{
            getData();
        },2000)

        return ()=>{
            clearTimeout(timer)
        }

    },[input])

    console.table(output)


  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
        {output.map((recipie)=>(
            <li key={recipie.id}>
                {recipie.name}
            </li>
        ))}
      
    </div>
  )
}

export default NewDebounce
