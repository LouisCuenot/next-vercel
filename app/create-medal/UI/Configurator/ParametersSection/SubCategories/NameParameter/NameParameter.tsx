import React from 'react'
import './NameParameter.scss'
import { CurrentCategorieType } from '../../ParametersSection'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'

const NameParameter = (props: {
    currentCategorie: CurrentCategorieType,
    hoveredCategorie: CurrentCategorieType
}) => {

    const { currentCategorie, hoveredCategorie } = props

    const {currentName, setCurrentName} = useMedal()

    return (
        <div
            className={`
                nameParameter
                
                ${currentCategorie === 'name' ? 'isCurrentParam' :  ''}
            `}
        >
            <input
        type='text'
        onChange={(e)=>setCurrentName(e.target.value)}
        value={currentName}
        placeholder='Destinataire'
        maxLength={20}
      />
        </div>
    )
}

export default NameParameter