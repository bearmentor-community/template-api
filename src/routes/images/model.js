const mongoose = require('../../config/mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const ImageSchema = mongoose.Schema(
  {
    // Complete URL
    url: {
      type: String
      // https://api.example.com/uploads/image.jpg
    },
    // Path to file system
    path: {
      type: String
      // public/uploads/image.jpg
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
