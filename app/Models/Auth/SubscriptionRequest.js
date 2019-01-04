const BaseModel = use('MongooseModel');
const validator = use('App/Validators/User');

class SubscriptionRequest extends BaseModel {
  static boot({ schema }) {
    this.index({ created_at: 1 }, { expireAfterSeconds: 60 * 5 });
    this.addHook('preSave', 'SubscriptionRequestHook.checkDuplicateUser');
  }

  static get schema() {
    return {
      username: {
        type: String,
        required: true,
        validate: {
          isAsync: true,
          validator: validator.validateUsername,
          message: 'Invalid Username',
        },
      },
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          isAsync: true,
          validator: validator.validateEmail,
          message: 'Invalid Email',
        },
      },
      password: {
        type: String,
        required: true,
      },
      token: {
        type: String,
        required: true,
        unique: true,
      },
    };
  }
}

module.exports = SubscriptionRequest.buildModel('SubscriptionRequest');
