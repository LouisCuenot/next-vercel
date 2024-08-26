import React from 'react'
import './IntroInput.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'

const IntroInput = (props:{
    label:string,
    placeholder:string,
    maxLength:number,
    onChange:(e:string)=>void,
    val:string
}) => {

    const {label, placeholder,onChange, maxLength,val} = props
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
            value={val}
        />
    </div>
  )
}

export default IntroInput