'use strict'

import TokenMongoose from 'adonis-mongoose-model/src/Model/TokenMongoose';

import { ObjectId } from 'mongoose';

/**
 * @class Token
 */
class Token extends TokenMongoose {
  static expires() {
    return 5
  }
  /**
   * You can modify the default schema
   */
  static get schema() {
    // Edit your schema here
    return super.schema
  }
}

module.exports = Token.buildModel('Token')
