const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const ItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required']
    },
    slug: {
      type: String
    },
    html: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

ItemSchema.plugin(AutoIncrement, {
  id: 'items_counter',
  inc_field: 'id'
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item
