const User = require('../../users/model')
const bcrypt = require('../../../utils/bcrypt')

const reservedUsernames = require('../../users/data/reservedUsernames.json')

module.exports = async (req, res) => {
  if (req.isUserEmailRegistered) {
    res.status(409).send({
      message: 'User is already registered with that email',
      data: {
        email: req.body.email
      }
    })
  } else if (req.isUserUsernameRegistered) {
    res.status(409).send({
      message: 'User is already registered with that username',
      data: {
        username: req.body.username
      }
    })
  } else {
    const { username, name, email, password } = req.body
    const isUsernameProhibited = reservedUsernames.includes(username)

    if (!username) {
      res.status(422).send({
        message: 'There is no username'
      })
    } else if (isUsernameProhibited) {
      res.status(422).send({
        message: 'That username is prohibited',
        data: {
          username: req.body.username
        }
      })
    } else if (!name) {
      res.status(422).send({
        message: 'There is no name'
      })
    } else if (!email) {
      res.status(422).send({
        message: 'There is no email'
      })
    } else if (!password) {
      res.status(422).send({
        message: 'There is no password'
      })
    } else {
      // Encrypt password with plain text from request body
      // Destructure returned value to get salt and password
      const { salt, hash } = await bcrypt.hashPassword(password)
      // This could also be refactored into the user model itself

      // Create a new user object
      const user = {
        username: username,
        name: name,
        email: email,
        salt: salt,
        hash: hash,
        avatarUrl: `${process.env.EXPRESS_APP_API_URL}/avatars/default.jpg`
      }

      // Create an actual user in the database
      await User.create(user)

      // Only send data without password/hash/salt
      res.status(201).send({
        message: 'User is successfully registered',
        data: {
          user: {
            username: username,
            name: user.name,
            email: user.email
          }
        }
      })
    }
  }
}
