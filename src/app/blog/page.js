import getDomain from "@/app/lib/getDomain";

async function getData() {
    const domain = getDomain();
    const endpoint = `${domain}/api/post`;
    const res = await fetch(endpoint);

    if (!res.ok) {
        throw new Error("Failed to fetch data.");
    }
    return res.json();
    // return {items: []}
}

export default async function BlogPage() {
    const data = await getData();
    const items = data && data.items ? [...data.items] : [];
    return (
        <main>
            <h1>Hello, NextJS</h1>
            <p>Posts:</p>
            {items && items.map((item, idx) => {
                return <li key={`post-${idx}`}>{item.title}</li>
            })}
        </main>
    );
}