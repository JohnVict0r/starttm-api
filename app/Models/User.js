const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

const validator = use('App/Validators/User');

class User extends BaseModel {
  static boot({ schema }) {
    this.addHook('preSave', 'UserHook.hashPassword');
  }

  static get traits() {
    return ['@provider:Adonis/Acl/HasRole', '@provider:Adonis/Acl/HasPermission'];
  }

  static get schema() {
    return {
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: {
          isAsync: true,
          validator: validator.validateEmail,
          message: 'Is not a valid email',
        },
      },
      username: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isAsync: true,
          validator: validator.validateUsername,
          message: 'Its not a valid username',
        },
      },
      password: {
        type: String,
        required: true,
      },
      roles: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Role',
        },
      ],
    };
  }
}

module.exports = User.buildModel('User');
