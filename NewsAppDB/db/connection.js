// Database Connection

const mongoose = require('mongoose')

// Creating Mongoo Connection
function createMongoConnection(){
    mongoose.connect('mongodb://localhost:27017/NewsDB' , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
 console.log(mongoose.Model);
    return mongoose.connection;
   
}


// get mongoo connection string

function getMongoConnection(){
    return mongoose.connection;
}


module.exports={
    getMongoConnection,
    createMongoConnection
}