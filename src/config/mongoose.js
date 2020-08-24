const mongoose = require('mongoose')

const MONGODB_URI =
  process.env.EXPRESS_APP_MONGODB_URI || 'mongodb://localhost:27017/template'

mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

module.exports = mongoose
