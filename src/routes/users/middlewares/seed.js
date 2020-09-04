const User = require('../model')
const seedUsersData = require('../seed.json')
const bcrypt = require('../../../utils/bcrypt')

const { asyncForEach } = require('../../../utils/async')

module.exports = async (req, res) => {
  const foundUsers = await User.find()

  if (!req.isApiKeyCorrect) {
    res.status(400).send({
      message: 'API key is not found'
    })
  } else if (foundUsers.length > 0) {
    res.status(500).send({
      message: 'Seed initial users failed because they are already registered'
    })
  } else {
    try {
      // Use asyncForEach(), not User.insert() or seedUsersData.forEach()
      // to preserve the order of the users in the array
      // then each user has to encrypt password and use customized avatar
      const startSeed = async () => {
        await asyncForEach(seedUsersData, async (user) => {
          const { salt, hash } = await bcrypt.hashPassword(user.password)
          await User.create({
            ...user,
            avatarUrl: `${process.env.EXPRESS_APP_API_URL}/${user.avatarUrl}`,
            salt: salt,
            hash: hash
          })
        })
      }

      startSeed()

      res.status(201).send({
        message: 'Seed initial users completed'
      })
    } catch (error) {
      res.status(500).send({
        message: 'Seed initial users failed',
        error: error
      })
    }
  }
}
