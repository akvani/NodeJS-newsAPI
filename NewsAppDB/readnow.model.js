const mongoose = require("mongoose");
const schema = mongoose.Schema;

const readnowSchema = new schema({
    newstitle: { type: String, required: true },
    newsurl: { type: String, required: false },
    imgurl: { type: String, required: true },
    author: { type: String, required: true }

})
module.exports = mongoose.model("ReadNow", readnowSchema);