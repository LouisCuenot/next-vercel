import React from 'react'
import './DescriptionParameter.scss'
import { CurrentCategorieType } from '../../ParametersSection'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'

const DescriptionParameter = (props:{
    currentCategorie:CurrentCategorieType,
    hoveredCategorie:CurrentCategorieType
}) => {

    const {currentCategorie, hoveredCategorie} = props

    const {currentDescription, setCurrentDescription} = useMedal()
    

  return (
    <div
        className={`
            descriptionParameter
            
            ${currentCategorie === 'description' ? 'isCurrentParam' :  ''}
        `}
    >
      <input
        type='text'
        onChange={(e)=>setCurrentDescription(e.target.value)}
        value={currentDescription}
        placeholder='Raison'
        maxLength={130}
      />
    </div>
  )
}

export default DescriptionParameter