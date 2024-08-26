import { MedalType } from "@/app/types/Medal"
import { createContext, useContext } from "react"

type MedalViewerContextType = {
    medal:MedalType|null
}

export const MedalViewerContext = createContext<MedalViewerContextType>({
    medal:null
})

export const useMedalViewerContext = () => useContext(MedalViewerContext)