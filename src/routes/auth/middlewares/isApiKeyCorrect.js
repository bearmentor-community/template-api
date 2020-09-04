module.exports = (req, res, next) => {
  // Get the API key from headers
  // X-API-Key: abcdef12345
  const xApiKey = req.get('X-API-Key')
  const isApiKeyCorrect = xApiKey === process.env.EXPRESS_APP_API_KEY

  if (!isApiKeyCorrect) {
    req.isApiKeyCorrect = false
    next()
  } else {
    req.isApiKeyCorrect = true
    next()
  }
}
