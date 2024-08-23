import React, { useEffect, useState } from 'react'
import './Intro.scss'
import DesktopIntro from './DekstopIntro/DesktopIntro'
import MobileIntro from './MobileIntro/MobileIntro'
import { useMedalContext } from '../context/MedalEditorContext'

const Intro = () => {
  const {isMobile} = useMedalContext()


  return (
    <div 
      className='intro'
    >
      {
        isMobile
        ?
        <MobileIntro/>
        :
        <DesktopIntro/>
      }
    </div>
  )
}

export default Intro