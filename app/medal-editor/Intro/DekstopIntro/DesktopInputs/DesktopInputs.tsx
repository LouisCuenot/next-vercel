import React from 'react'
import './DesktopInputs.scss'
import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'

const DesktopInputs = (props:{
    setCurrentDesc:(e:string)=>void
    setCurrentTit:(e:string)=>void,
    currentTit:string,
    currentDesc:string
}) => {

    const {isDarkMode} = useMedalContext()
    const {setCurrentDesc, setCurrentTit, currentDesc, currentTit} = props

    const titleOptions = [
        'Elena',
        'Matthieu',
        'Aïcha',
        'Lucas',
        'Mathilde',
        'Jamal',
        'Emma',
        'Omar',
        'Maya',
        'Thibault',
        'Juliette',
        'Robin',
        'Leila',
        'Mohammed',
        'Inès',
        'Thiago',
        'Yasmine',
        'Felipe',
        'Chloé',
        'Cameron'
      ]
    
      const descOptions = [
        'Avoir fait la vaisselle',
        'Avoir rangé l’appartement',
        'Avoir fait du sport',
        'Avoir sorti les poubelles',
        'Être arrivé à l’heure',
        'Avoir préparé le repas',
        'Avoir rendu son mémoire',
        'Être allé faire les courses',
        'Avoir mangé sainement',
        'Avoir baissé la cuvette',
        'Être ponctuel',
        'Avoir épluché les légumes',
        'Avoir gagné le tournoi'
      ]
    
      const surpriseMe = () => {
        setCurrentTit(titleOptions[Math.floor(Math.random()*(titleOptions.length-0.001))])
        setCurrentDesc(descOptions[Math.floor(Math.random()*(descOptions.length-0.001))])
      }

  return (
    <div
        className='desktopInputs'
    >
        <div className="titleInputContainer">
            <span
                className={isDarkMode ? 'dark': 'light'}
            >
                Médaille décernée à
            </span>
            <input
                className={isDarkMode ? 'dark': 'light'}
                type="text"
                placeholder='Mathilde'
                onChange={(e)=>setCurrentTit(e.target.value)}
                value={currentTit}
            />
        </div>
        <div className="descInputContainer">
            <span
                className={isDarkMode ? 'dark': 'light'}
            >
                pour
            </span>
            <div 
                className={`descInput ${isDarkMode ? 'dark': 'light'}`}
            >
                <input 
                    className={isDarkMode ? 'dark': 'light'}
                    type="text"
                    placeholder="Être arrivée à l'heure"
                    onChange={(e)=>setCurrentDesc(e.target.value)}
                    value={currentDesc}
                />
                <div 
                    className={`sButton ${isDarkMode ? 'dark': 'light'}`}
                    onClick={surpriseMe}
                >
                    <span>Surprends-moi</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesktopInputs