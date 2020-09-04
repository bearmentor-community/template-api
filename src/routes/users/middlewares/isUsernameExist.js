const safe = require('safe-regex')

const User = require('../model')

module.exports = async (req, res, next) => {
  // Find one user by username, case insensitive
  const username = req.params.username
  // eslint-disable-next-line security/detect-non-literal-regexp
  const regexQuery = new RegExp(`^${username}$`, 'i')
  const isRegexSafe = safe(regexQuery)

  if (!isRegexSafe) {
    res.status(200).send({
      message: 'Username is malformed',
      data: {
        username: username
      }
    })
  } else {
    const user = await User.findOne({
      username: {
        $regex: regexQuery
      }
    })

    if (!user) {
      res.status(404).send({
        message: 'User is not found by that username',
        data: {
          username: username
        }
      })
    } else {
      // Continue when everything is okay:
      // - Regex is safe
      // - User is found
      req.user = user
      next()
    }
  }
}
