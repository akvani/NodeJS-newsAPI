const router = require('express').Router();
const controller = require('./auth.controller');
const Register=require("../../auth.model")

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).json({});
        }
    next();
    });

router.post('/', controller.authenticate);
router.post('/isAuthenticated', controller.isAuthenticated);

router.post('/register', async(req, res) => {
   // console.log("Register module")
    //console.log(req.body)
    const register = new Register(req.body)

    try {
        await register.save()
        res.status(201).send(register)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;
