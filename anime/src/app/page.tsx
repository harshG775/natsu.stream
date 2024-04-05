import { MAL } from "@/utils/MAL";

export default async function Home() {
    const { data } = await MAL();
    console.log(data);
    return (
        <main>
            <h1>Welcome</h1>
        </main>
    );
}
