import { NextRequest, NextResponse } from "next/server";
import connectMongo from "@/app/lib/mongodb";

export async function GET(req: NextRequest): Promise<NextResponse> {
    await connectMongo();
    return NextResponse.json({message: 'hello from MongoDB! it works'}, {status: 200});
}