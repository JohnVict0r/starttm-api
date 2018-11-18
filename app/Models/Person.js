'use strict'

const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

const validator = use('App/Validators/Person');

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
        unique: true,
      },
      rg: {
        type: String,
        required: true,
        unique: true,
      },
      /*
      address: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Address'
      }
      */
    }
  }
}

module.exports = Person.buildModel('Person')
