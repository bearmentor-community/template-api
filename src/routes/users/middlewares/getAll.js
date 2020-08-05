const User = require('../model')

module.exports = async (req, res) => {
  const users = await User.find({}, '-password -hash -salt')

  res.status(200).send({
    message: 'Get all users',
    data: {
      users: users
    }
  })
}
