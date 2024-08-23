import dbConnect from "@/app/lib/dbConnect";
import Medal from "@/app/models/Medal";
import { MedalType } from "@/app/types/Medal";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuidV4} from 'uuid'

type CreateMedalReq = {
    medal:MedalType
}

export async function POST(request:NextRequest){

    await dbConnect()

    try{
        const res:CreateMedalReq = await request.json()
        const { medal } = res

        const cMedal = await Medal.create({
            medalID:uuidV4(),
            medal
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