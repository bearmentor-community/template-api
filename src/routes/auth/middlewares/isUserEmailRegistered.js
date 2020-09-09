const User = require('../../users/model')

module.exports = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    req.isUserEmailRegistered = true
    req.user = user
    next()
  } else {
    req.isUserEmailRegistered = false
    next()
  }
}
