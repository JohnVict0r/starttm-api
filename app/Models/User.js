'use strict'


const BaseModel = use('MongooseModel');

/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      email: {
        type: String,
        required: true,
      },
      username: {
        type: String,
        required: true,
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