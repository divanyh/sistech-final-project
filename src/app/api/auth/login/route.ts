import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const body = await request.json();
    const {username, password} = body;

    console.log(username);
    console.log(password);
    console.log(body);

    const res = await fetch(`${process.env.BASE_URL}/users/signin`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username, password})
    },)

    const resJson = await res.json();
    
    console.log(resJson)

    const response = NextResponse.json(
        { status: 200 }
    )

    response.cookies.set({
        name: 'user',
        value: username,
        httpOnly: true,
    })

    response.cookies.set({
        name: 'token',
        value: resJson.token,
        httpOnly: true,
    })

    return response;
}