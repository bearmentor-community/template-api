const Item = require('../model')

module.exports = async (req, res) => {
  await Item.remove()

  res.status(200).send({
    message: 'Removed all items'
  })
}
