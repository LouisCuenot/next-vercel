import React, { useEffect, useState } from 'react'
import MobileDarkModeButton from './MobileDarkModeButton/MobileDarkModeButton'
import DesktopDarkModeButton from './DesktopDarkModeButton/DesktopDarkModeButton'
import { useMedalContext } from '../context/MedalEditorContext'

const DarkModeButtons = () => {


    const { isMobile } = useMedalContext()


  return (
    <>
        {
            isMobile
            ?
            <MobileDarkModeButton/>
            :
            <DesktopDarkModeButton/>
        }
    </>
  )
}

export default DarkModeButtons