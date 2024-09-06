
import { BufferGeometry, CylinderGeometry } from "three"
import { ADDITION, Brush, Evaluator, SUBTRACTION } from "three-bvh-csg"
import { Font, TextGeometry } from "three/examples/jsm/Addons.js"
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js"

export const generateTextGeometry = (
    title:string, 
    description:string,
    font:Font
) => {


    const cylinder = new CylinderGeometry(1,1,0.15,64,8)
    let cylinderBrush = new Brush(cylinder)
    let textGeometries:TextGeometry[] = []
    let result:Brush = cylinderBrush

    const evaluator = new Evaluator()

    if(!title && !description){
        return {
            base:result.geometry,
            text:null
        }
    }

    
    let titleBrush:null|Brush = null

    if(title){

        const titleGeometry = new TextGeometry(title,{
            font,
            size: 0.1,
            depth: 0.075,
            curveSegments: 3,
            
        })
        titleGeometry.center()
        titleGeometry.rotateX(Math.PI*-0.5)
        titleGeometry.translate(0,0.075,-0.35)
        textGeometries.push(titleGeometry)
        titleBrush = new Brush(titleGeometry)
        
    }

    if(titleBrush){
        result = evaluator.evaluate(cylinderBrush,titleBrush,SUBTRACTION)
    }

    let descriptionBrush:null|Brush = null

    if(description){

        const descriptionArray:string[] = []

        for(let i=0;i<description.length;i++){
            descriptionArray.push(description[i])
        }
        let lastSpaceIndex = 0
        const cutIndexes:number[] = [0]

        descriptionArray.forEach((letter,id)=>{
            if(letter === ' '){
                lastSpaceIndex = id
            }
            if(id - (cutIndexes[cutIndexes.length - 1]) >= 22){
                cutIndexes.push(lastSpaceIndex)
            }
        })

        const finalDescArray:string[] = []

        cutIndexes.forEach((cut,id)=>{
            const subArray = descriptionArray.slice(cut,cutIndexes[id+1])
            if(subArray[0] === ' '){
                subArray.shift()
            }
            finalDescArray.push(subArray.join(''))
        })

        const descriptionGeometries:TextGeometry[] = []
        finalDescArray.forEach((text,id)=>{
            const descriptionGeometry = new TextGeometry(text,{
                font,
                size: 0.1,
                depth: 0.075,
                curveSegments: 5,
            })
            descriptionGeometry.center()
            descriptionGeometry.rotateX(Math.PI*-0.5)
            descriptionGeometry.translate(0,0.075, 0.15 * id)
            descriptionGeometries.push(descriptionGeometry)
            textGeometries.push(descriptionGeometry)
        })



        
        descriptionBrush = new Brush(mergeGeometries(descriptionGeometries))
    }

    if(descriptionBrush){
        result = evaluator.evaluate(result,descriptionBrush,SUBTRACTION)
    }
    
    let mergedText:null|BufferGeometry = null
    
    
    if(textGeometries.length !== 0 ){
        textGeometries.forEach((g)=>{
            g.index = null
        })
        mergedText = mergeGeometries(textGeometries,false)
    }



    return {
        base:result.geometry,
        text:mergedText
    }
}


    

