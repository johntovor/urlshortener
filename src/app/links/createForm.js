"use client";

import { useState } from "react";

export default function LinksCreateForm() {
    const [results, setResults] = useState(null);
    const handleForm = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const JSONData = JSON.stringify(data);
        const endpoint = "/api/links/";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSONData
        }
        const response = await fetch(endpoint, options);
        const result = await response.json();
        setResults(result)
    };
    return <>
        <form onSubmit={handleForm}>
            <input type="text" defaultValue="https://github.com/johntovor/urlshortener" name="url" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Your url to shorten" />
            <button type="submit">Shorten</button>
        </form>
        {results && JSON.stringify(results)}
    </>
}