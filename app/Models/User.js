'use strict'

const BaseModel = use('MongooseModel');
const validator = use('App/Validators/User');

class User extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          isAsync: true,
          validator: validator.validateEmail,
          message: 'Is not a valid email',
        }
      },
      username: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isAsync: true,
          validator: validator.validateUsername,
          message: 'Its not a valid username',
        }
      },
      password: {
        type: String,
        required: true,
      },
      roles: {
        type: [],
        required: false,
      }
    }
  }

}

module.exports = User.buildModel('User')