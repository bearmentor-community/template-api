const User = require('../model')

module.exports = async (req, res) => {
  const decodedAccessToken = req.decodedAccessToken
  const id = Number(req.params.id)
  const user = await User.findOne({ id: id })

  // Continue if the user is found and the token is match with the user's id
  if (user && decodedAccessToken.id === user.id) {
    const result = await User.findOneAndDelete(
      { id: id },
      { select: '-password -hash -salt' }
    )

    res.status(200).send({
      message: 'Deleted user by id',
      data: {
        id: id,
        deletedUser: {
          name: result.name,
          email: result.email,
          id: result.id
        }
      }
    })
  } else if (!user) {
    res.status(404).send({
      message: 'User is not found by that id',
      data: {
        id: id
      }
    })
  } else if (decodedAccessToken.id !== user.id) {
    res.status(404).send({
      message:
        'User is not authorized to delete the selected user with that id',
      data: {
        id: id
      }
    })
  }
}
