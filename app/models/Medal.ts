import mongoose, { Document, Schema } from "mongoose";
import { MedalType } from "../types/MedalTypes";

export interface MedalDataType extends Document {
    medalID:string
    medal:MedalType
}

const medalSchema:Schema<MedalDataType> = new Schema<MedalDataType>({
    medalID:{
        type:String,
        required:true
    },
    medal: {
        metal: {
            type: String,
            enum: ['gold', 'silver', 'bronce'],
            required: true
        },
        contours: {
            type: String,
            enum: ['stars', 'points', 'lauriers', 'tripleLines', 'verticalLines'],
            required: true
        },
        name:{
            type:String,
            required:false
        },
        description:{
            type:String,
            required:false
        }
    }
})

const Medal = mongoose.models.Medal || mongoose.model<MedalDataType>('Medal',medalSchema)

export default Medal