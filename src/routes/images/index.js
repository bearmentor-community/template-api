const express = require('express')
const router = express.Router()

const images = require('./middlewares')
const { upload } = require('../../utils/multer')

router.get('/upload', images.indexUploadImage)
router.post('/upload', upload.single('image'), images.uploadImage)

module.exports = router
