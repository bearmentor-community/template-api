const jsonwebtoken = require('jsonwebtoken')

module.exports = async (token) => {
  const JWT_SECRET = process.env.EXPRESS_APP_JWT_SECRET

  if (!JWT_SECRET) {
    console.error('JWT_SECRET is undefined on verifyToken')
  } else {
    try {
      // Verify token with the same configured secret
      const decodedToken = await jsonwebtoken.verify(token, JWT_SECRET)

      return decodedToken
    } catch (error) {
      console.error(`Error when verify token. ${error.name}: ${error.message}`)
      return null
    }
  }
}
