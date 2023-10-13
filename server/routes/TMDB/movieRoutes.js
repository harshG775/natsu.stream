import Express from "express";
import movieController from "../../controllers/movieController.js";
const router = Express.Router()

router.route("/trending/all/:page/:time")
    .get(movieController.trendingAll)
router.route("/trending/:page/:time")
    .get(movieController.trending)


export default router
