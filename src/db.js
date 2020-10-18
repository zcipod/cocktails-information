const mongoose = require('mongoose')
const DB_URI = require('../globalConfig')


let config = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}

const cocktailsSchema = new mongoose.Schema({
    strDrink: {
        unique: true,
        type: String,
        max: 50
    },
    strInstructions: {
        type: String,
        max: 200
    }
})

mongoose.connect(DB_URI, config)
const db = mongoose.model("model", cocktailsSchema)

exports.db = db