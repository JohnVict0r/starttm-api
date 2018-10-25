'use strict'

const BaseModel = use('MongooseModel')

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
        minLength: 0,
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
        type: Number,
        required: true,
        min: 0,
      },
      state: {
      type: Number,
        required: true,
        min: 0,
      }

    }
  }
}

module.exports = Address.buildModel('Address')
