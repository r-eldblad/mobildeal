const router = require('express').Router()
const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')

router.get('/', verifyToken, async (req, res) => {
    const admin = await Admin.findById(req['user'])
    res.send(admin)
})

router.post('/register', async (req, res) => {
    const emailExist = await Admin.findOne({ email: req.body.email })
    if (emailExist) {
        return res.status(400).send('Email already exist.')
    }

    // hashes password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Creates a new admin and saves it inside of the database
    const admin = new Admin({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
    })
    try {
        const savedAdmin = await admin.save()
        res.send(savedAdmin)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    const admin = await Admin.findOne({ email: req.body.email })
    if (!admin) return res.status(400).send('Email does not exist.')
    const validPass = await bcrypt.compare(req.body.password, admin.password)
    if (!validPass) return res.status(400).send('Invalid password.')

    const token = jwt.sign({ _id: admin._id }, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router
