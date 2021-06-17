//Wtrite entire app code in this Finally
const readnow=require('./readnow.model');
const readlater=require('./readlater.model');
const bodyparser=require('body-parser')
const express= require('express');
const app= express();
const router= express.Router();
app.use(bodyparser.json())

router.get("/readnow", async(req, res)=>{ 
  
     try {     
        const ReadNow = await readnow.find({})    
         res.status(201).send(ReadNow)
     } catch (e) {
         res.status(400).send(e)
     }
})

router.post('/readlater',async(req, res)=>{
    const  ReadNow= new readnow(req.body)
     console.log(ReadNow)
     try {
         await ReadNow.save()
         res.status(201).send(ReadNow)
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
