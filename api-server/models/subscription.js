const mongoose = require('mongoose')
const Schema = mongoose.Schema

const subscriptionSchema = new Schema(
    {
        surf_amount: {
            type: Number,
            required: true,
        },
        binding_time: {
            type: Number,
            required: true,
        },
        free_sms: {
            type: Boolean,
            required: true,
        },
        free_calls: {
            type: Boolean,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        initial_price: {
            type: Number,
            required: true,
        },
        reduced_price_months: {
            type: Number,
            required: true,
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Admin',
        },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Subscription', subscriptionSchema)
