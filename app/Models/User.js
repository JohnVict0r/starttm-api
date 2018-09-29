'use strict'

import BaseModel from 'adonis-mongoose-model/src/Model/Base';
import { Schema } from 'mongoose';
/**
 * @class User
 */
class User extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'UserHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }
  /**
   * User's schema
   */
  static get schema() {
  
    return new Schema(
      {
        email: {
          type: String,
          required: true,
        },
        login: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        }
      },
      {
        autoIndex : true,
      });
  }
}

/*teste*/

module.exports = User.buildModel('User')
