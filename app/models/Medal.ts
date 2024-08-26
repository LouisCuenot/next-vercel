import mongoose, { Document, Schema } from "mongoose";
import { MedalType } from "../types/Medal";

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
        collier: {
            type: String,
            enum: ['green', 'blue', 'pink', 'cyan', 'grey', 'red', 'yellow', 'purple', 'white', 'black'],
            required: true
        },
        contours: {
            type: String,
            enum: ['stars', 'points', 'lauriers', 'tripleLines', 'verticalLines'],
            required: true
        },
        icon: {
            type: String,
            enum: ['sport', 'trash', 'cuisine', 'menage', 'chrono', 'toilette', 'course'],
            required: true
        },
        content: {
            title: {
                type: String,
                required:false
            },
            mission: {
                type: String,
                required:false
            },
            date: {
                type: String,
                required: true
            }
        }
    }
})

const Medal = mongoose.models.Medal || mongoose.model<MedalDataType>('Medal',medalSchema)

export default Medal