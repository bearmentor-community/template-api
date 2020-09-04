const bcrypt = require('bcrypt')

module.exports = async (plainPassword) => {
  // Generate salt
  const salt = await bcrypt.genSalt(10)

  // Encrypt/hash the plain password with generated salt
  // With becrypt, we have to use the salt
  const hash = await bcrypt.hash(plainPassword, salt)

  // Return both salt & hash as an object
  // Will be used in the registerNewUser middleware
  // Both salt and hash will be stored in the database
  // But we will NOT store the plainPassword in the database
  return {
    salt,
    hash
  }
}
