const {model, Schema} = require('mongoose')

const UserSchema = new Schema(
  {
    username: String,
    password: String
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    },
    versionKey: false
  }
)

module.exports = model('User', UserSchema)
