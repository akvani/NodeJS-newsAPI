const express = require('express');
const api = require('./api');
const app = express();
// import modules which you required


// write middlewares here those will be executed before processing any request
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// bootpoint from where routing starts

app.use('/api', api);
app.get('/', (req, res) => {
    res.json({

        message: "use /api"

    })
})

module.exports = app;