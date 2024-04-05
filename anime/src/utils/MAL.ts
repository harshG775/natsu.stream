import { Axios_MAL } from "@/lib/AxiosServer";

export async function MAL() {
    return Axios_MAL.get("/anime?q=one&limit=4");
}