import dbConnect from "@/app/lib/dbConnect";
import Medal from "@/app/models/Medal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {

    await dbConnect()

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    console.log('///////////////////////////////////////////FZEcdsrezDSVCrezsvd<rezqDSVERZGvqsd',id)


    if (!id) {
        return NextResponse.json(
            { error: "ID parameter is required" },
            { status: 400 }
        );
    }

    try {
        const medal = await Medal.findOne({
            medalID: id
        })

        if (!medal) {
            return NextResponse.json(
                { error: "Medal not found" },
                { status: 404 }
            );
        }


        return NextResponse.json(medal);
    } catch (error) {
        console.error("Error fetching medal:", error);
        return NextResponse.json(
            { error: "Failed to get medal by ID" },
            { status: 500 }
        );
    }
}