const User = require('../model')

module.exports = async (req, res, next) => {
  const username = req.params.username

  // Find one user by username, case insensitive
  const user = await User.findOne({
    username: { $regex: new RegExp('^' + username + '$', 'i') }
  })

  if (user) {
    req.user = user
    next()
  } else if (!user) {
    res.status(404).send({
      message: 'User is not found by that username',
      data: {
        username: username
      }
    })
  }
}
