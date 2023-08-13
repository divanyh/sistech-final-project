import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    if(!request.cookies.has('token')){
        // const response = NextResponse.json({
        //     status: 400,
        //     message: 'You have to login'
        // });
        // return response;
    }else{

    const body = await request.json();
    const {title, content, tags} = body;
    const bearer = "Bearer ";
    const jwt = request.cookies.get('token');
    const token = bearer.concat(jwt?.value);

    const res = await fetch(`${process.env.BASE_URL}/articles`, {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify({title, content, tags})
    },)

    const resJson = await res.json();

    return new Response(JSON.stringify(resJson))
    }
}