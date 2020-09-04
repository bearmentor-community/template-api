const express = require('express')
const router = express.Router()

const auth = require('./middlewares')

router.get('/profile', auth.isAuthenticated, auth.getAuthenticatedUser)
router.post('/register', auth.isUserRegistered, auth.registerNewUser)
router.post(
  '/login',
  auth.isUserRegistered,
  auth.isPasswordCorrect,
  auth.authenticateUser
)
router.post('/logout', auth.isAuthenticated, auth.deauthenticateUser)

module.exports = router
