'use client'

import React from 'react'
import './CreateMedal.scss'
import CreateMedalContext from './context/CreateMedalContext'
import Scene from './Scene/Scene'
import AssetsContext from './context/AssetsContext'
import UI from './UI/UI'

const CreateMedal = () => {
  return (
    <CreateMedalContext>
        <AssetsContext>
            <Scene/>
            <UI/>
        </AssetsContext>
    </CreateMedalContext>
  )
}

export default CreateMedal