const mongoose = require('mongoose');

const superMarketSchema = mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    superMarketName: {
        type: String,
        required: true
    }

});



const superMarket = module.exports = mongoose.model('SuperMarket', superMarketSchema);