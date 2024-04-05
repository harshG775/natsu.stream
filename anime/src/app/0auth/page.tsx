"use client"
import { createAuthChallenge } from "@/utils/MALAuth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ZeroAuth() {
    const [authUrl, setAuthUrl] = useState("");
    useEffect(() => {
        const { authUrl, codeVerifier } = createAuthChallenge();
        setAuthUrl(authUrl);
        localStorage.removeItem("codeVerifier");
        localStorage.setItem("codeVerifier", codeVerifier);
    }, []);
    return (
        <main>
            <h1>0auth</h1>
            <Link href={authUrl} target="_blank" rel="noopener noreferrer">
                login with myAnimeList
            </Link>
        </main>
    );
}
