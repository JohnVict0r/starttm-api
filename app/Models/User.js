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
      role: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Role' }],
        unique: true,
        sparse: true,
        default: undefined,
      },
    };
  }
}

module.exports = User.buildModel('User');
