'use client'

import { ContoursType, MetalType } from "@/app/types/MedalTypes"
import { createContext, ReactNode, useContext, useState } from "react"

export type CreateMedalContextType = {
    currentMetal:MetalType, 
    setCurrentMetal:(m:MetalType)=>void,
    currentContours:ContoursType,
    setCurrentContours:(c:ContoursType)=>void,
    currentName:string,
    setCurrentName:(n:string)=>void,
    currentDescription:string,
    setCurrentDescription:(d:string)=>void
}

const cmContext = createContext<CreateMedalContextType>({
    currentMetal:'gold',
    setCurrentMetal:()=>{},
    currentContours:'lauriers',
    setCurrentContours:()=>{},
    currentName:'',
    setCurrentName:()=>{},
    currentDescription:'',
    setCurrentDescription:()=>{}
})

const CreateMedalContext = (props:{
    children:ReactNode
}) => {

    const {children} = props

    const [currentMetal, setCurrentMetal] = useState<MetalType>('gold')
    const [currentContours, setCurrentContours] = useState<ContoursType>('lauriers')
    const [currentName, setCurrentName] = useState<string>('')
    const [currentDescription,setCurrentDescription] = useState<string>('')


    return(
        <cmContext.Provider
            value={{
                currentMetal,
                setCurrentMetal,
                currentContours,
                setCurrentContours,
                currentName,
                setCurrentName,
                currentDescription,
                setCurrentDescription
            }}
        >
            {children}
        </cmContext.Provider>
    )
}

export const useMedal = () => useContext(cmContext)

export default CreateMedalContext