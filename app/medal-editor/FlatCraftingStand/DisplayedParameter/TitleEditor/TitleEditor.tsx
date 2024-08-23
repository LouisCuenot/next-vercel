import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import React, { ChangeEvent } from 'react'
import './TitleEditor.scss'

const TitleEditor = () => {
  const { isDarkMode, setCurrentTitle, currentTitle } = useMedalContext()


  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
      setCurrentTitle(e.target.value)
  }

  return (
      <div className='titleEditor'>
          <input
              type='text'
              maxLength={20}
              className={` ${isDarkMode ? 'dark' : 'light'}`}
              placeholder={currentTitle.length > 0 ? currentTitle : 'Exemple: Meilleur papa (max. 20 caractères)'}
              onChange={handleChange}
              value={currentTitle}
          />
      </div>
  )
}

export default TitleEditor