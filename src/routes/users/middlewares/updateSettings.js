const User = require('../model')

module.exports = async (req, res) => {
  const id = req.decodedAccessToken.id
  const user = await User.findOne({ id: id })
  const body = {
    avatarUrl: req.file ? `/uploads/${req.file.filename}` : user.avatarUrl,
    name: req.body.name || user.name,
    username: req.body.username || user.username,
    bio: req.body.bio || user.bio
  }

  const result = await User.findOneAndUpdate({ id: user.id }, body, {
    new: true,
    select: '-password -hash -salt'
  })

  res.status(200).send({
    message: 'Updated user settings',
    data: {
      user: result
    }
  })
}
