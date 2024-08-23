import React, { useRef, PointerEvent, useEffect, useState } from 'react'
import './DisplayedParameter.scss'
import { useMedalContext } from '../../context/MedalEditorContext'
import MetalEditor from './MetalEditor/MetalEditor'
import IconEditor from './IconEditor/IconEditor'
import ContoursEditor from './ContoursEditor/ContoursEditor'
import CollierEditor from './CollierEditor/CollierEditor'
import TitleEditor from './TitleEditor/TitleEditor'
import DescriptionEditor from './DescriptionEditor/DescriptionEditor'

const DisplayedParameter = () => {

  const { activeParameter, isDarkMode } = useMedalContext()

  const [isDraggable, setIsDraggable] = useState<boolean>(false)

  const draggableAreaRef = useRef<HTMLDivElement>(null)

  const initialPointerPos = useRef<null|number>(null)
  const initialDivPos = useRef<number>(0)

  const handlePointerMove = (e:MouseEvent) => {
    if(!isDraggable)return
        if(!initialPointerPos.current||!draggableAreaRef.current) return
        if(e.clientX - initialPointerPos.current + initialDivPos.current > 0 || e.clientX - initialPointerPos.current + initialDivPos.current < -(draggableAreaRef.current.clientWidth - window.innerWidth * 0.9))return
        
        draggableAreaRef.current.style.left = `${e.clientX - initialPointerPos.current + initialDivPos.current}px`
  }

  const handlePointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if(!isDraggable)return
        initialPointerPos.current = e.clientX
        window.addEventListener('pointermove',handlePointerMove)
  }

  const handlePointerUp = () => {
    if(!isDraggable)return
        window.removeEventListener('pointermove',handlePointerMove)
        if(!draggableAreaRef.current) return
        initialDivPos.current = draggableAreaRef.current.offsetLeft
        initialPointerPos.current = null
  }

  useEffect(() => {
    const handleResize = () => {
      if (!draggableAreaRef.current) return
      if (draggableAreaRef.current.clientWidth > window.innerWidth * 0.9) {
        setIsDraggable(true)
      } else {
        setIsDraggable(false)
      }
    }
    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const renderParamEditor = () => {
    switch(activeParameter){
      case 'metal' :  return <MetalEditor/>
      case 'icon' : return <IconEditor/>
      case 'contour' : return <ContoursEditor/>
      case 'collier' : return <CollierEditor/>
      case 'title': return <TitleEditor/>
      case 'description' : return <DescriptionEditor/>
      case null : null
    }
  }

  return (
    <div
      className='displayedParameter'
    >
      <div className={`extrudedArea ${isDarkMode ? 'dark' : 'light'}`}>
        <div 
          className={`draggableArea ${isDraggable ? '' : 'fxd'}`}
          ref={draggableAreaRef}
          onPointerDown={(e) => handlePointerDown(e)}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {
              renderParamEditor()
          }
        </div>
      </div>
    </div>
  )
}

export default DisplayedParameter