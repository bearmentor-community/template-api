const User = require('../../users/model')

module.exports = async (req, res, next) => {
  const id = Number(req.params.id)
  const user = await User.findOne({ id: req.decodedAccessToken.id })

  if (id === user.id) {
    next()
  } else {
    res.status(403).send({
      message: 'The user is unauthorized to do that',
      error: 'The id inside the token does not match with the expected user id'
    })
  }
}
