//Wtrite entire app code in this Finally
const readnow=require('./readnow.model');
const readlater=require('./readlater.model');
const bodyparser=require('body-parser')
const express= require('express');
const app= express();
const router= express.Router();
app.use(bodyparser.json())
router.get("/readnow", (req, res)=>{
    res.send("Welcome TO readnow");
})

router.get('/readlater',(req, res)=>{
    res.send("Welcome to readlaterpage");
})

router.post('/', (req, res)=>{
    console.log(req.body);
    res.send("Successfully added");
})
app.use(router);


module.exports= app;
