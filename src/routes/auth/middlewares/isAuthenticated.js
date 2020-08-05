const jsonwebtoken = require('../../../utils/jsonwebtoken')

module.exports = async (req, res, next) => {
  try {
    // Get the token in Authorization header
    // Authorization: Bearer ${token}
    const accessToken = req.headers.authorization.split(' ')[1]

    if (accessToken) {
      // Verify the access token
      const decodedAccessToken = await jsonwebtoken.verifyToken(accessToken)

      if (decodedAccessToken) {
        req.accessToken = accessToken
        req.decodedAccessToken = decodedAccessToken
        next()
      } else {
        res.status(401).send({
          message: 'The user is unable to authenticate',
          error: 'Token is invalid to be verified'
        })
      }
    }
  } catch (error) {
    console.error('Error when getting the token from Authorization header.')

    res.status(400).send({
      message: 'The user is unable to authenticate',
      error: 'Token is not provided in the Authorization header'
    })
  }
}
