import { Addition, Base, Geometry, Intersection, Subtraction, useCSG, } from '@react-three/csg'
import { Text } from '@react-three/drei'
import React, { useEffect, useState } from 'react'

const RoundedDiggedButton = (props: {
    width: number,
    height: number,
    depth: number,
    position: {
        x: number
        y: number
    }
    cutFactor: number
    text:string
}) => {

    const { width, height, depth, position, cutFactor, text } = props

    const {update} = useCSG()

    const [isActive, setIsActive] = useState(false)

    useEffect(()=>update(),[isActive])

    return (
        <>
            <mesh
                position={[position.x, position.y, 0]}
                rotation-z={Math.PI * 0.5}
                onPointerDown={(e)=>{
                    e.stopPropagation()
                    setIsActive(value=>!value)
                }}
            >
                <capsuleGeometry args={[height * 0.5, width, 4, 24]} />
                <meshBasicMaterial visible={false} />
            </mesh>
            <Text
                fontSize={height*0.3}
                position={[
                    position.x, 
                    position.y, 
                    height*0.5 * depth * cutFactor * (isActive ? -1 : 1) + 0.03
                ]}
                color={0x000000}
            >
                {text}
            </Text>
            {
                isActive
                    ?
                    <Subtraction
                        position={[position.x, position.y, 0]}
                        scale-z={depth}
                    >
                        <Geometry
                            useGroups

                        >
                            <Base
                                rotation-z={Math.PI * 0.5}
                            >
                                <capsuleGeometry args={[height * 0.5, width, 4, 48]} />
                                <meshStandardMaterial toneMapped={false} color={0xB1B1B1} />
                            </Base>
                            <Intersection>
                                <boxGeometry args={[width + height, height, height * cutFactor]} />
                                <meshStandardMaterial toneMapped={false} color={0xB1B1B1} />
                            </Intersection>
                        </Geometry>
                    </Subtraction>
                    :
                    <Addition
                        position={[position.x, position.y, 0]}
                        scale-z={depth}
                    >
                        <Geometry
                            useGroups
                        >
                            <Base
                                rotation-z={Math.PI * 0.5}
                            >
                                <capsuleGeometry args={[height * 0.5, width, 4, 24]} />
                                <meshStandardMaterial toneMapped={false} color={0xC0C0C0} />
                            </Base>
                            <Intersection>
                                <boxGeometry args={[width + height, height, height * cutFactor]} />
                                <meshStandardMaterial toneMapped={false} color={0xC0C0C0} />
                            </Intersection>
                        </Geometry>
                    </Addition>
            }

        </>
    )
}

export default RoundedDiggedButton