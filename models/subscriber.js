

const mongoose = require('mongoose')

const subscriberschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subscribedtochannel: {
        type: String,
        required: true        
    },
    subscribedate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('subscriber', subscriberschema)

