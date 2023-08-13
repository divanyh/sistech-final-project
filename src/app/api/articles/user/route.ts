import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const user = request.cookies.get('user');
    const bearer = "Bearer ";
    const jwt = request.cookies.get('token');
    const token = bearer.concat(jwt?.value);
    console.log(token);
    const res = await fetch(`${process.env.BASE_URL}/articles/${user}`, {
        headers: {
            Authorization : token,
        }
    },)

    const data = await res.json();
    console.log(data);
    return NextResponse.json({data});
}