import React, { useRef, PointerEvent, useEffect, useState } from 'react'
import './MobileButtons.scss'
import FlatButton from '../FlatButton/FlatButton'
import { useMedalContext } from '../../context/MedalEditorContext'

const MobileButtons = () => {

    const {isDarkMode} = useMedalContext()

    const [isDraggable, setIsDraggable] = useState<boolean>(false)

    const draggableDivRef = useRef<HTMLDivElement>(null)

    const initialDivPos = useRef<number>(0)
    const initialPointerPos = useRef<null|number>(null)

    const handlePointerMove = (e:MouseEvent) => {
        if(!isDraggable)return
        if(!initialPointerPos.current||!draggableDivRef.current) return
        if(e.clientX - initialPointerPos.current + initialDivPos.current > 0 || e.clientX - initialPointerPos.current + initialDivPos.current < -(draggableDivRef.current.clientWidth - window.innerWidth))return
        draggableDivRef.current.style.left = `${e.clientX - initialPointerPos.current + initialDivPos.current}px`
    }

    const handlePointerDown = (e:PointerEvent<HTMLDivElement>) => {
        if(!isDraggable)return
        initialPointerPos.current = e.clientX
        window.addEventListener('pointermove',handlePointerMove)
    }

    const handlePointerUp = () => {
        if(!isDraggable)return
        window.removeEventListener('pointermove',handlePointerMove)
        if(!draggableDivRef.current) return
        initialDivPos.current = draggableDivRef.current.offsetLeft
        initialPointerPos.current = null
    }

    useEffect(()=>{
        const handleResize = () => {
            if(!draggableDivRef.current)return
            if(draggableDivRef.current.clientWidth > window.innerWidth){
                setIsDraggable(true)
            }else{
                setIsDraggable(false)
            }
        }
        window.addEventListener('resize',handleResize)

        handleResize()

        return ()=> window.removeEventListener('resize',handleResize)
    },[])


    return (
        <div
            className='mobileButtons'
        >
            <div
                className={`draggableContainer ${isDraggable ? '' : 'fxd'}`}
                ref={draggableDivRef}
                onPointerDown={(e)=>handlePointerDown(e)}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
            >
                <FlatButton
                    content='Métal'
                    param={'metal'}
            
                />
                <FlatButton
                    param={'icon'}
                    content='Intérieur'
        
                />
                <FlatButton
                    param={'contour'}
                    content='Contour'
                    
                />
                <FlatButton
                    param={'collier'}
                    content='Collier'
                    
                />
                <FlatButton
                    param={'title'}
                    content='Titre'
                />
                <FlatButton
                    param={'description'}
                    content='Description'
                />
                <div 
                    className={`flatButton ${isDarkMode ? 'dark' : 'light'}`}
                    onClick={()=>{
                        
                    }}
                >
                    Terminer
                </div>
            </div>
        </div>
    )
}

export default MobileButtons