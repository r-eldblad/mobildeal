const router = require('express').Router()
const Operator = require('../models/operator')
const Admin = require('../models/admin')
const Subscription = require('../models/subscription')
const verifyToken = require('../middlewares/verifyToken')

// Add new operator
router.post('/add-operator', async (req, res) => {
    const operator = await new Operator({
        _id: mongoose.Types.ObjectId(),
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
router.get('/all', async (req, res) => {
    const operators = await Operator.find()
    res.send(operators)
})

module.exports = router
