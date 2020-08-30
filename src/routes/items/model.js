const mongoose = require('../../config/mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)
const uniqueValidator = require('mongoose-unique-validator')

const ItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      unique: true
    },
    slug: {
      type: String,
      unique: true
    },
    html: {
      type: String
    },
    imageUrl: {
      type: String,
      default: `${process.env.EXPRESS_APP_API_URL}/images/`
    }
  },
  {
    timestamps: true
  }
)

ItemSchema.plugin(uniqueValidator)
ItemSchema.plugin(autoIncrement, {
  id: 'items_counter',
  inc_field: 'id'
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item
