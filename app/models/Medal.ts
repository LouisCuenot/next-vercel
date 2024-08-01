import mongoose, { Document, Schema } from "mongoose";

export interface MedalType extends Document {
    medalID:string
    sender:string
    receiver:string
    content:string
}

const medalSchema:Schema<MedalType> = new Schema<MedalType>({
    medalID:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:true
    },
    receiver:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    }
})

const Medal = mongoose.model<MedalType>('Medal',medalSchema)

export default Medal