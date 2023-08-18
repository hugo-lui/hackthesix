const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

async function getEvent(req, res, next) {
    try {
        const endpoint = "https://app.ticketmaster.com/discovery/v2/events.json?attractionId=K8vZ917Gku7&countryCode=CA&apikey=A9TpV8e3qhYwNpALFJPgvNrgQVsQkpVS";
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            res.status(200).json(jsonResponse);
        }
        else {
            next();
        }
    }     
    catch(err) {
        res.status(400).json({error: err});
    }
}

app.get("/", getEvent, (req, res) => {
    res.status(200).send("sorry");
})