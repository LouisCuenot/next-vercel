
import { Text, useGLTF, useTexture } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { BufferGeometry, Group, Mesh, NearestFilter } from 'three'

import { useMedalContext } from '@/app/medal-editor/context/MedalEditorContext'
import { generateMedal } from './generateMedal'
import { Font, FontLoader, GLTF, TextGeometry } from 'three/examples/jsm/Addons.js'
import { GeomContoursType, GeomIconsType } from '@/app/types/Medal'
import { Addition, Base, Geometry, Subtraction } from '@react-three/csg'
import { generateTitleToExtrude } from './generateTitleToExtrude'

type ClouResult = GLTF & {
    nodes: {
        Sphere: Mesh
    }
}

type LaurierResult = GLTF & {
    nodes: {
        Curve: Mesh
    }
}

type TripleLinesResult = GLTF & {
    nodes: {
        Circle: Mesh
    }
}

type InnerLinesResult = GLTF & {
    nodes: {
        Curve: Mesh
    }
}

type StarsResult = GLTF & {
    nodes: {
        Curve011: Mesh
    }
}

type SportResult = GLTF & {
    nodes: {
        Curve001: Mesh
    }

}

type TrashResult = GLTF & {
    nodes: {
        Curve: Mesh
    }
}

type CuisineResult = GLTF & {
    nodes: {
        Curve002: Mesh
    }
}

type MenageResult = GLTF & {
    nodes: {
        Circle: Mesh
    }
}

type ChronoResult = GLTF & {
    nodes: {
        Curve013: Mesh
    }
}

type ToiletteResult = GLTF & {
    nodes:{
        Curve003:Mesh
    }
}

type CourseResult = GLTF & {
    nodes:{
        Curve011:Mesh
    }
}


