import { Addition, Base, CSGGeometryRef, Geometry, Subtraction, useCSG } from '@react-three/csg'
import { useThree } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Group, Mesh } from 'three'
import RoundedDiggedButton from '../RoundedDiggedButton/RoundedDiggedButton'

const DraggableButtons = () => {

    const { viewport } = useThree()
    const csgRef = useRef<CSGGeometryRef>(null)


    const drButtonsGroupRef = useRef<Mesh>(null)

    const holdingStartPoint = useRef<null | number>(null)

    const defaultGroupPos = useRef<number>(0)


    const handleMouseMove = (e: PointerEvent) => {
        if (!holdingStartPoint.current || !drButtonsGroupRef.current || !csgRef.current) return
        
        const value = -(holdingStartPoint.current - e.clientX / window.innerWidth)
        if((drButtonsGroupRef.current.position.x >= 0 && value > 0) || (drButtonsGroupRef.current.position.x<= -viewport.width*2 && value<0)) return
        drButtonsGroupRef.current.position.x = value * viewport.width + defaultGroupPos.current
        csgRef.current.update()
    }

    const handlePointerDown = ({ clientX }: { clientX: number }) => {
        if (!drButtonsGroupRef.current) return
        holdingStartPoint.current = clientX / window.innerWidth
        defaultGroupPos.current = drButtonsGroupRef.current.position.x

        window.addEventListener('pointermove', handleMouseMove)
    }

    const handlePointerUp = () => {
        window.removeEventListener('pointermove', handleMouseMove)
    }

    return (
        <mesh
            ref={drButtonsGroupRef}
            onPointerDown={handlePointerDown}
            onPointerLeave={handlePointerUp}
            onPointerUp={handlePointerUp}
            position-y={-viewport.height*0.5 + 0.5}
        >
            <Geometry
                useGroups
                ref={csgRef}
            >
                <Base
                    position-z={-0.5}
                    position-x={viewport.width}
                >
                    <boxGeometry args={[viewport.width*3.5, 1, 1]} />
                    <meshStandardMaterial toneMapped={false} color={0xC0C0C0} />
                </Base>


                <RoundedDiggedButton
                    width={viewport.width * 0.3}
                    height={0.4}
                    depth={0.3}
                    position={{
                        x: 0,
                        y: 0
                    }}
                    cutFactor={0.7}
                    text='Métal'
                />
                <RoundedDiggedButton
                    width={viewport.width * 0.3}
                    height={0.4}
                    depth={0.3}
                    position={{
                        x: viewport.width * 0.5,
                        y: 0
                    }}
                    cutFactor={0.7}
                    text='Intérieur'
                />
                <RoundedDiggedButton
                    width={viewport.width * 0.3}
                    height={0.4}
                    depth={0.3}
                    position={{
                        x: viewport.width * 1,
                        y: 0
                    }}
                    cutFactor={0.7}
                    text='Contour'
                />
                <RoundedDiggedButton
                    width={viewport.width * 0.3}
                    height={0.4}
                    depth={0.3}
                    position={{
                        x: viewport.width * 1.5,
                        y: 0
                    }}
                    cutFactor={0.7}
                    text='Collier'
                />
                <RoundedDiggedButton
                    width={viewport.width * 0.3}
                    height={0.4}
                    depth={0.3}
                    position={{
                        x: viewport.width * 2,
                        y: 0
                    }}
                    cutFactor={0.7}
                    text='Texte'
                />


            </Geometry>
        </mesh>
    )
}

export default DraggableButtons