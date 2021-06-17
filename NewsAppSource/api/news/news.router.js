const newscontroller=require('./news.controller')
const router = require('express').Router();
const axios = require("axios");


router.get('/', (req, res) => {
    
    res.json({
        message: "Select proper end point to route through. Available routes are 'category', 'topHeadline', 'search'"
    })
})


router.get("/category", async(req, res,news) => {
    console.log("bbc-News");
    await axios.get(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=74733a9f6879478ca5e3a2c4c0947409`)
               
    .then((response)=>{
        res.json({ message: response.data})
    })
    .catch(console.error) 
       
})        

router.get("/category/:category", async(req, res,next) => {
    console.log("searching news by category");

const category = req.params.category;
console.log(category +" from router")
await newscontroller.newsbycategory(category).then((response)=>{
    res.json({ message: response.data})
})
.catch(console.error) 

})

router.get("/country/:category", async(req, res) => {
    console.log("searching news by country");
    const category = req.params.category;
    await axios.get(`https://newsapi.org/v2/top-headlines?country=${category}&apiKey=74733a9f6879478ca5e3a2c4c0947409`)
               
    .then((response)=>{
        res.json({ message: response.data})
    })
    .catch(console.error) 

})

module.exports = router;

