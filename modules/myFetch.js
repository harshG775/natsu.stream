export default async (url)=>{
    try {
        const response = await fetch(url);
        const jsonData = await response.json()
        return await jsonData
    } catch (error) {
        return await error
    }
};