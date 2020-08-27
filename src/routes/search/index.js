const express = require('express')
const router = express.Router()

const search = require('./middlewares')

router.get('/items', search.searchItems)

module.exports = router
