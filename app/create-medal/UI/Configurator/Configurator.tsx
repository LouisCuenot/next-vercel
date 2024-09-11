import React, { useEffect } from 'react'
import './Configurator.scss'
import gsap from 'gsap'
import { useMedal } from '../../context/CreateMedalContext'
import ParametersSection from './ParametersSection/ParametersSection'
import { MedalType } from '@/app/types/MedalTypes'

const Configurator = () => {

  const { currentPage, setCurrentPage, currentContours, currentDescription, currentMetal, currentName } = useMedal()

  const backToIntro = () => {
    gsap.to('.toAnimate', {
      opacity: 0,
      y: -30,
      duration: .3,
      ease: 'power1.in',
      onComplete: () => setCurrentPage('intro')
    })
  }

  useEffect(()=>{
    if(currentPage === 'configurator'){
        gsap.to('.toAnimate',{
            opacity:1,
            y:0,
            startAt:{
                opacity:0,
                y:30
            },
            duration:0.3,
            ease:'power1.in',
        })
    }
},[currentPage])

const handleSubmit = async () => { 
  const data:{
    medal:MedalType
  } = {
    medal:{
      metal:currentMetal,
      contours:currentContours,
      name:currentName,
      description:currentDescription
    }
  }

  try {
    const response = await fetch('/api/create-medal',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    if (!response.ok) {
      throw new Error('Failed to submit form')
    }
    const result = await response.json()
    console.log(result)
  }catch(error){
    console.error(error)
  }
}

  return (
    <div
      className='configurator toAnimate'
    >
      <div className="topContent">
        <div className="back">
          <div className="backButton" onClick={backToIntro}>
            <div className='arrowsContainer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 -6.99382e-07L6.99382e-07 8L8 16Z" fill="white" fillOpacity="0.8" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 16L9.41 14.59L3.83 9L16 9L16 7L3.83 7L9.41 1.41L8 -6.99382e-07L6.99382e-07 8L8 16Z" fill="white" fillOpacity="0.8" />
              </svg>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="116" height="116" viewBox="0 0 116 116" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M116 58C116 90.0325 90.0325 116 58 116C25.9675 116 0 90.0325 0 58C0 25.9675 25.9675 0 58 0C90.0325 0 116 25.9675 116 58ZM43.6351 52.2962H39.049V68H31.6488V52.2962H26.8195L27.1322 46.4247H44.0376H44.052H52.0632L53.7309 59.6617H54.1478L55.6417 46.4247H63.2852L59.116 68H48.45L44.0483 46.4769L43.6351 52.2962ZM88.5161 68H81.9497V57.7161H81.7759L79.7261 68H73.6461L71.631 57.7161H71.4573V68H64.9604L65.7942 46.4247H75.0358L76.6687 56.1874H76.9814L78.5796 46.4247H87.717L88.5161 68ZM108 58.5C108 85.8381 85.8381 108 58.5 108C31.1619 108 9 85.8381 9 58.5C9 31.1619 31.1619 9 58.5 9C85.8381 9 108 31.1619 108 58.5ZM110 58.5C110 86.9427 86.9427 110 58.5 110C30.0573 110 7 86.9427 7 58.5C7 30.0573 30.0573 7 58.5 7C86.9427 7 110 30.0573 110 58.5Z" fill="white" />
          </svg>
          <h2>Tu veux<br />une<br />médaille ?</h2>
        </div>
        <div className="bg">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7.08 11.25C7.19839 10.4514 7.51465 9.69513 8 9.05L4.43 5.49C3.0179 7.09637 2.16519 9.11759 2 11.25H7.08ZM9.05 8C9.69613 7.51822 10.4523 7.20543 11.25 7.09V2C9.11759 2.16519 7.09637 3.0179 5.49 4.43L9.05 8ZM12.75 2V7C13.5737 7.1338 14.3487 7.47828 15 8L18.56 4.44C16.9416 3.0143 14.9011 2.15736 12.75 2ZM8 15C7.51822 14.3539 7.20543 13.5977 7.09 12.8H2C2.15394 14.9277 2.99239 16.9484 4.39 18.56L8 15ZM11.25 16.92C10.4514 16.8016 9.69513 16.4853 9.05 16L5.49 19.57C7.09637 20.9821 9.11759 21.8348 11.25 22V16.92ZM16 9.05C16.4818 9.69613 16.7946 10.4523 16.91 11.25H21.91C21.7561 9.12233 20.9176 7.10163 19.52 5.49L16 9.05ZM15 16C14.3539 16.4818 13.5977 16.7946 12.8 16.91V21.91C14.9277 21.7561 16.9484 20.9176 18.56 19.52L15 16ZM16.92 12.75C16.8097 13.5661 16.4931 14.3405 16 15L19.56 18.56C20.9857 16.9416 21.8426 14.9011 22 12.75H16.92Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="bottomContent">
        <div className="finishButton">
          <span>Terminer</span>
        </div>
        <ParametersSection/>
        <div className="finishButton" onClick={handleSubmit}>
          <span>Terminer</span>
        </div>
      </div>
    </div>
  )
}

export default Configurator