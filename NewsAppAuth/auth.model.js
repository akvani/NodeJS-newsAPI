const mongoose = require("mongoose");
const schema = mongoose.Schema;

const registerSchema = new schema({
    firstname: { type: String },
    secondname: { type: String, required: false },
    emailid: { type: String, required: false },
    //username: { type: String, required: true },
    phoneno: { type: String, required: false }    

})
module.exports = mongoose.model("Register", registerSchema);