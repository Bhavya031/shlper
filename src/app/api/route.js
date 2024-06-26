import { getServerSession } from "next-auth";
import { AuthOptions, authOptions } from "../lib/nextAuth";
import { NextResponse } from "next/server";

export async function GET(request) {
    const session = await getServerSession(authOptions)
    return NextResponse.json({id: 1})
}