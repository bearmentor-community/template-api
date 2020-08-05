const User = require('../model')

module.exports = async (req, res) => {
  const id = req.decodedAccessToken.id

  // Check if the the user's id is exist in the decoded access token
  if (id) {
    const user = await User.findOne({ id: id }, '-password -hash -salt')

    res.status(200).send({
      message: 'Got user account information',
      data: {
        user: user
      }
    })
  } else {
    res.status(400).send({
      message: 'User is not authenticated'
    })
  }
}
