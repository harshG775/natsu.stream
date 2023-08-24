import fetch from "node-fetch";
export default async (url) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        throw new Error(
            `\n An error occurred while fetching data: ${error.message}\n`
        );
    }
};
