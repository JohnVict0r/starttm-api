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
      },
      password: {
        type: String,
        required: true,
      },
      confirmationToken: {
        type: String,
      },
      isActive: {
        type: Boolean,
        default: false,
      }
    }
  }

}

module.exports = User.buildModel('User')