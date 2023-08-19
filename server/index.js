require ("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000"
}));

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

app.get("/:keyword", (req, res) => {
    res.status(200).json({"urls": res.urls});
})

app.param("keyword", async (req, res, next, keyword) => {
    try {
        const endpoint = `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${keyword}&source=ticketmaster&countryCode=CA&apikey=${process.env.API_KEY}`;
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            const urls = [];
            const data = jsonResponse._embedded.events;
            data.forEach((object) => {
                urls.push(JSON.stringify(object.url));
            });
            res.urls = urls;
            console.log(urls);
            next();
        }
    }     
    catch(err) {
        res.status(400).json({error: err});
    }
})