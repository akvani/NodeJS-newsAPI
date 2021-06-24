const mongoose = require("mongoose");
const schema = mongoose.Schema;
//const uuid4 = require('uuid4')


const readnowSchema = new schema({
   key:{type: String },
    author: { type: String  },
    title: { type: String  },
    urlToImage: { type: String },
    description: { type: String, required: true },
    url: { type: String }
   
    

})
module.exports = mongoose.model("ReadNow", readnowSchema);