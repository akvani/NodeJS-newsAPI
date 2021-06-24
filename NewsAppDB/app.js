//Wtrite entire app code in this Finally
const readnow=require('./readnow.model');
const bodyparser=require('body-parser')
const express= require('express');
const app= express();
const router= express.Router();
app.use(bodyparser.json())

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
        }
    next();
    });

router.get("/readnow", async(req, res)=>{   
    console.log("Read Now")
  
     try {     
        const ReadNow = await readnow.find({})    
         res.status(201).send(ReadNow)
     } catch (e) {
         res.status(400).send(e)
     }
})
router.delete("/:id", async(req, res)=>{   
    console.log (req.params.id);
    try {     
       const ReadNow = await readnow.findOneAndDelete({title: req.params.id})    
        res.status(201).send("News Removed from the list")
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/readlater',async(req, res)=>{
console.log("Inside Read later api")
   console.log(req.body)
    const  ReadLater= new readnow(req.body)
     console.log(ReadLater)
     try {
         await ReadLater.save()
         res.status(201).send(ReadLater)
     } catch (e) {
         res.status(400).send(e)
     }
})

router.post('/', (req, res)=>{
    console.log(req.body);
    res.send("Successfully added");
})
app.use(router);


module.exports= app;
