const axios = require("axios");

axios.get(`https://newsapi.org/v2/sources?apiKey=74733a9f6879478ca5e3a2c4c0947409`)
               
    .then((response)=>{(console.log(response.data))})
    .catch(console.error)
       