const Item = require('../model')

module.exports = async (req, res) => {
  const items = await Item.find({})

  res.status(200).send({
    message: 'Get all items',
    data: {
      items: items
    }
  })
}
