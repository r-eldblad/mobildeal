const router = require('express').Router()
const Operator = require('../models/operator')
const Admin = require('../models/admin')
const Subscription = require('../models/subscription')
const verifyToken = require('../middlewares/verifyToken')

// Add new operator
router.post('/add-operator', async (req, res) => {
    const operator = await new Operator({
        operator_name: req.body.operator_name,
        operator_logo: req.body.operator_logo,
        affiliate_link: req.body.affiliate_link,
        admin: req.body.admin,
    })

    await Admin.findOneAndUpdate({ _id: operator.admin }, { $push: { operators: operator._id } })

    await Subscription.findOneAndUpdate(
        { _id: operator.admin },
        { $push: { operator: operator._id } }
    )

    await operator.save()
    res.send('Operatören lades till.')
})

// Fetch all available operators
router.get('/all', async (req, res, next) => {
    Operator.find()
        .populate({
            path: 'subscriptions',
            model: 'Subscription',
        })
        .exec((err, operators) => {
            if (err) return next(err)
            res.send(operators)
        })
})

router.post('/findSubscriptionsByOperatorName', async (req, res, next) => {
    const operatorName = req.body.operatorName

    try {
        const operator = await Operator.findOne({ operator_name: operatorName })
            .populate({
                path: 'subscriptions',
                model: 'Subscription',
                populate: {
                    path: 'operator',
                    model: 'Operator',
                },
            })
            .exec()
        res.send(operator)
    } catch (err) {
        return next(err)
    }
})

router.post('/sortSubscriptionsBySurfAmount', async (req, res) => {
    const surfAmount = req.body.surfAmount

    Subscription.find({ surf_amount: { $gte: surfAmount } })
        .populate('operator')
        .exec((err, subscriptions) => {
            if (err) {
                return res.status(500).json({ error: err })
            }
            res.send(subscriptions)
        })
})

router.post('/sortSubscriptionsByCost', async (req, res) => {
    const cost = req.body.cost

    Subscription.find({ price: { $lte: cost } })
        .populate('operator')
        .exec((err, subscriptions) => {
            if (err) {
                return res.status(500).json({ error: err })
            }
            res.send(subscriptions)
        })
})

router.get('/:id', async (req, res) => {
    const operator = await Operator.findById(req.params.id)
    res.json(operator)
})

module.exports = router
