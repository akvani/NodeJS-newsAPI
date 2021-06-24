const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const userShema=new Schema({
    firstname:{type: String, required: true},    
    secondname:{type: String, required: true},
    emailid:{type: String, required: true, lowercase: true},
    password: {type: String, required: true},
    phoneno:{type: String, required: true}
})

module.exports=mongoose.model('user', userShema);