const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

class User extends BaseModel {
  static boot({ schema }) {
    this.addHook('preSave', 'UserHook.hashPassword');
  }

  static get schema() {
    return {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      username: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
    };
  }
}

module.exports = User.buildModel('User');
