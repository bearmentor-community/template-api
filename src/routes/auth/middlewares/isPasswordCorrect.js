const bcrypt = require('../../../utils/bcrypt')

const isPasswordCorrect = async (req, res, next) => {
  if (req.isRegistered) {
    // Check if password is correct by comparing
    // the plain text password with the encrypted password
    const correct = await bcrypt.comparePassword(
      req.body.password,
      req.user.hash
    )

    if (correct) {
      req.isPasswordCorrect = true
      next()
    } else {
      req.isPasswordCorrect = false
      next()
    }
  } else {
    res.status(401).send({
      message: 'The user is not registered yet',
      email: req.body.email
    })
  }
}

module.exports = isPasswordCorrect
