'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

const validator = user('App/Validators/Person');

class Person extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User'
      },
      name: {
        type: String,
        required: true,
      },
      sex: {
        type: String,
        required: true,
        enum: ['MALE', 'FEMALE']
      },
      birth:{
        type: Date,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
      },
      rg: {
        type: String,
        required: false,
      },
      address: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
      }
    }
  }
}

module.exports = Address.buildModel('Person')
