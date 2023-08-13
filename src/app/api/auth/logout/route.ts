import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const response = NextResponse.json(
        { status: 200 }
    )

    response.cookies.delete('user')
    response.cookies.delete('token')

    return response;
}