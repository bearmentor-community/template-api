const Item = require('../../items/model')

module.exports = async (req, res) => {
  // Search item for title by keyword
  console.log(req.query)
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

  console.log(items)

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
