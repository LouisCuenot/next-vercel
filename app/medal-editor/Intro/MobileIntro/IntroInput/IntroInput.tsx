import React from 'react'
import './IntroInput.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'

const IntroInput = (props:{
    label:string,
    placeholder:string,
    maxLength:number,
    onChange:(e:string)=>void
}) => {

    const {label, placeholder,onChange, maxLength} = props
    const {isDarkMode} = useMedalContext()

  return (
    <div
        className={`introInput ${isDarkMode ? 'dark': 'light'}`}
    >
        <h2
            className={isDarkMode ? 'dark': 'light'}
        >
            {label}
        </h2>
        <input 
            maxLength={maxLength}
            type="text"
            className={isDarkMode ? 'dark': 'light'}
            placeholder={placeholder}
            onChange={(e)=>onChange(e.target.value)}
        />
    </div>
  )
}

export default IntroInput