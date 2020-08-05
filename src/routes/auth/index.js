const express = require('express')
const router = express.Router()

const auth = require('./middlewares')

router.post('/register', auth.isRegistered, auth.register)
router.post(
  '/login',
  auth.isRegistered,
  auth.isPasswordCorrect,
  auth.authenticate
)
router.post('/logout', auth.isAuthenticated, auth.deauthenticate)

module.exports = router
