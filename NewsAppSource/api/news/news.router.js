const newscontroller=require('./news.controller')
const router = require('express').Router();
const axios = require("axios");

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
        }
    next();
    });

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
   // console.log("searching news by category");
//console.log(req.params.category);
const category = req.params.category;
//console.log(category +" from router")
await newscontroller.newsbycategory(category).then((response)=>{
    //console.log(response.data)
    //return res.json({ message: response.data})
    res.status(201).send(response.data)    
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

