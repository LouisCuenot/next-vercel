import dbConnect from "@/app/lib/dbConnect";
import Medal from "@/app/models/Medal";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuidV4} from 'uuid'

type CreateMedalReq = {
    sender: string
    receiver: string
    content: string
}

export async function POST(request:NextRequest){

    await dbConnect()

    try{
        const res:CreateMedalReq = await request.json()
        const { sender, receiver, content } = res

        const cMedal = await Medal.create({
            medalID:uuidV4(),
            sender,
            receiver,
            content
        })

        return NextResponse.json({id:cMedal.medalID})


    }catch(error){
        console.error(error)
        return NextResponse.json(
            { error: "Failed to create medal" },
            { status: 500 }
          );
    }
}