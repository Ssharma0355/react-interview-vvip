import { useCallback, useState } from "react"

export const useSidebar=(close)=>{
    const [isOpen, setIsOpen] = useState(false);

    const side = useCallback(()=>{
        setIsOpen(prevVal => !prevVal);
    },[])

    return [isOpen, side]
}