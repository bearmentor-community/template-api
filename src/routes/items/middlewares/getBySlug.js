const Item = require('../model')

module.exports = async (req, res) => {
  // Find one item by slug, case insensitive
  const item = await Item.findOne({
    slug: {
      $regex: new RegExp('^' + req.params.slug + '$', 'i')
    }
  })

  res.status(200).send({
    message: 'Get item by slug',
    data: {
      item: item
    }
  })
}
