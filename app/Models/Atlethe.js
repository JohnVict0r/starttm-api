'use strict'

const BaseModel = use('MongooseModel')
const { Schema } = use('mongoose');

class Atlethe extends BaseModel {
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
      rating: {
        type: Number,
        required: true,
      },
      rank: {
        type: Number,
        required: true,
        min: 0,
        max: 9
      }
    }
  }
}

module.exports = Atlethe.buildModel('Atlethe')
