import mongoose, { Document, Schema } from "mongoose";
import { MedalType } from "../types/Medal";

export interface MedalDataType extends Document {
    medalID:string
    medal:MedalType
}

const medalSchema:Schema<MedalDataType> = new Schema<MedalDataType>({
    medalID:{
        required:true
    },
    medal:{
        required:true
    }
})

const Medal = mongoose.models.Medal || mongoose.model<MedalDataType>('Medal',medalSchema)

export default Medal