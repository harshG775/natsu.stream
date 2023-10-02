import rootDir from "./modules/rootDir.js";
import Express from "express";
import morgan from "morgan";

import tvRoutes from "./routes/TMDB/tvRoutes.js"
import movieRoutes from "./routes/TMDB/movieRoutes.js"

const app = Express();

app.use(morgan("dev"))
app.use(Express.static(rootDir+"/public"))
console.log(process.env.API_KEY)


app.use("/api/v1/movie",movieRoutes)
app.use("/api/v1/tv",tvRoutes)

export default  app