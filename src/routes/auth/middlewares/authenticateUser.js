const jsonwebtoken = require('../../../utils/jsonwebtoken')

module.exports = async (req, res) => {
  if (!req.isPasswordCorrect) {
    res.status(401).send({
      message: 'User authentication failed because password is incorrect',
      data: {
        password: req.body.password
      }
    })
  } else {
    // Create an access token with non-sensitive information
    const accessToken = await jsonwebtoken.createToken(req.user)

    if (!accessToken) {
      res.status(500).send({
        message: 'User authentication failed because token creation is failed'
      })
    } else {
      res.status(200).send({
        message: 'User authentication is success',
        data: {
          accessToken: accessToken,
          user: {
            username: req.user.username,
            email: req.user.email,
            name: req.user.name
          }
        }
      })
    }
  }
}
