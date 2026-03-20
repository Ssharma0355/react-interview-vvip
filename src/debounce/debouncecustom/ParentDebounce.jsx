import React, { useEffect, useState } from 'react'
import useDebounce from "./UseDebounce"

const ParentDebounce = () => {
  const [input, setInput] = useState("");
  const debounceQuery = useDebounce(input, 200); 
    
  useEffect(() => {
    if (debounceQuery) {
      console.log("Api", debounceQuery);
    }
  }, [debounceQuery]);

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}  
      />
    </div>
  )
}

export default ParentDebounce;