const Medaille = () => {

    let { setMedalRef, currentMedal, currentDescription, currentTitle } = useMedalContext()



    const [
        clou,
        lauriers,
        tripleLines,
        innerLines,
        stars,
        sport,
        trash,
        cuisine,
        menage,
        chrono,
        toilette,
        course
    ] = useGLTF([
        '/glb/contours/clou.glb',
        '/glb/contours/couronneLauriers.glb',
        '/glb/contours/tripleCircle.glb',
        '/glb/contours/innerLines.glb',
        '/glb/contours/stars.glb',
        '/glb/icons/haltereIcon.glb',
        '/glb/icons/POUBELLE.glb',
        '/glb/icons/CUISINE.glb',
        '/glb/icons/MENAGE.glb',
        '/glb/icons/CHRONO.glb',
        '/glb/icons/TOILETTE.glb',
        '/glb/icons/COURSE.glb',
    ]) as unknown as [
            ClouResult,
            LaurierResult,
            TripleLinesResult,
            InnerLinesResult,
            StarsResult,
            SportResult,
            TrashResult,
            CuisineResult,
            MenageResult,
            ChronoResult,
            ToiletteResult,
            CourseResult
        ]



    const contoursGeom: GeomContoursType = {
        clou: clou.nodes.Sphere.geometry,
        laurier: lauriers.nodes.Curve.geometry,
        tripleLines: tripleLines.nodes.Circle.geometry,
        innerLines: innerLines.nodes.Curve.geometry,
        stars: stars.nodes.Curve011.geometry
    }

    const iconsGeom: GeomIconsType = {
        sport: sport.nodes.Curve001.geometry,
        trash: trash.nodes.Curve.geometry,
        cuisine: cuisine.nodes.Curve002.geometry,
        menage: menage.nodes.Circle.geometry,
        chrono: chrono.nodes.Curve013.geometry,
        toilette:toilette.nodes.Curve003.geometry,
        course:course.nodes.Curve011.geometry
    }

    const bumpMap = useTexture('/bump.jpg')

    const mRef = useRef<Group>(null)

    const [current3DFont, setCurrent3DFont] = useState<null | Font>()
    const [modifiedDescription, setModifiedDescription] = useState(currentDescription)

    useEffect(() => {
        const fLoader = new FontLoader()
        fLoader.load('/fonts/sairaMedium.json', (font) => setCurrent3DFont(font))
    }, [])


    const [titleGeom, setTitleGeom] = useState<null| BufferGeometry>(null)



    const medalGeom = useMemo(() => {

        if (!currentMedal) return


        const newMedalGeom = generateMedal(
            currentMedal,
            contoursGeom,
            iconsGeom,
        );
        

        return newMedalGeom;
    }, [currentMedal, contoursGeom, iconsGeom]);

    useEffect(()=>{
        if(!current3DFont || !currentTitle.length)return setTitleGeom(null)
        setTitleGeom(generateTitleToExtrude(current3DFont,currentTitle,0.65))
    },[currentTitle,current3DFont])

    useEffect(() => {
        if (mRef) {
            setMedalRef(mRef);
        }

        return () => {
            if (medalGeom) {
                medalGeom.dispose();
            }
        };
    }, [setMedalRef, medalGeom]);

    useEffect(()=>{
        let presSpacePosition = 0
        let descriptionLettersArray:string[] = []
        let placeToInsertSpace:number[] = []
        for(let i=0;i<currentDescription.length;i++){
            descriptionLettersArray.push(currentDescription[i])
        }
        descriptionLettersArray.forEach((letter,index)=>{
            if(letter === ' '){
                presSpacePosition = index
            }
            if(index - presSpacePosition === 16){
                placeToInsertSpace.push(index)
                presSpacePosition = index
            }
        })
        placeToInsertSpace.forEach((id)=>{
            descriptionLettersArray.splice(id,0,'-\n')
        })
        const newDesc = descriptionLettersArray.join('') 
        setModifiedDescription(newDesc)
    },[currentDescription])


    if (!currentMedal) return <></>

    return (
        <group
            position-z={0.2}
            rotation-x={Math.PI * 0.5}
            ref={mRef}
        >
            <mesh>
                <Geometry
                    useGroups
                >
                    <Base>
                        <cylinderGeometry args={[1, 1, 0.2, 64, 8]} />
                        <meshPhysicalMaterial
                            color={
                                currentMedal.metal === 'gold'
                                    ?
                                    0xF5C22D
                                    :
                                    currentMedal.metal === 'silver'
                                        ?
                                        0xC0C0C0
                                        :
                                        0xE4953C
                            }
                            bumpMap={bumpMap}
                            bumpScale={2}
                            metalness={0.7}
                            roughness={0.2}
                            reflectivity={1}
                        />
                    </Base>
                    {
                        titleGeom &&
                        <Subtraction
                            rotation-x={-Math.PI*0.5}
                            position-y={0.1}
                            geometry={titleGeom}
                        >
                            <meshPhysicalMaterial
                            color={
                                currentMedal.metal === 'gold'
                                    ?
                                    0x493306
                                    :
                                    currentMedal.metal === 'silver'
                                        ?
                                        0x525252
                                        :
                                        0x362007
                            }
                            metalness={0.7}
                            roughness={0.2}
                            reflectivity={1}
                        />
                        </Subtraction>
                    }

                </Geometry>
            </mesh>
            <mesh
                position-y={-0.105}
            >
                <cylinderGeometry args={[1, 1, 0.01, 64, 8]} />
                <meshPhysicalMaterial
                    color={
                        currentMedal.metal === 'gold'
                            ?
                            0xF5C22D
                            :
                            currentMedal.metal === 'silver'
                                ?
                                0xC0C0C0
                                :
                                0xE4953C
                    }
                    metalness={0.7}
                    roughness={0.2}
                    reflectivity={1}
                />
            </mesh>
            <mesh
                geometry={medalGeom}
            >
                <meshPhysicalMaterial
                    color={
                        currentMedal.metal === 'gold'
                            ?
                            0xF5C22D
                            :
                            currentMedal.metal === 'silver'
                                ?
                                0xC0C0C0
                                :
                                0xE4953C
                    }
                    bumpMap={bumpMap}
                    bumpScale={4}
                    metalness={0.7}
                    roughness={0.2}
                    reflectivity={1}
                />
            </mesh>
            <Text
                fontSize={0.1}
                font='/fonts/Manrope.ttf'
                position-y={-0.12}
                color={0x000000}
                rotation={[-Math.PI * 0.5, Math.PI, 0]}
                maxWidth={1.6}
                textAlign='center'
                whiteSpace='normal'
            >
                {modifiedDescription}
            </Text>
        </group>
    )
}

useGLTF.preload([
    '/glb/contours/clou.glb',
    '/glb/contours/couronneLauriers.glb',
    '/glb/contours/tripleCircle.glb',
    '/glb/contours/innerLines.glb',
    '/glb/contours/stars.glb',
    '/glb/icons/haltereIcon.glb',
    '/glb/icons/POUBELLE.glb',
    '/glb/icons/CUISINE.glb',
    '/glb/icons/MENAGE.glb',
    '/glb/icons/CHRONO.glb',
    '/glb/icons/TOILETTE.glb',
    '/glb/icons/COURSE.glb'
])

export default Medaille