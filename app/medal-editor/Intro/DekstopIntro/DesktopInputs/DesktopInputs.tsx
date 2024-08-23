import React from 'react'
import './DesktopInputs.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'

const DesktopInputs = (props:{
    setCurrentDesc:(e:string)=>void
    setCurrentTit:(e:string)=>void
}) => {

    const {isDarkMode} = useMedalContext()
    const {setCurrentDesc, setCurrentTit} = props

  return (
    <div
        className='desktopInputs'
    >
        <div className="titleInputContainer">
            <span
                className={isDarkMode ? 'dark': 'light'}
            >
                Médaille décernée à
            </span>
            <input
                className={isDarkMode ? 'dark': 'light'}
                type="text"
                placeholder='Mathilde'
                onChange={(e)=>setCurrentTit(e.target.value)}
            />
        </div>
        <div className="descInputContainer">
            <span
                className={isDarkMode ? 'dark': 'light'}
            >
                pour
            </span>
            <div 
                className={`descInput ${isDarkMode ? 'dark': 'light'}`}
            >
                <input 
                    className={isDarkMode ? 'dark': 'light'}
                    type="text"
                    placeholder="Être arrivée à l'heure"
                    onChange={(e)=>setCurrentDesc(e.target.value)}
                />
                <div 
                    className={`sButton ${isDarkMode ? 'dark': 'light'}`}
                >
                    <span>Surprends-moi</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesktopInputs