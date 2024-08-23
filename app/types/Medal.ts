import { BufferGeometry } from "three"

export type MetalType = 'gold'|'silver'|'bronce'
export type ContoursType = 'stars'|'points'|'lauriers'|'tripleLines'|'verticalLines'
export type IconType = 'sport'|'trash'|'cuisine'|'menage'|'chrono'|'toilette'|'course'
export type CollierType = 'green'|'blue'|'pink'|'cyan'|'grey'|'red'|'yellow'|'purple'|'white'|'black'

export type GeomContoursType = {
    clou:BufferGeometry
    laurier:BufferGeometry
    tripleLines:BufferGeometry
    innerLines:BufferGeometry
    stars:BufferGeometry
}

export type GeomIconsType = {
    sport:BufferGeometry,
    trash:BufferGeometry,
    cuisine:BufferGeometry,
    menage:BufferGeometry,
    chrono:BufferGeometry,
    toilette:BufferGeometry,
    course:BufferGeometry
}


export type MedalType = {
    metal:MetalType,
    collier:CollierType,
    contours:ContoursType,
    icon:IconType,
    content:{
        title:string,
        mission:string
        date:string
    }
}