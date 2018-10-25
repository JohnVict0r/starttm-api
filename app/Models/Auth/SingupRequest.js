'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

const validator = use('App/Validators/User');

class SingupRequest extends BaseModel {
  static boot({ schema }) {

    this.index({ 'created_at': 1 }, { expireAfterSeconds: 30 });
    this.addHook('preSave', 'SingupRequestHook.checkDuplicateUser');

  }

  static get schema() {
    return {
      username: {
        type: String,
        required: true,
        validate:{
          isAsync: true,
          validator: validator.validateUsername,
          message: 'Invalid Username'
        }
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isAsync: true,
          validator: validator.validateEmail,
          message: 'Invalid Email',
        }
      },
      password: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
        unique: true,
      }
    }
  }
}

module.exports = SingupRequest.buildModel('SingupRequest')
