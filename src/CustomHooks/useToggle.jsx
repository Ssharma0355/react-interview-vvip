import { useCallback, useState } from "react"

export const useToggle=({intialValue})=>{

    const [value, setValue] = useState(false);
    const toggle = useCallback(()=>{
        setValue(prevVal => !prevVal)
    },[])

    return [value, toggle]
}