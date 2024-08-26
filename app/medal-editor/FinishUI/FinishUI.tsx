import React, { useEffect, useState } from 'react'
import './FinishUI.scss'
import { useMedalContext } from '../context/MedalEditorContext'
import { MedalType } from '@/app/types/Medal'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const FinishUI = () => {

    const { isDarkMode, setIsFinishUIActive, currentMedal, currentTitle, currentDescription, setMedalLink, medalLink } = useMedalContext()

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isCopie, setIsCopie] = useState(false)

    const handleSubmit = async () => {

        if (!currentMedal) return
        setIsSubmitting(true)

        const data: {
            medal: MedalType
        } = {
            medal: {
                metal: currentMedal.metal,
                collier: currentMedal.collier,
                contours: currentMedal.contours,
                icon: currentMedal.icon,
                content: {
                    title: currentTitle,
                    mission: currentDescription,
                    date: Date.now().toString()
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
            setIsSubmitting(false)
            setMedalLink(result.id)

        } catch (error) {
            setIsSubmitting(false)
            console.error(error)
        }
    }

    const handleCopy = () => (
        navigator.clipboard.writeText(`https://next-vercel-psi.vercel.app/medal/${medalLink}`).then(() => setIsCopie(true))
    )

    useEffect(() => console.log(navigator.clipboard), [navigator.clipboard])




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
                    onClick={() => setIsFinishUIActive(false)}
                >
                    <span>Non, poursuivre</span>
                </div>
                <div
                    className={`finishButton ${isDarkMode ? 'dark' : 'light'}`}
                    onClick={() => {
                        if (!isSubmitting) {
                            handleSubmit()
                        }
                    }}
                >
                    <span>Oui, j envoie</span>
                </div>
            </div>
            {
                isSubmitting &&
                <div className="submitting">
                    <span
                        className={isDarkMode ? 'dark' : 'light'}
                    >Veuillez patienter le temps que votre médaille soit terminée</span>
                    <DotLottieReact
                    className='loading'
                        autoplay
                        loop
                        src={isDarkMode ? '/lotties/dark/loading.json' : '/lotties/light/loading.json'}
                        height={10}
                        width={30}
                    />
                </div>
            }
            

            {
                medalLink &&
                <div className={`medalLink ${isDarkMode ? 'dark' : 'light'}`}>
                    <h3
                        className={isDarkMode ? 'dark' : 'light'}
                    >
                        Partagez ce lien à la personne méritant cette médaille
                    </h3>
                    <div className="linkContainer">
                        <div
                            className={`link ${isDarkMode ? 'dark' : 'light'}`}
                        >
                            <Link
                                href={`https://next-vercel-psi.vercel.app/medal/${medalLink}`}
                                className={isDarkMode ? 'dark' : 'light'}
                            >
                                https://next-vercel-psi.vercel.app/medal/{medalLink}
                            </Link>
                        </div>
                        
                        <div
                            className={`copyButton ${isDarkMode ? 'dark' : 'light'} ${isCopie ? 'digged' : ''}`}
                            onClick={handleCopy}
                        >
                            <span>
                                {
                                    isCopie
                                        ?
                                        'Copié'
                                        :
                                        'Copier'
                                }
                            </span>
                            {
                                isCopie &&
                                <DotLottieReact
                                    className='check'
                                    autoplay
                                    src={isDarkMode ? '/lotties/dark/check.json':'/lotties/light/check.json'}
                                    width={14}
                                    height={10}
                                />
                            }

                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FinishUI