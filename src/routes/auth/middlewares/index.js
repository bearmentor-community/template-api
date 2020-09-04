module.exports = {
  authenticateUser: require('./authenticateUser'),
  deauthenticateUser: require('./deauthenticateUser'),
  getAuthenticatedUser: require('./getAuthenticatedUser'),
  isApiKeyCorrect: require('./isApiKeyCorrect'),
  isAuthenticated: require('./isAuthenticated'),
  isAuthorized: require('./isAuthorized'),
  isAuthorizedAdmin: require('./isAuthorizedAdmin'),
  isPasswordCorrect: require('./isPasswordCorrect'),
  isUserRegistered: require('./isUserRegistered'),
  registerNewUser: require('./registerNewUser')
}
