// Database Connection

const mongoose = require('mongoose')

// Creating Mongoo Connection
function createMongoConnection(){
    //console.log(dbConfig.config.mongourl)
  //  mongoose.connect(dbConfig.mongourl);
    mongoose.connect('mongodb://localhost:27017/NewsDB'     , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
//console.log("Create Mongo conection")
//console.log(mongoose.connection)
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