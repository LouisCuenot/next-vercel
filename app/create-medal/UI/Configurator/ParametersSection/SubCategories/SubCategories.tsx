import React from 'react'
import './SubCategories.scss'
import { CurrentCategorieType } from '../ParametersSection'
import MetalParameter from './MetalParameter/MetalParameter'
import ContoursParameter from './ContoursParameter/ContoursParameter'
import NameParameter from './NameParameter/NameParameter'
import DescriptionParameter from './DescriptionParameter/DescriptionParameter'


const SubCategories = (props:{
    currentCategorie:CurrentCategorieType,
    hoveredCategorie:CurrentCategorieType
}) => {

    const {currentCategorie,hoveredCategorie} = props

  return (
    <div
        className='subCategories'
    >
        <MetalParameter
            currentCategorie={currentCategorie}
            hoveredCategorie={hoveredCategorie}
        />
        <ContoursParameter
            currentCategorie={currentCategorie}
            hoveredCategorie={hoveredCategorie}
        />
        <NameParameter
            currentCategorie={currentCategorie}
            hoveredCategorie={hoveredCategorie}
        />
        <DescriptionParameter
            currentCategorie={currentCategorie}
            hoveredCategorie={hoveredCategorie}
        />
    </div>
  )
}

export default SubCategories