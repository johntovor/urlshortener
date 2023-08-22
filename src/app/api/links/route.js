import { NextResponse } from "next/server";

import isValidURL from "@/app/lib/isValidURL";


export async function POST(request) {
    const data = await request.json()
    const contentType = await request.headers.get("content-type");
    if (contentType !== "application/json") {
        return NextResponse.json({"error": "Invalid request"}, {status: 415});
    }

    const url = data && data.url ? data.url : null;
    const validURL = await isValidURL(url, ["jref.io", "urlshortener-navy.vercel.app", process.env.NEXT_PUBLIC_VERCEL_URL]);
    if (!validURL) {
        return NextResponse.json({"message": `${url} is not valid.`}, {status: 400});
    }
    return NextResponse.json(data, {status: 201});
}