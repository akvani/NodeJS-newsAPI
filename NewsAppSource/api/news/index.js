const router = require('./news.router')
const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.json({

        message: "At /news level"

    })

})

module.exports=router;
