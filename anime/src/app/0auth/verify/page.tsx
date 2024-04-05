"use client";
import { set } from "@/actions/cookies";
export default function Verify() {
    return (
        <main>
            <h1 onClick={async () => set("testName", "testValue")}>verify</h1>
        </main>
    );
}
