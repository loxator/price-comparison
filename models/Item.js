const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    serialNumber:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    superMarketID:{
        type:Number,
        required:true
    }
});



const Item = module.exports = mongoose.model('Item', ItemSchema);