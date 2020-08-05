const User = require('../model')

module.exports = async (req, res) => {
  const name = req.query.name

  if (name) {
    const users = await User.find(
      { name: { $regex: name, $options: 'i' } },
      '-password -hash -salt'
    )
    if (users) {
      res.status(200).send({
        message: 'Get users by name',
        data: {
          users: users
        }
      })
    } else {
      res.status(404).send({
        message: 'User not found by that name'
      })
    }
  } else {
    res.status(400).send({
      message: 'Query name is required'
    })
  }
}
