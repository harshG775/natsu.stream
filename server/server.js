import express from "express";
import path from "path";
import router from "./routes/router.js"

const app = express();

import __dirname from "./modules/__dirname.js";

/* for serving react app after npm run build */
app.use(express.static(path.join(__dirname, '../public')));

app.use("/",router)
app.use("/api",router)


const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`server started at http://localhost:${PORT}`));