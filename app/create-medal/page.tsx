'use client'

import React from 'react'
import './CreateMedal.scss'
import CreateMedalContext from './context/CreateMedalContext'
import Scene from './Scene/Scene'
import AssetsContext from './context/AssetsContext'

const CreateMedal = () => {
  return (
    <CreateMedalContext>
        <AssetsContext>
            <Scene/>
        </AssetsContext>
    </CreateMedalContext>
  )
}

export default CreateMedal