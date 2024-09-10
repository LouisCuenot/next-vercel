import React from 'react'
import './UI.scss'
import Intro from './Intro/Intro'
import { useMedal } from '../context/CreateMedalContext'
import Configurator from './Configurator/Configurator'

const UI = () => {

  const {currentPage} = useMedal()

  return (
    <div className='ui'>
      {
        currentPage === 'intro' &&
        <Intro/>
      }
      {
        currentPage === 'configurator' &&
        <Configurator/>
      }
        
    </div>
  )
}

export default UI