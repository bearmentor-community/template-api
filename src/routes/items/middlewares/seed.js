const Item = require('../model')
const seedItemsData = require('../seed.json')

module.exports = async (req, res) => {
  const foundItem = await Item.find()

  // Don't continue if the items already exists
  if (foundItem.length > 0) {
    res.status(400).send({
      message: 'Failed to seed initial items because they are already exists'
    })
  } else {
    await Item.insertMany(seedItemsData)

    res.status(200).send({
      message: 'Seed initial items completed'
    })
  }
}
