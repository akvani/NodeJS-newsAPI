const Register=require("./auth.model")
const express= require('express');
const app= express();
const router= express.Router();
router.get("/", (req, res)=>{
    res.send("Welcome TO News App Authentication");
})

router.get('/login/:userid',async(req, res)=>{
   
    console.log (req.params.userid)
    //console.log (req.params.password)
//    if (req.params.userid='admin' & req.params.password='password')
//    {
     res.send(req.params.userid);
   //}
   
})
// router.post('/register/',async(req, res)=>{
    
//      res.send("This is register page");  
// })

router.post('/register', async(req, res) => {
     console.log(req.body)
     const register = new Register(req.body)
 
     try {
         await register.save()
         res.status(201).send(register)
     } catch (e) {
         res.status(400).send(e)
     }
 })


router.post('/', (req, res)=>{
    res.send(req.body);
})
app.use(router);


module.exports= app;
