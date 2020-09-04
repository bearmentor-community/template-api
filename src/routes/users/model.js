const mongoose = require('../../config/mongoose')
const validate = require('mongoose-validator')
const autoIncrement = require('mongoose-sequence')(mongoose)
const uniqueValidator = require('mongoose-unique-validator')

// eslint-disable-next-line security/detect-unsafe-regex
const nameRegex = /\b[^\d\W]+\b/i

const nameValidator = [
  validate({
    validator: 'matches',
    arguments: nameRegex,
    message: 'Name should contain characters without number'
  })
]

// eslint-disable-next-line security/detect-unsafe-regex
const emailRegex = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/i

const emailValidator = [
  validate({
    validator: 'matches',
    arguments: emailRegex,
    message: 'Email should user proper format'
  })
]

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      min: [2, 'Name is too short'],
      max: [100, 'Name is too long'],
      validate: nameValidator
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
      unique: true,
      validate: emailValidator
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
