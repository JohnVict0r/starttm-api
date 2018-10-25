'use strict'

const BaseModel = use('MongooseModel')

class Person extends BaseModel {
  static boot({ schema }) {

  }

  static get schema() {
    return {
      id_user: {
        type: Number, //Number? Integer?
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      sex: {
        type: String,
        required: true,
      },
      cpf: {
        type: String,
        required: true,
      },
      rg: {
        type: String,
        required: false,
      }

      //Address?

    }
  }
}

module.exports = Address.buildModel('Person')
