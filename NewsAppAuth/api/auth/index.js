const router = require('express').Router();
const controller = require('./auth.controller');

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

module.exports = router;
