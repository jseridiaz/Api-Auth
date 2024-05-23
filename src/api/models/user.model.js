const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    password: {
      type: String,
      required: true,
      minlength: [4, 'min 4 characters'],
      trim: true
    },
    rol: {
      type: String,
      required: true,
      default: 'user',
      trim: true
    }
  },
  { timestamps: true, collection: 'users' }
)

userSchema.pre('save', function () {
  this.password = bcrypt.hashSync(this.password, 10)
})

const User = mongoose.model('users', userSchema, 'users')
module.exports = User
