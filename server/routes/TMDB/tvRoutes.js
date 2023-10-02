import Express from "express";
const router = Express.Router()

const AllMovies=(req,res)=>{
    res.send({data:"tv"})
}

router.route("/")
    .get(AllMovies)



export default router
