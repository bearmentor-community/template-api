const User = require('../../users/model')

const isAuthorizedAdmin = async (req, res, next) => {
  const decodedAccessToken = req.decodedAccessToken
  const user = await User.findOne({ id: decodedAccessToken.id })

  // will fix
  // if (user.isAdmin) {
  if (user) {
    next()
  } else {
    res.status(403).send({
      message: 'The user is unauthorized to do that',
      error: 'User is not an admin'
    })
  }
}

module.exports = isAuthorizedAdmin
