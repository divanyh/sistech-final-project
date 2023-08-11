import { NextResponse } from "next/server";

export async function GET() {
    const res = await fetch(`${process.env.BASE_URL}/articles`, {
        headers: {
            Authorization : process.env.TOKEN,
        }
    },)

    const data = await res.json();
    return NextResponse.json({data});
}