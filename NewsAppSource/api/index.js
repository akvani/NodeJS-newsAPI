const express = require('express');
const news=require('./news')
const app = express();
// import modules which you required


// write middlewares here those will be executed before processing any request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// bootpoint from where routing starts

app.use('/news',news)
app.get('/', (req, res) => {
    res.json({

        message: "use /news"

    })
})

module.exports = app;