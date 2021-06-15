// Proxy For My Microservices:

const express = require('express');

const httpProxy= require('http-proxy-middleware');
const config = require('./config');

let proxyAuth; // to handle contact API
let proxyDB;  // to handle user API
let proxySource; // to handle contact API
let proxyUI;  // to handle user API

const app= express();

// const router= express.Router();

proxyAuth= httpProxy.createProxyMiddleware({
    target: config.NewsAuth_URL,
    pathRewrite:{'^/auth/':'/'}
});

proxyDB= httpProxy.createProxyMiddleware({
    target: config.NewsDB_URL,
    pathRewrite:{'^/newsdb/':'/'}
});
proxySource= httpProxy.createProxyMiddleware({
    target: config.NewsSource_URL,
    pathRewrite:{'^/source/':'/'}
});

proxyUI= httpProxy.createProxyMiddleware({
    target: config.NewsUI_URL,
    pathRewrite:{'^/newsui/':'/'}
});

app.use('/auth/', proxyAuth);
app.use('/newsdb/', proxyDB);
app.use('/source/', proxySource);
app.use('/newsui/', proxyUI);

app.use('/',(req,res)=>{
    res.send("Welcome to GateWay");
})


module.exports = app