import rootDir from "./modules/rootDir.js"
import env from "dotenv";
env.config({path:`${rootDir}/config.env`, debug: true});
import app from "./app.js";



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));