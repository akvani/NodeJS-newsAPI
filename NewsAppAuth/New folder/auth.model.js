const mongoose = require("mongoose");
const schema = mongoose.Schema;

const registerSchema = new schema({
    firstname: { type: String, required: true },
    secondname: { type: String, required: false },
    jobtitle: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true }    

})
module.exports = mongoose.model("Register", registerSchema);