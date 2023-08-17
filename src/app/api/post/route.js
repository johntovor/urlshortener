import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({items: [{id: 1, title: "Hello World"}, {id: 2, title: "John is Great"}]});
}

// export async function POST() {
//     return NextResponse.json({hello: "World"});
// }