const express = require('express')
const router = express.Router()

const images = require('./middlewares')
const { upload } = require('../../utils/multer')

router.post('/upload', upload.single('image'), images.uploadImage)

module.exports = router
