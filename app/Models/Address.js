'use strict'

const BaseModel = use('MongooseModel');
const validator = use('App/Validators/Address');

class Address extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      street: {
        type: String,
        required: true,
      },
      number: {
        type: Number,
        required: true,
        min: 0,
      },
      neighborhood: {
        type: String,
        required: true,
      },
      cep: {
        type: String,
        required: true,
      },
      complement: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      }

    }
  }
}

module.exports = Address.buildModel('Address')
