import { ContoursType, GeomContoursType, GeomIconsType, IconType, MedalType } from '@/app/types/Medal'
import * as THREE from 'three'
import { Font, TextGeometry } from 'three/examples/jsm/Addons.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

const radius = 1
const medalThickness = 0.2

export const generateMedal = (
    params:MedalType|null,
    contours:GeomContoursType,
    iconsGeom:GeomIconsType,
) => {

    
    if(!params) return new THREE.CylinderGeometry(1,1,0.2,32,8)

    const geomArray:THREE.BufferGeometry[] = []
    
    const contoursGeom = createContours(params.contours,contours)
    if(contoursGeom){
        geomArray.push(contoursGeom)
    }   
    
    const centralIconGeom = createIcon(params.icon,iconsGeom)
    if(centralIconGeom){
        geomArray.push(centralIconGeom)
    }
    
    return mergeGeometries(geomArray,false)
}

const createContours = (
    type:ContoursType,
    models:GeomContoursType
) => {
    let contours:THREE.BufferGeometry|null = null


    const useModelContour = (model:THREE.BufferGeometry,scale:number) => {
        const modelContour = model.clone()
        modelContour.scale(scale,scale,scale)
        modelContour.translate(
            0,
            medalThickness*0.5 + 0.001,
            0
        )
        return modelContour
    }
    
    switch(type){
        case 'points' :  
            contours = useModelContour(models.clou,2.25);
            break
        case 'lauriers' :
            contours = useModelContour(models.laurier,1.4)
            break
        case 'tripleLines' :
            contours = useModelContour(models.tripleLines,0.95)
            break
        case 'verticalLines' :
            contours = useModelContour(models.innerLines,2.375)
            break
        case 'stars' :
            contours = useModelContour(models.stars,2.25)
            break
    }

    return contours
}

const createIcon = (type:IconType,models:GeomIconsType) => {

    let icon:THREE.BufferGeometry|null = null

    switch(type){
        case 'sport':
            icon = models.sport.clone()
            icon.scale(7,7,7)
            break
        case 'trash':
            icon = models.trash.clone()
            icon.scale(4,4,4)
            break
        case 'cuisine':
            icon = models.cuisine.clone()
            icon.scale(4,4,4)
            break
        case 'menage':
            icon = models.menage.clone()
            icon.scale(6,6,6)
            break
        case 'chrono':
            icon = models.chrono.clone()
            icon.scale(5,5,5)
            break
        case 'toilette':
            icon = models.toilette.clone()
            icon.scale(5,5,5)
            break
        case 'course':
            icon = models.course.clone()
            icon.scale(5,5,5)
    }

    
    icon.translate(0,medalThickness*0.5 + 0.01,0)

    return icon
}