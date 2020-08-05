const User = require('../../users/model')
const bcrypt = require('../../../utils/bcrypt')

module.exports = async (req, res) => {
  if (req.isRegistered) {
    res.status(409).send({
      message: 'The user is already registered with that email',
      data: {
        email: req.body.email
      }
    })
  } else {
    // Destructure user's data from request body
    const { username, name, email, password } = req.body

    // Encrypt password with plain text from request body
    // Destructure returned value to get salt and password
    const { salt, hash } = await bcrypt.hashPassword(password)

    // Create a new user object
    const user = {
      username: username,
      name: name,
      email: email,
      salt: salt,
      hash: hash
    }

    // Create an actual user in the database
    await User.create(user)

    // Only send the name and email, without salt and password
    res.status(201).send({
      message: 'User is successfully registered',
      data: {
        user: {
          name: user.name,
          email: user.email
        }
      }
    })
  }
}
