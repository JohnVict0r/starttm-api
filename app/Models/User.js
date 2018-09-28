'use strict'

const BaseModel = use('MongooseModel')

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
    return {
      id: {
        type: Number,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      login: {
        type: String,
        required: true,
      },
      password:{
        type: String,
        required: true,
      }
    }
  }
}

/*teste*/

module.exports = User.buildModel('User')
