import React from 'react'
import './MetalEditor.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import { MetalType } from '@/app/types/Medal'

const MetalEditor = () => {

  const {currentMedal, setCurrentMedal} = useMedalContext()


  const updateCurrentMedal = (metal:MetalType) => {
    if(!currentMedal) return
    setCurrentMedal({
      collier:currentMedal.collier,
      content:currentMedal.content,
      contours:currentMedal.contours,
      icon:currentMedal.icon,
      metal
    })
  }

  return (
    <>
        <div
            className={`mBorder ${currentMedal?.metal === 'gold'? 'active' : ''}`}
            onClick={()=>updateCurrentMedal('gold')}
        >
          <div className='m gold'/>
        </div>
        <div
            className={`mBorder ${currentMedal?.metal === 'silver'? 'active' : ''}`}
            onClick={()=>updateCurrentMedal('silver')}
        >
          <div className='m silver'/>
        </div>
        <div
            className={`mBorder ${currentMedal?.metal === 'bronce'? 'active' : ''}`}
            onClick={()=>updateCurrentMedal('bronce')}
        >
          <div className='m bronce'/>
        </div>
    </>
  )
}

export default MetalEditor