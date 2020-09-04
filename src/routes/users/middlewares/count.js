const User = require('../model')

module.exports = async (req, res) => {
  const usersCount = await User.estimatedDocumentCount()

  res.status(200).send({
    message: 'Get count of all users',
    data: {
      usersCount: usersCount
    }
  })
}
