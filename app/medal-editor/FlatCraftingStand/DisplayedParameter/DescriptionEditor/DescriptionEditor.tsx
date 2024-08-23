import React, { ChangeEvent, useRef } from 'react'
import './DescriptionEditor.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'

const DescriptionEditor = () => {

    const { isDarkMode, setCurrentDescription, currentDescription } = useMedalContext()


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCurrentDescription(e.target.value)
    }

    return (
        <div className='descriptionEditor'>
            <input
                type='text'
                maxLength={200}
                className={` ${isDarkMode ? 'dark' : 'light'}`}
                placeholder={currentDescription.length > 0 ? currentDescription : 'Exemple: Mathilde (max. 200 caractères)'}
                onChange={handleChange}
                value={currentDescription}
            />
        </div>
    )
}

export default DescriptionEditor