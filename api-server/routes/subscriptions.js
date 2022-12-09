const router = require('express').Router()
const { default: mongoose } = require('mongoose')
const verifyToken = require('../middlewares/verifyToken')
const Admin = require('../models/admin')
const Operator = require('../models/operator')
const Subscription = require('../models/subscription')

// adds a new subscription
router.post('/add-subscription', verifyToken, async (req, res) => {
    try {
        const subscription = await new Subscription({
            _id: mongoose.Types.ObjectId(),
            surf_amount: req.body.surf_amount,
            binding_time: req.body.binding_time,
            free_sms: req.body.free_sms,
            free_calls: req.body.free_calls,
            price: req.body.price,
            initial_price: req.body.initial_price,
            reduced_price_months: req.body.reduced_price_months,
            operator: req.body.operator,
            admin: req.body.admin,
        })

        await Admin.findOneAndUpdate(
            { _id: subscription.admin },
            { $push: { subscriptions: subscription._id } }
        )

        await Operator.findOneAndUpdate(
            { _id: subscription.operator },
            { $push: { subscriptions: subscription._id } }
        )

        await subscription.save()
        res.send('Abonnemanget lades till')
    } catch (err) {
        res.send('Du måste fylla i alla fälten.')
        res.status(400)
    }
})

// Fetches all subscriptions from the database
router.get('/all', async (req, res) => {
    const subscriptions = await Subscription.find()
    res.send(subscriptions)
})

// Fetches a subscripton with specific id
router.get('/:id', async (req, res) => {
    const subscription = await Subscription.findById(req.params.id)
    res.json(subscription)
})

// deletes a subscription with a specific id
router.delete('/delete/:id', async (req, res) => {
    const subscription = await Subscription.findById(req.params.id)
    try {
        // Pulls/deletes id from Admin and Operator subscriptions array

        await Admin.updateOne(
            { _id: subscription.admin },
            { $pull: { subscriptions: subscription._id } }
        )
        await Operator.updateOne(
            { _id: subscription.operator },
            { $pull: { subscriptions: subscription._id } }
        )

        await Subscription.deleteOne({ _id: req.params.id })
        res.send('Abonnemanget raderades.')
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router

/*

{
    "operator_name": "Telia",
    "operator_logo": "logo goes here",
    "affiliate_link": "link goes here",
    "surf_amount": 4,
    "binding_time": 24,
    "free_sms": true,
    "free_calls": true,
    "price": 50,
    "initial_price": 99,
    "reduced_price_months": 3,
    "adminId": "6256de6b65c3a3f171a392fb" 
}



*/
