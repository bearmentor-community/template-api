const User = require('../../users/model')

module.exports = async (req, res, next) => {
  const user = await User.findOne({ username: req.body.username })

  if (user) {
    req.isUserUsernameRegistered = true
    req.user = user
    next()
  } else {
    req.isUserUsernameRegistered = false
    next()
  }
}
