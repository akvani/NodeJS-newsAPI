const mongoose = require("mongoose");
const schema = mongoose.Schema;

const readlaterSchema = new schema({
    newstitle: { type: String, required: true },
    newsurl: { type: String, required: false },
    imgurl: { type: String, required: true },
    author: { type: String, required: true }
    

})
module.exports = mongoose.model("Register", readlaterSchema);