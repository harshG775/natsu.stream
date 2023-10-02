import env from "dotenv";
env.config({path:`${rootDir}/config.env`})

import app from "./app.js";
import rootDir from "./modules/rootDir.js"



const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));