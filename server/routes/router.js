import express from "express";
import path from "path";
import __dirname from "../modules/__dirname.js";


const Router = express.Router()
import TMDB from "../modules/fetching.js";

Router.get("/api/trending/all", (req, res) => {
    TMDB.getAllTrendingPage().then(data=>{
        res.json(data);
    })
});

// universal route
Router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default Router;

