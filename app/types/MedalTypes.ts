export type MetalType = 'gold'|'silver'|'bronce'
export type ContoursType = 'stars'|'points'|'lauriers'|'tripleLines'|'verticalLines'
export type MedalType = {
    metal:MetalType,
    contours:ContoursType,
    name:string,
    description:string
}