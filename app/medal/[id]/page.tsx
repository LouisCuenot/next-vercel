'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { MedalType } from '@/app/types/Medal'
import { MedalViewerContext } from './context/MedalViewerContext'
import MedalViewer from './MedalViewer/MedalViewer'
import './MedalViewerContainer.scss'



const Medal = () => {

    const [medal, setMedal] = useState<undefined | null | MedalType>(undefined)

    const { id } = useParams<{ id: string }>()

    useEffect(() => {

        const fetchMedal = async () => {
            try {
                const response = await fetch(`/api/get-medal-by-id?id=${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (!response.ok) {
                    throw new Error('Failed to get medal by ID')
                }

                const result = await response.json()
                setMedal(result.medal)

            } catch (error) {
                setMedal(null)
                console.error(error, 'aaaaa')
            }
        }

        if (id) {
            fetchMedal()
        }


    }, [id])



    return (
        <>
            {
                medal !== undefined &&
                <MedalViewerContext.Provider
                    value={{
                        medal
                    }}
                >
                    <div
                        className='medalViewerContainer'
                    >
                        {
                            medal
                                ?
                                <MedalViewer />
                                :
                                <span>404</span>
                        }
                    </div>
                </MedalViewerContext.Provider>
            }
        </>
    )
}

export default Medal