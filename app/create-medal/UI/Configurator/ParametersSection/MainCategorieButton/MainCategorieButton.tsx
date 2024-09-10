import React from 'react'
import './MainCategorieButton.scss'
import { CurrentCategorieType } from '../ParametersSection'

const MainCategorieButton = (props:{
    label:string,
    value:CurrentCategorieType,
    currentCategorie:CurrentCategorieType
    setCurrentCategorie:(v:CurrentCategorieType)=>void
    hoveredCategorie:CurrentCategorieType
    setHoveredCategorie:(v:CurrentCategorieType)=>void
}) => {

    const {
        label,
        value,
        currentCategorie,
        setCurrentCategorie,
        hoveredCategorie,
        setHoveredCategorie
    } = props

  return (
    <div
        className='mainCategorieButton'
        onClick={()=>setCurrentCategorie(currentCategorie === value ? null : value)}
        onPointerEnter={()=>setHoveredCategorie(value)}
        onPointerLeave={()=>setHoveredCategorie(null)}
    >
        <span>{label}</span>
        <div 
            className={
                `point 
                ${hoveredCategorie === value ? 'active' : ''}
                ${currentCategorie === value ? (hoveredCategorie && hoveredCategorie !== value) ? 'active tr' : 'active' : ''}
                `
            }
        />
    </div>
  )
}

export default MainCategorieButton