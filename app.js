
const express = require('express')
const request = require('request-promise')
const app = express()
const port = 3000 || process.env.PORT


const generateScrapUrls = (api_key) => `http://api.scraperapi.com?api_key=${api_key}&autoparse=true`;
app.use(express.json())


// get by id
app.get("/", async (req, res) => {
    res.send("welcome to amazon scraperapi")
})
// by product id
app.get("/product/:productId", async (req, res) => {
    const { productId } = req.params
    const { api_key } = req.query
    try {
        const response = await request(`${generateScrapUrls(api_key)}&url=http://www.amazon.in/dp/${productId}`)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})


//  revies of product
app.get("/search/:searchId/reviews", async (req, res) => {
    const { searchId } = req.params
    const { api_key } = req.query
    try {
        const response = await request(`${generateScrapUrls(api_key)}&url=http://www.amazon.com/product-reviews/${productId}`)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
app.get("/search/:searchId", async (req, res) => {
    const { searchId } = req.params
    const { api_key } = req.query
    try {
        const response = await request(`${generateScrapUrls(api_key)}&url=http://www.amazon.in/s?k=${searchId}`)
        res.send(response)
    } catch (error) {
        console.log(error)
    }
})
app.listen(port, () => {
    console.log("app is running at port", port)
})
