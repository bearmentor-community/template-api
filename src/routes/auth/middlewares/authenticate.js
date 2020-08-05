const jsonwebtoken = require('../../../utils/jsonwebtoken')

module.exports = async (req, res) => {
  // Only continue if user is registered and the password is correct
  if (req.isRegistered && req.user && req.isPasswordCorrect) {
    // Create an access token
    const accessToken = await jsonwebtoken.createToken(req.user)

    if (accessToken) {
      res.status(200).send({
        message: 'User is successfully authenticated',
        data: {
          accessToken: accessToken,
          user: req.user
        }
      })
    } else {
      res.status(500).send({
        message: 'Authentication failed because token creation is failed'
      })
    }
  } else if (!res.isPasswordCorrect) {
    res.status(401).send({
      message: 'Authentication failed because password is incorrect',
      data: {
        password: req.body.password
      }
    })
  } else {
    res.status(401).send({
      message: 'Authentication failed because of unknown reason'
    })
  }
}
