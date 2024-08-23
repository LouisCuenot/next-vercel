import React from 'react'
import './CollierEditor.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import { CollierType } from '@/app/types/Medal'

const CollierEditor= () => {

  const {currentMedal, setCurrentMedal} = useMedalContext()


  const updateCurrentCollier = (collier:CollierType) => {
    if(!currentMedal) return
    setCurrentMedal({
      collier,
      content:currentMedal.content,
      contours:currentMedal.contours,
      icon:currentMedal.icon,
      metal:currentMedal.metal
    })
  }

  return (
    <>
        <div
            className={`collierBorder ${currentMedal?.collier === 'green'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('green')}
        >
          <div className='c green'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'blue'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('blue')}
        >
          <div className='c blue'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'pink'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('pink')}
        >
          <div className='c pink'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'red'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('red')}
        >
          <div className='c red'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'yellow'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('yellow')}
        >
          <div className='c yellow'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'purple' ? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('purple')}
        >
          <div className='c purple'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'cyan'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('cyan')}
        >
          <div className='c cyan'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'grey'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('grey')}
        >
          <div className='c grey'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'white'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('white')}
        >
          <div className='c white'/>
        </div>
        <div
            className={`collierBorder ${currentMedal?.collier === 'black'? 'active' : ''}`}
            onClick={()=>updateCurrentCollier('black')}
        >
          <div className='c black'/>
        </div>
    </>
  )
}

export default CollierEditor