import React, { useEffect, useRef, useState } from 'react'

import Base from './Base/Base'
import Contours from './Contours/Contours'
import { Group } from 'three'
import { useMedal } from '../../context/CreateMedalContext'
import gsap from 'gsap'
import {CustomEase} from 'gsap/CustomEase'
gsap.registerPlugin(CustomEase)


const Medal = () => {

    const { currentPage, currentMetal, currentContours } = useMedal()

    const medalRef = useRef<Group>(null!)

    useEffect(() => {
        if (currentPage === 'configurator') {
            gsap.killTweensOf(medalRef.current.scale)
            gsap.killTweensOf(medalRef.current.position)
            gsap.killTweensOf(medalRef.current.rotation)
            gsap.to(medalRef.current.scale, {
                x: 1,
                y: 1,
                z: 1,
                duration: 0.6,
                ease: 'power2.out'
            })
            gsap.to(medalRef.current.position, {
                y: 0,
                duration: 0.6,
                ease: 'power2.out'
            })
            gsap.to(medalRef.current.rotation, {
                y: -Math.PI * 2,
                duration: 1,
                ease: 'power2.out'
            })
        } else if (currentPage === 'intro') {
            gsap.killTweensOf(medalRef.current.scale)
            gsap.killTweensOf(medalRef.current.position)
            gsap.killTweensOf(medalRef.current.rotation)
            gsap.to(medalRef.current.scale, {
                x: 0,
                y: 0,
                z: 0,
                duration: 0.6,
                ease: 'power2.in'
            })
            gsap.to(medalRef.current.position, {
                y: -2,
                duration: 0.6,
                ease: 'power2.in'
            })
            gsap.to(medalRef.current.rotation, {
                y: 0,
                duration: 0.6,
                ease: 'power2.in'
            })
        }
    }, [currentPage])

    useEffect(() => {
        if (currentPage === 'configurator') {
            gsap.to(
                medalRef.current.rotation,
                {
                    z: 0.05,
                    duration: 0.5,
                    ease: CustomEase.create("cE","M0,0,C0.025,0,0.05,0.211,0.1,0.211,0.2,0.211,0.2,-0.557,0.3,-0.557,0.4,-0.557,0.4,0.984,0.5,0.984,0.6,0.984,0.6,-0.693,0.7,-0.693,0.799,-0.693,0.799,0.114,0.899,0.114,0.95,0.114,0.95,0,1,0"),
                }
            )
        }
    }, [currentContours, currentMetal])

    return (
        <group
            ref={medalRef}
            scale={[0, 0, 0]}
            position-y={-2}
        >
            <Base />
            <Contours />
        </group>
    )
}

export default Medal