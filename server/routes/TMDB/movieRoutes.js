import Express from "express";
const router = Express.Router()
import movieController from "../../controllers/movieController.js";
router.route("/")
    .get(movieController.getAllTrendingPage)


export default router
