const User = require('../../users/model')

module.exports = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email })

  if (user) {
    req.isRegistered = true
    req.user = user
    next()
  } else {
    req.isRegistered = false
    next()
  }
}
