'use client'

import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import React, { RefObject, useEffect, useState } from 'react'
import './medal-editor.scss'
import { CollierType, ContoursType, IconType, MedalType, MetalType } from '../types/Medal';
import { ActiveParameterType, MedalEditorContext } from './context/MedalEditorContext';
import { Group, Mesh } from 'three';
import { Perf } from 'r3f-perf';
import FlatCraftingStand from './FlatCraftingStand/FlatCraftingStand';
import Intro from './Intro/Intro';
import DarkModeButtons from './DarkModeButtons/DarkModeButtons';
import Image from 'next/image';
import FinishUI from './FinishUI/FinishUI';


type FormValues = {
    senderName: string;
    receiverName: string;
    content: string;
};

const MedalEditor = () => {

    const metalOptions:MetalType[] = ['gold','silver','bronce']
    const contourOptions:ContoursType[] = ['stars','points','lauriers','tripleLines','verticalLines']
    const collierOptions:CollierType[] = ['green','blue','pink','cyan','grey','red','yellow','purple','white','black']
    const iconOptions:IconType[] = ['sport','trash','cuisine','menage','chrono','course','toilette']



    const [medalRef, setMedalRef] = useState<RefObject<Group> | null>(null)
    const [currentMedal, setCurrentMedal] = useState<MedalType | null>({
        collier: collierOptions[Math.floor(Math.random()*(collierOptions.length-0.001))],
        content: {
            date: '',
            mission: '',
            title: ''
        },
        contours: contourOptions[Math.floor(Math.random()*(contourOptions.length-0.001))],
        icon: iconOptions[Math.floor(Math.random()*(iconOptions.length-0.001))],
        metal: metalOptions[Math.floor(Math.random()*(metalOptions.length-0.001))]
    })
    const [currentDescription, setCurrentDescription] = useState('')
    const [currentTitle, setCurrentTitle] = useState('')
    const [activeParameter, setActiveParameter] = useState<ActiveParameterType>(null)
    const [isDarkMode, setIsDarkMode] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [isWindowDefined, setIsWindowDefined] = useState(false)
    const [isAnimComplete, setIsAnimComplete] = useState(false)
    const [isIntroCompleted, setIsIntroCompleted] = useState(false)
    const [isFinishUIActive, setIsFinishUIActive] = useState(false)
    const [medalLink, setMedalLink] = useState<string>('')


    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750)
        }
        if (window) {
            setIsMobile(window.innerWidth < 750)
            setIsWindowDefined(true)


            window.addEventListener('resize', handleResize)
        }
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const [finalId, setFinalId] = useState<null | string>(null)

    const [formValues, setFormValues] = useState<FormValues>({
        senderName: "",
        receiverName: "",
        content: "",
    });

    // Handle input change
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted:", formValues);

        try {
            const response = await fetch('/api/create-medal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sender: formValues.senderName,
                    receiver: formValues.receiverName,
                    content: formValues.content
                })
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            const result = await response.json()
            setFinalId(result.id)

        } catch (error) {
            console.error(error)
        }

        setFormValues({
            senderName: "",
            receiverName: "",
            content: "",
        });
    };

    /*

<>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="senderName">Sender Name:</label>
                    <input
                        type="text"
                        id="senderName"
                        name="senderName"
                        value={formValues.senderName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="receiverName">Receiver Name:</label>
                    <input
                        type="text"
                        id="receiverName"
                        name="receiverName"
                        value={formValues.receiverName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        name="content"
                        value={formValues.content}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
            {
                finalId &&
                <Link href={`/medal/${finalId}`}>Go grab your medal !</Link>
            }
        </>

    */


    return (
        <>
            {
                isWindowDefined &&
                <div
                    className='medalEditor'
                >
                    <MedalEditorContext.Provider
                        value={{
                            medalRef,
                            setMedalRef,
                            activeParameter,
                            setActiveParameter,
                            currentMedal,
                            setCurrentMedal,
                            currentDescription,
                            setCurrentDescription,
                            currentTitle,
                            setCurrentTitle,
                            isDarkMode,
                            setIsDarkMode,
                            isMobile,
                            isAnimComplete,
                            setIsAnimComplete,
                            isIntroCompleted,
                            setIsIntroCompleted,
                            isFinishUIActive,
                            setIsFinishUIActive,
                            medalLink,
                            setMedalLink
                        }}
                    >
                        {
                            !isIntroCompleted &&
                            <Intro />
                        }
                        {
                            !isMobile &&
                            <Image width={200} height={200} src='/logo.svg' className='logo' alt="Le logo" />
                        }
                        {
                            isFinishUIActive &&
                            <FinishUI/>
                        }
                        <DarkModeButtons />
                        <div
                            className='medalEditor'
                        >
                            {
                                isAnimComplete &&
                                <FlatCraftingStand />
                            }
                        </div>
                    </MedalEditorContext.Provider>
                </div>
            }
        </>

    )
}

export default MedalEditor