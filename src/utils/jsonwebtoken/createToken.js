const jsonwebtoken = require('jsonwebtoken')

module.exports = async (user) => {
  const JWT_SECRET = process.env.EXPRESS_APP_JWT_SECRET

  if (!JWT_SECRET) {
    console.error('JWT_SECRET is undefined')
  } else {
    // Create the payload without having the sensitive information
    const payload = {
      _id: user._id,
      id: user.id,
      username: user.username,
      name: user.name
    }

    // Create the token and sign with secret
    // It will be expired in 1 day and has iat (issued at) as UNIX timestamp
    try {
      const jwt = await jsonwebtoken.sign(payload, JWT_SECRET, {
        expiresIn: '1d'
      })
      return jwt
    } catch (error) {
      return error
    }
  }
}
