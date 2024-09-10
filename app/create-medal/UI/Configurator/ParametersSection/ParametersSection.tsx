import React, { useState } from 'react'
import './ParametersSection.scss'
import MainCategorieButton from './MainCategorieButton/MainCategorieButton'
import SubCategories from './SubCategories/SubCategories'

export type CurrentCategorieType = 'metal'|'decoration'|'name'|'description'|null

const ParametersSection = () => {

    const [currentCategorie, setCurrentCategorie] = useState<CurrentCategorieType>('metal')
    const [hoveredCategorie, setHoveredCategorie] = useState<CurrentCategorieType>(null)

  return (
    <div
        className='parametersSection'
    >
        <div className="mainCategories">
            <MainCategorieButton
                label='Métal'
                value='metal'
                currentCategorie={currentCategorie}
                setCurrentCategorie={(a:CurrentCategorieType)=>setCurrentCategorie(a)}
                hoveredCategorie={hoveredCategorie}
                setHoveredCategorie={(e:CurrentCategorieType)=>setHoveredCategorie(e)}
            />
            <MainCategorieButton
                label='Décoration'
                value='decoration'
                currentCategorie={currentCategorie}
                setCurrentCategorie={(a:CurrentCategorieType)=>setCurrentCategorie(a)}
                hoveredCategorie={hoveredCategorie}
                setHoveredCategorie={(e:CurrentCategorieType)=>setHoveredCategorie(e)}
            />
            <MainCategorieButton
                label='Destinataire'
                value='name'
                currentCategorie={currentCategorie}
                setCurrentCategorie={(a:CurrentCategorieType)=>setCurrentCategorie(a)}
                hoveredCategorie={hoveredCategorie}
                setHoveredCategorie={(e:CurrentCategorieType)=>setHoveredCategorie(e)}
            />
            <MainCategorieButton
                label='Raison'
                value='description'
                currentCategorie={currentCategorie}
                setCurrentCategorie={(a:CurrentCategorieType)=>setCurrentCategorie(a)}
                hoveredCategorie={hoveredCategorie}
                setHoveredCategorie={(e:CurrentCategorieType)=>setHoveredCategorie(e)}
            />
        </div>
        <SubCategories
            currentCategorie={currentCategorie}
            hoveredCategorie={hoveredCategorie}
        />
    </div>
  )
}

export default ParametersSection