import TMDB from "../modules/TMDB.js";
const getAllTrendingPage = async (req,res) => {
    const data = await TMDB.getAllTrendingPage()
    res.send(data)
}

export default {getAllTrendingPage}