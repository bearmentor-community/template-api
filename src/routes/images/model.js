const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const ImageSchema = mongoose.Schema(
  {
    url: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

ImageSchema.plugin(AutoIncrement, {
  id: 'images_counter',
  inc_field: 'id'
})

const Image = mongoose.model('Image', ImageSchema)

module.exports = Image
