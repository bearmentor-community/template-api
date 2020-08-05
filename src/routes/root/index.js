const express = require('express')
const router = express.Router()

const { getIndex } = require('./middlewares')

router.get('/', getIndex)

module.exports = router
