import { useContext } from "react"
import { ActivityContext } from "../context/ActivityContext"

export const useActivity = ()=>{

    const context = useContext(ActivityContext)

    if(!context){
        throw new Error('El hook debe ser utilizado con un context de ActivityProvider');
    }

    return context
} 