const axios = require("axios");

    const getbycategory= async(category,data) => {

        //console.log(category +" from dao")
        return await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=74733a9f6879478ca5e3a2c4c0947409`)
                 
        
}
    module.exports = {getbycategory}