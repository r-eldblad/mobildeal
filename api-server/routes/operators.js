const router = require('express').Router()
const Operator = require('../models/operator')
const verifyToken = require('../middlewares/verifyToken')

// Add new operator
router.post('/add-operator', verifyToken, async (req, res) => {
    const operator = await new Operator({
        operator_name: req.body.operator_name,
        operator_logo: req.body.operator_logo,
        affiliate_link: req.body.affiliate_link,
    })

    await operator.save()
    res.send('Operatören lades till.')
})

// Fetch all available operators
router.get('/all', async (req, res) => {
    const operators = await Operator.find()
    res.send(operators)
})

module.exports = router
