import React from 'react'
import './ContoursParameter.scss'
import { CurrentCategorieType } from '../../ParametersSection'
import { useMedal } from '@/app/create-medal/context/CreateMedalContext'

const ContoursParameter = (props: {
    currentCategorie: CurrentCategorieType,
    hoveredCategorie: CurrentCategorieType
}) => {

    const { currentCategorie, hoveredCategorie } = props

    const { currentContours,setCurrentContours} = useMedal()

    return (
        <div
            className={`
                contoursParameter
                ${hoveredCategorie === 'decoration' ? 'isCurrentParam' : ''}
                ${currentCategorie === 'decoration' && (!hoveredCategorie || hoveredCategorie === 'decoration')  ? 'isCurrentParam' :  ''}
            `}
        >
            <span style={{textDecoration:currentContours === 'stars' ? 'underline' : 'none'}} onClick={()=>setCurrentContours('stars')}>Etoiles</span>
            <span style={{textDecoration:currentContours === 'lauriers' ? 'underline' : 'none'}} onClick={()=>setCurrentContours('lauriers')}>Lauriers</span>
            <span style={{textDecoration:currentContours === 'points' ? 'underline' : 'none'}} onClick={()=>setCurrentContours('points')}>Points</span>
            <span style={{textDecoration:currentContours === 'tripleLines' ? 'underline' : 'none'}} onClick={()=>setCurrentContours('tripleLines')}>Cercles</span>
            <span style={{textDecoration:currentContours === 'verticalLines' ? 'underline' : 'none'}} onClick={()=>setCurrentContours('verticalLines')}>Lignes</span>
        </div>
    )
}

export default ContoursParameter