module.exports = (req, res, next) => {
  const API_KEY = process.env.EXPRESS_APP_API_KEY

  // Get the API key from headers
  // X-API-Key: abcdef12345
  const xApiKey = req.headers['X-API-Key']
  const isApiKeyCorrect = API_KEY === xApiKey

  if (!isApiKeyCorrect) {
    req.isApiKeyCorrect = true
    next()
  } else {
    req.isApiKeyCorrect = true
    next()
  }
}
