const User = require('../model')

module.exports = async (req, res, next) => {
  const username = req.params.username
  const user = await User.findOne({ username: username })

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
