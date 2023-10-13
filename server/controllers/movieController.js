import TMDB from "../modules/TMDB.js"
const trendingAll = async (req,res) => {
    console.log(TMDB())
    const {time,page} = req.params
    res.send("data")
}
const trending = async (req,res) => {
    res.send("data")
}

export default {trendingAll,trending}