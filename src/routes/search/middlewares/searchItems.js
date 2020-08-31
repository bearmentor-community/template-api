const Item = require('../../items/model')

module.exports = async (req, res) => {
  // Search item for title by keyword
  const items = await Item.find({
    $or: [
      {
        title: { $regex: req.query.keyword, $options: 'i' }
      },
      {
        html: { $regex: req.query.keyword, $options: 'i' }
      }
    ]
  })

  res.send({
    message: 'Search items success',
    query: {
      keyword: req.query.keyword
    },
    data: {
      items: items
    }
  })
}
