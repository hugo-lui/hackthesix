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
    res.status(200).json({"names": res.names, "prices": res.prices, "urls": res.urls});
})

app.param("keyword", async (req, res, next, keyword) => {
    try {
        keyword = keyword.replace(" ", "%20");
        const endpoint = `https://api.bestbuy.com/v1/products(search=${keyword})?format=json&apiKey=${process.env.API_KEY}`;
        const response = await fetch(endpoint);
        if(response.ok) {
            const jsonResponse = await response.json();
            const names = [];
            const prices = [];
            const urls = [];
            jsonResponse.products.forEach((product) => {
                names.push(product.name);
                prices.push(product.salePrice);
                urls.push(product.addToCartUrl);
            });
            res.names = names;
            res.prices = prices;
            res.urls = urls;
            next();
        }
    }     
    catch(err) {
        res.status(400).json({error: "No items found"});
    }
})