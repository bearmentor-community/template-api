const express = require('express')
const router = express.Router()

const items = require('./middlewares')

router.post('/seed', items.seed)
router.get('/', items.getAll)
router.get('/:slug', items.getBySlug)
router.delete('/', items.removeAll)

module.exports = router
