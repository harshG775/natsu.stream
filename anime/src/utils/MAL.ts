import { Axios_MAL } from "@/lib/AxiosServer";

export async function query(q:string) {
    return Axios_MAL.get(`/anime?q=${q}&limit=4`);
}