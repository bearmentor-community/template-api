const bcrypt = require('bcrypt')

module.exports = async (plainPassword, hash) => {
  const isPasswordCorrect = await bcrypt.compare(plainPassword, hash)

  return isPasswordCorrect
}
