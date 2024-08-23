import React, { useState } from 'react'
import './FlatButton.scss'
import { ActiveParameterType, useMedalContext } from '../../context/MedalEditorContext'
import gsap from 'gsap'

const FlatButton = (props: {
  content: string,
  param: ActiveParameterType
}) => {

  const { activeParameter, setActiveParameter, isDarkMode, medalRef } = useMedalContext()


  const { content, param } = props

  const flipMedal = (value:number) => {
    if (!medalRef) return
    if (!medalRef.current) return

    const tweenRot = gsap.to(medalRef.current.rotation, {
      z:value,
      duration: 0.8,
      ease: 'power1.inOut',
      delay: 0.1,
    })
    const tweenTransIn = gsap.to(medalRef.current.position, {
      z: 1,
      duration: 0.3,
      ease: 'power2.in'
    })
    const tweenTranOut = gsap.to(medalRef.current.position, {
      z: 0.2,
      duration: 0.3,
      ease: 'power2.out',
      delay: 0.7
    })
    tweenTransIn.play()
    tweenTranOut.play()
    tweenRot.play()
  }


  const handleClick = () => {


    if (activeParameter === param) {
      setActiveParameter(null)
    } else {
      setActiveParameter(param)
      if (param === 'description') {
        if (medalRef?.current && medalRef.current.rotation.z % (Math.PI * 2) < 0.1) {
          flipMedal(Math.PI)
        }
      }else if(param === 'icon' || param === 'contour'|| param ==='title'){
        if (medalRef?.current && medalRef.current.rotation.z % (Math.PI * 2) > 3.13) {
          flipMedal(0)
        }
      }
    }
  }

  return (
    <div
      className={`flatButton ${activeParameter === param && 'digged'} ${isDarkMode ? 'dark' : 'light'}`}
      onClick={handleClick}
    >
      {content}
    </div>
  )
}

export default FlatButton