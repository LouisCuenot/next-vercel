'use client'

import { Canvas } from '@react-three/fiber';
import Link from 'next/link';
import React, { useState } from 'react'
import './medal-editor.css'
import Scene from './Scene/Scene';


type FormValues = {
    senderName: string;
    receiverName: string;
    content: string;
};

const MedalEditor = () => {


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
        <div
            className='medalEditor'
        >
            <Canvas shadows>
                <Scene/>
            </Canvas>
        </div>
    )
}

export default MedalEditor