const bcrypt = require('../../../utils/bcrypt')

const isPasswordCorrect = async (req, res, next) => {
  if (!req.isUserRegistered) {
    res.status(401).send({
      message: 'User is not registered yet with that email',
      email: req.body.email
    })
  } else {
    // Check if password is correct by comparing
    // the plain text password with the encrypted password
    const isPasswordCorrect = await bcrypt.comparePassword(
      req.body.password, // from client
      req.user.hash // from database
    )

    if (isPasswordCorrect) {
      req.isPasswordCorrect = true
      next()
    } else {
      req.isPasswordCorrect = false
      next()
    }
  }
}

module.exports = isPasswordCorrect
