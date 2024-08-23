import { Font, TextGeometry } from "three/examples/jsm/Addons.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export const generateTitleToExtrude = (font: Font, text: string,radius:number) => {

    const lettersArray = []
    const geomArray:TextGeometry[] = []
    for (let i = 0; i < text.length; i++) {
        lettersArray.push(text[i].toUpperCase())
    }
    lettersArray.forEach((letter, index) => {
        const letterGeom = new TextGeometry(letter, {
            font,
            size: 0.1,
            depth: 0.1,
            curveSegments: 5,
            bevelEnabled: false,
            bevelThickness: 0.1,
            bevelSize: 0.1,
            bevelOffset: 0,
            bevelSegments: 2
        })
        letterGeom.center()
        //0.15 = letterSpacing
        const letterPosOnCircle = ((Math.floor(lettersArray.length * 0.5) - index - 0.5 * (1 - lettersArray.length%2))) * 0.15 + Math.PI*0.5
        letterGeom.rotateZ(letterPosOnCircle - Math.PI*0.5)
        letterGeom.translate(
            Math.cos(letterPosOnCircle) * radius,
            Math.sin(letterPosOnCircle)*radius,
            0
        )
        geomArray.push(letterGeom)
    })


    return mergeGeometries(geomArray,false)


}