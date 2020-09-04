const express = require('express')
const router = express.Router()

const auth = require('../auth/middlewares')
const items = require('../items/middlewares')

router.post('/seed', auth.isApiKeyCorrect, items.seed)
router.get('/', items.getAll)
router.get('/:slug', items.getBySlug)
router.delete('/', items.deleteAll)

module.exports = router
