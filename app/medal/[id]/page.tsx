'use client'

import React, { useEffect, useState } from 'react'
import { useParams} from 'next/navigation'



const Medal = () => {

    const [medal, setMedal] = useState<null|{
        id:string,
        sender:string|null,
        receiver:string,
        content:string
    }>(null)

    const {id} = useParams<{id:string}>()

    useEffect(()=>{

        const fetchMedal = async () => {
            try{
                const response = await fetch(`/api/get-medal-by-id?id=${id}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                  })

                if(!response.ok){
                    throw new Error('Failed to get medal by ID')
                }

                const result = await response.json()
                setMedal(result)
                
            }catch(error){
                console.error(error)
            }
        }

        if(id){
            fetchMedal()
        }


    },[id])

    

  return (
    <div>
        {
            medal
            ?
            <div
                style={{
                    display:'flex',
                    flexDirection:'column',
                }}
            >
                <h2>Voici votre medaille :</h2>
                <span>Sender : {medal.sender}</span>
                <span>Receiver : {medal.receiver}</span>
                <p>Content : {medal.content}</p>
            </div>
            :
            <span>404</span>
        }
    </div>
  )
}

export default Medal