const mongoose = require('../../config/mongoose')
const autoIncrement = require('mongoose-sequence')(mongoose)
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      min: [2, 'Name is too short'],
      max: [100, 'Name is too long']
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      min: [0, 'Username is too short'],
      max: [20, 'Username is too long'],
      unique: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      min: [2, 'Email is too short'],
      unique: true
    },
    salt: {
      type: String,
      required: true
    },
    hash: {
      type: String,
      required: [true, 'Password is required']
    },
    avatarUrl: {
      type: String,
      default: `${process.env.EXPRESS_APP_API_URL}/avatars/default.jpg`
    },
    bio: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

UserSchema.plugin(uniqueValidator)
UserSchema.plugin(autoIncrement, {
  id: 'users_counter',
  inc_field: 'id'
})

const User = mongoose.model('User', UserSchema)

module.exports = User
