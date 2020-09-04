module.exports = async (req, res) => {
  if (req.decodedAccessToken) {
    res.status(200).send({
      message: 'User is successfully deauthenticated',
      data: {
        email: req.decodedAccessToken.email
      }
    })
  } else {
    res.status(500).send({
      message: 'User is failed to deauthenticate',
      data: {
        email: req.decodedAccessToken.email
      }
    })
  }
}
