const Register=require("./auth.model")
const express= require('express');
const bodyparser=require('body-parser')
const app= express();
const router= express.Router();
app.use(bodyparser.json())

router.get("/", (req, res)=>{
    res.send("Welcome TO News App Authentication. Please use /register or /login");
})

router.post('/login',async(req, res)=>{
   
    if (req.query.username==='admin' && req.query.password==='password')
   {
     res.send("Successfully logged in as Admin");
   }else{
    res.send("Please check Username and password.");
   }
   
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
