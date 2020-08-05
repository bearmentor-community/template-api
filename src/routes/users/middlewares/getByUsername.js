module.exports = async (req, res) => {
  const user = {
    _id: req.user._id,
    id: req.user.id,
    avatarUrl: req.user.avatarUrl,
    bio: req.user.bio,
    createdAt: req.user.createdAt,
    email: req.user.email,
    name: req.user.name,
    updatedAt: req.user.updatedAt,
    username: req.user.username
  }

  res.status(200).send({
    message: 'Get one user by username',
    data: {
      user: user
    }
  })
}
