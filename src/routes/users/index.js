const express = require('express')
const router = express.Router()

const auth = require('../auth/middlewares')
const users = require('./middlewares')
const { upload } = require('../../utils/multer')

router.post('/seed', users.seed)
router.get('/', users.getAll)
router.get('/:username', users.isUsernameExist, users.getByUsername)
router.delete('/:id', auth.isAuthenticated, users.deleteByUsername)
router.delete(
  '/',
  auth.isAuthenticated,
  auth.isAuthorizedAdmin,
  users.deleteAll
)
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

module.exports = router
