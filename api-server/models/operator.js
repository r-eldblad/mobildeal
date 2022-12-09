const mongoose = require('mongoose')
const Schema = mongoose.Schema

const operatorSchema = new Schema({
    operator_name: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    operator_logo: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    affiliate_link: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'Admin',
    },
    subscriptions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Subscription',
        },
    ],
})

module.exports = mongoose.model('Operator', operatorSchema)
