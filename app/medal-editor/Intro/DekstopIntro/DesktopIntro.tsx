import React, { useEffect, useRef, useState } from 'react'
import './DesktopIntro.scss'
import { useMedalContext } from '../../context/MedalEditorContext'
import DesktopInputs from './DesktopInputs/DesktopInputs'
import gsap from 'gsap'

const DesktopIntro = () => {

  const { isDarkMode,setIsAnimComplete, setCurrentDescription, setCurrentTitle, setIsIntroCompleted } = useMedalContext()

  const thirdPodRef = useRef<HTMLDivElement>(null)
  const secondPodRef = useRef<HTMLDivElement>(null)
  const firstPodRef = useRef<HTMLDivElement>(null)

  const [currentTit, setCurrentTit] = useState('')
  const [currentDesc, setCurrentDesc] = useState('')

  useEffect(()=>{

    const values = {
      first:100,
      second:100,
      third:100
    }

    gsap.to(values,{
      third:0,
      duration:0.8,
      ease:'power2.in',
      onUpdate:()=>{
        thirdPodRef.current?.style.setProperty('transform',`translateY(${values.third}%)`)
      }
    }).play()

    gsap.to(values,{
      second:0,
      duration:0.8,
      delay:0.2,
      ease:'power2.in',
      onUpdate:()=>{
        secondPodRef.current?.style.setProperty('transform',`translateY(${values.second}%)`)
      }
    }).play()

    gsap.to(values,{
      first:0,
      duration:0.8,
      delay:0.4,
      ease:'power2.in',
      onUpdate:()=>{
        firstPodRef.current?.style.setProperty('transform',`translateY(${values.first}%)`)
      },
      onComplete:()=>setIsAnimComplete(true)
    }).play()

  },[])

  const onComplete = () => {
    setCurrentDescription(currentDesc)
    setCurrentTitle(currentTit)
    setIsIntroCompleted(true)
  }


  return (
    <div
      className={`desktopIntro ${isDarkMode ? 'dark' : 'light'}`}
    >
      <img className='logoDesktop' src="/logo.svg" alt="Le logo de Tu veux une médaille ?" />
      <h1
        className={isDarkMode ? 'dark' : 'light'}
      >
        Tu veux une médaille ?
      </h1>
      <DesktopInputs
        setCurrentDesc={setCurrentDesc}
        setCurrentTit={setCurrentTit}
      />
      <div
        className="podiums"
      >
        <div 
          className={`thirdP pod ${isDarkMode ? 'dark' : 'light'}`}
          ref={thirdPodRef}
          style={{
            transform:'translateY(100%)'
          }}
        >
          <img src="/icons/lauriers3rd.svg" alt="An icon" />
        </div>
        <div 
          className={`secondP pod ${isDarkMode ? 'dark' : 'light'}`}
          ref={secondPodRef}
          style={{
            transform:'translateY(100%)'
          }}
        >
          <img src="/icons/lauriers2nd.svg" alt="An icon" />
        </div>
        <div 
          className={`firstP pod ${isDarkMode ? 'dark' : 'light'}`}
          ref={firstPodRef}
          style={{
            transform:'translateY(100%)'
          }}
        >
          <img src="/icons/lauriers1st.svg" alt="An icon" />
        </div>
      </div>
      <div 
        className={`nextButton ${isDarkMode ? 'dark' : 'light'}`}
        onClick={onComplete}
      >
        <span>Suivant</span>
      </div>
    </div>
  )
}

export default DesktopIntro