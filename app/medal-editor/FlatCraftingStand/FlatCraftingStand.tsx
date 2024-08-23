import React from 'react'
import './FlatCraftingStand.scss'
import MobileButtons from './MobileButtons/MobileButtons'
import Presentoir from './Presentoir/Presentoir'
import DisplayedParameter from './DisplayedParameter/DisplayedParameter'
import ActionButton from './ActionButtons/ActionButtons'
import Bandeau from './Bandeau/Bandeau'
import { useMedalContext } from '../context/MedalEditorContext'

const FlatCraftingStand = () => {

  const {isDarkMode, isMobile} = useMedalContext()

  return (
    <div
        className={`flatCraftingStand ${isDarkMode ? 'dark' : 'light'}`}
    >
        <Bandeau/>
        <Presentoir/>
        {
          isMobile &&
          <ActionButton/>
        }
        
        <DisplayedParameter/>
        <MobileButtons/>
    </div>
  )
}

export default FlatCraftingStand