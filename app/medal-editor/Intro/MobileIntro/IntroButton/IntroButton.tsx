import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import './IntroButton.scss'
import React from 'react'

const IntroButton = (props:{
    label:string,
    onClick:()=>void
}) => {
    const {label, onClick} = props
    const {isDarkMode} = useMedalContext()

  return (
    <div
        className={`introButton ${isDarkMode ? 'dark': 'light'}`}
        onClick={onClick}
    >
        <span
            className={isDarkMode ? 'dark': 'light'}
        >
            {label}
        </span>
    </div>
  )
}

export default IntroButton