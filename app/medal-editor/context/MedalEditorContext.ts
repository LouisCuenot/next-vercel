import { MedalType } from "@/app/types/Medal"
import { createContext, RefObject, useContext } from "react"
import { Group, Mesh } from "three"

export type ActiveParameterType = null|'metal'|'collier'|'contour'|'icon'|'title'|'description'

export type MedalEditorContextType = {
    medalRef:RefObject<Group>|null,
    setMedalRef:(value:RefObject<Group>)=>void,
    currentMedal:MedalType|null,
    setCurrentMedal:(value:MedalType)=>void,
    currentDescription:string,
    setCurrentDescription:(cD:string)=>void,
    currentTitle:string,
    setCurrentTitle:(cT:string)=>void,
    activeParameter:ActiveParameterType,
    setActiveParameter:(value:ActiveParameterType)=>void,
    isDarkMode:boolean,
    setIsDarkMode:(iDM:boolean)=>void,
    isMobile:boolean,
    isAnimComplete:boolean,
    setIsAnimComplete:(iAC:boolean)=>void,
    isIntroCompleted:boolean,
    setIsIntroCompleted:(iIC:boolean)=>void,
    isFinishUIActive:boolean,
    setIsFinishUIActive:(iFUIA:boolean)=>void,
    medalLink:string,
    setMedalLink:(mL:string)=>void
}

export const MedalEditorContext = createContext<MedalEditorContextType>({
    medalRef:null,
    setMedalRef:()=>{},
    currentMedal:null,
    setCurrentMedal:()=>{},
    currentDescription:'',
    setCurrentDescription:()=>{},
    currentTitle:'',
    setCurrentTitle:()=>{},
    activeParameter:null,
    setActiveParameter:()=>{},
    isDarkMode:false,
    setIsDarkMode:()=>{},
    isMobile:false,
    isAnimComplete:false,
    setIsAnimComplete:()=>{},
    isIntroCompleted:false,
    setIsIntroCompleted:()=>{},
    isFinishUIActive:false,
    setIsFinishUIActive:()=>{},
    medalLink:'',
    setMedalLink:()=>{}
})

export const useMedalContext = () => useContext(MedalEditorContext)