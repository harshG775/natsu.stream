"use strict"
import express from "express";
import path from "path";
import __dirname from "../modules/__dirname.js";


const Router = express.Router()
import { TMDB} from "../modules/fetching.js";
const url = "https://vidsrc.to/embed/tv/158876"

Router.get("/api/trending/:time/:page", async (req, res) => {
    const {time , page} = req.params;
    const  resp = await TMDB.getAllTrendingPage(page, time)
    res.json(await resp)
})


// website route
Router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default Router;