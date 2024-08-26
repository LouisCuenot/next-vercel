import React from 'react'
import './FinishUI.scss'
import { useMedalContext } from '../context/MedalEditorContext'
import { MedalType } from '@/app/types/Medal'
import {redirect} from 'next/navigation'
import Link from 'next/link'

const FinishUI = () => {

    const {isDarkMode, setIsFinishUIActive, currentMedal, currentTitle, currentDescription, setMedalLink, medalLink} = useMedalContext()

    const handleSubmit = async () => {
        
        if(!currentMedal) return

        const data:{
            medal:MedalType
        } = {
            medal:{
                metal:currentMedal.metal,
                collier:currentMedal.collier,
                contours:currentMedal.contours,
                icon:currentMedal.icon,
                content:{
                    title:currentTitle,
                    mission:currentDescription,
                    date:Date.now().toString()
                }
            }
        }

        try {
            const response = await fetch('/api/create-medal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            const result = await response.json()
            setMedalLink(result.id)

        } catch (error) {
            console.error(error)
        }
    }


  return (
    <div
        className={`finishUI ${isDarkMode ? 'dark' : 'light'}`}
    >
        <h3
            className={isDarkMode ? 'dark' : 'light'}
        >
            Souhaitez-vous terminer et envoyer votre médaille ?
        </h3>
        <div className="finishButtonsContainer">
            <div 
                className={`finishButton ${isDarkMode ? 'dark' : 'light'}`}
                onClick={()=>setIsFinishUIActive(false)}
            >
                Non, poursuivre
            </div>
            <div 
                className={`finishButton ${isDarkMode ? 'dark' : 'light'}`}
                onClick={handleSubmit}
            >
                Oui, j'envoie
            </div>
        </div>
        {
            medalLink &&
            <Link
              href={`/medal/${medalLink}`}  
            >
                View medal
            </Link>
        }
    </div>
  )
}

export default FinishUI