const express = require('express')
const router = express.Router()

const auth = require('../auth/middlewares')
const users = require('../users/middlewares')
const { upload } = require('../../utils/multer')

router.post('/seed', auth.isApiKeyCorrect, users.seed)
router.get('/count', users.count)
router.get('/', users.getAll)
router.get('/:username', users.isUsernameExist, users.getByUsername)
router.get(
  '/:id/settings',
  auth.isAuthenticated,
  auth.isAuthorized,
  users.getSettings
)
router.put(
  '/:id/settings',
  auth.isAuthenticated,
  auth.isAuthorized,
  upload.single('avatar'),
  users.updateSettings
)
router.delete('/', auth.isApiKeyCorrect, users.deleteAll)
router.delete('/:id', auth.isAuthenticated, users.deleteByUsername)

module.exports = router
