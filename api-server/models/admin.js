const mongoose = require('mongoose')
const Schema = mongoose.Schema

const adminSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            min: 6,
            max: 255,
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 255,
        },
        password: {
            type: String,
            required: true,
            max: 1024,
            min: 6,
        },
        subscriptions: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Subscription',
            },
        ],
    },
    { timestamps: true }
)

module.exports = mongoose.model('Admin', adminSchema)
