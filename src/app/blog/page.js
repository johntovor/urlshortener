import getDomain from "@/app/lib/getDomain";

import Card from "./card";
import {helloWorld} from "@/app/lib/db";

async function getData() {
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    // const res = await fetch(endpoint, {next: {revalidate: 10}});

    const res = await fetch(endpoint, {cache: "no-store"});

    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }

    if (res.headers.get("content-type") !== "application/json") {
        return {items: []}
    }

    return res.json();
    
}

export default async function BlogPage() {
    const data = await getData();
    const dbHello = await helloWorld();
    console.log("dbHello", dbHello);

    const items = data && data.items ? [...data.items] : [];
    return (
        <main>
            <h1>Hello, NextJS</h1>
            <p>DB Response: {JSON.stringify(dbHello)}</p>
            <p>Posts:</p>
            {items && items.map((item, idx) => {
                return <Card title={item.title} key={`post-${idx}`} />
            })}
        </main>
    );
}

export const runtime = "edge";
export const preferredRegion = "iad1";