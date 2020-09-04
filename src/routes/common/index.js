const express = require('express')
const router = express.Router()

const common = require('./middlewares')
const auth = require('../auth/middlewares')

router.get('/', common.getWelcome)
router.delete('/', auth.isApiKeyCorrect, common.resetEverything)

module.exports = router
