const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3030;

const TMDB = require("./modules/fetching")

/* for serving react app after npm run build */
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get("/api/trending/all", (req, res) => {
    TMDB.getAllTrendingPage().then(data=>{
        res.json(data);
    })
});


// universal route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
});