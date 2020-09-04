const express = require('express')
const router = express.Router()

const { getWelcome, resetEverything } = require('./middlewares')
const auth = require('../auth/middlewares')

router.get('/', getWelcome)
router.delete('/', auth.isApiKeyCorrect, resetEverything)

module.exports = router
