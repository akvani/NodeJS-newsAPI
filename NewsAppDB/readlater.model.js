const mongoose = require("mongoose");
const schema = mongoose.Schema;

const readlaterSchema = new schema({
    author: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: false },
    urlToImage: { type: String, required: true }
    
    

})
module.exports = mongoose.model("Readlater", readlaterSchema);