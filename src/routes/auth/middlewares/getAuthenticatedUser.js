const User = require('../../users/model')

module.exports = async (req, res, next) => {
  const user = await User.findOne({ id: req.decodedAccessToken.id })

  const userProfile = {
    _id: user._id,
    id: user.id,
    avatarUrl: user.avatarUrl,
    bio: user.bio,
    createdAt: user.createdAt,
    email: user.email,
    name: user.name,
    updatedAt: user.updatedAt,
    username: user.username
  }

  res.status(200).send({
    message: 'Get authenticated user profile',
    data: {
      user: userProfile
    }
  })
}
