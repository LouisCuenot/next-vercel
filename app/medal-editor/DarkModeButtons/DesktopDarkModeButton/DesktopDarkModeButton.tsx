import React from 'react'
import { useMedalContext } from '../../context/MedalEditorContext'
import './DesktopDarkModeButton.scss'

const DesktopDarkModeButton = () => {

  const {isDarkMode, setIsDarkMode} = useMedalContext()


  return (
    <div
      className={`desktopDarkModeButton ${isDarkMode ? 'dark' : 'light'}`}
      onClick={()=>setIsDarkMode(!isDarkMode)}
    >
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  )
}

export default DesktopDarkModeButton