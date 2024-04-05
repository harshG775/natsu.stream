"use server";
import { cookies } from "next/headers";
export async function create() {
    cookies().set("name", "lee");
}
export async function set(name: string, value: string) {
    try {
        cookies().set(name, value);
        return true;
    } catch (error) {
        return error;
    }
}
