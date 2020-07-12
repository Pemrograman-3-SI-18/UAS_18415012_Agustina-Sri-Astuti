const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String
    },
    qty : {
        type : String
    }
})

module.exports = mongoose.model('darahs', userSchema)
