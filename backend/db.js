const mongoose = require('mongoose');

const mognoURI = "mongodb://localhost:27017/mynotebook?directConnection=true&ssl=false&readPreference=primary";

const connectToMongo = ()=>{
    mongoose.connect(mognoURI, ()=>{
        console.log('Connected to Mongo Successfully');
    })
}

module.exports = connectToMongo;