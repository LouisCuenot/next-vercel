import React from 'react'
import './MetalParameter.scss'
import { CurrentCategorieType } from '../../ParametersSection'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'

const MetalParameter = (props:{
    currentCategorie:CurrentCategorieType,
    hoveredCategorie:CurrentCategorieType
}) => {

    const {currentCategorie, hoveredCategorie} = props

    const {currentMetal, setCurrentMetal} = useMedal()

  return (
    <div
        className={`
            metalParameter
            
            ${currentCategorie === 'metal' ? 'isCurrentParam' :  ''}
        `}
    >
        <span
            style={{textDecoration:currentMetal === 'silver' ? 'underline' : 'none'}} 
            onClick={()=>setCurrentMetal('silver')}
        >
            Argent
        </span>
        <span
            style={{textDecoration:currentMetal === 'gold' ? 'underline' : 'none'}} 
            onClick={()=>setCurrentMetal('gold')}
        >
            Or
        </span>
        <span
            style={{textDecoration:currentMetal === 'bronce' ? 'underline' : 'none'}} 
            onClick={()=>setCurrentMetal('bronce')}
        >
            Bronze
        </span>
    </div>
  )
}

export default MetalParameter