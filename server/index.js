const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server is running on port: " + PORT);
})

async function getEvents(req, res, next) {
    try {
        const endpoint = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=taylorswift&source=ticketmaster&countryCode=CA&apikey=A9TpV8e3qhYwNpALFJPgvNrgQVsQkpVS";
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            const urls = [];
            const data = jsonResponse._embedded.events;
            data.forEach((object) => {
                urls.push(JSON.stringify(object.url));
            });
            console.log(urls);
            //res.status(200).json({"urls": urls});
        }
    }     
    catch(err) {
        //res.status(400).json({error: err});
    }
}

