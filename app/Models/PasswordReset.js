'use strict'

import BaseModel from 'adonis-mongoose-model/src/Model/Base';
import { Schema } from 'mongoose';

/**
 * @class PasswordReset
 */
class PasswordReset extends BaseModel {
  static boot({ schema }) {
    // Hooks:
    // this.addHook('preSave', () => {})
    // this.addHook('preSave', 'PasswordResetHook.method')
    // Indexes:
    // this.index({}, {background: true})
  }

  static get schema() {
    return new Schema({
      email:{
        type: String,
      },
      token:{
        type: String,
      }
    },
      {
        autoIndex: true,
      });
  }
}

module.exports = PasswordReset.buildModel('PasswordReset')
