const BaseModel = use('MongooseModel');

class SubscriptionRequest extends BaseModel {
  static boot() {
    this.index({ created_at: 1 }, { expireAfterSeconds: 60 * 5 });
    this.addHook('preSave', 'SubscriptionRequestHook.checkDuplicateUser');
  }

  static get schema() {
    return {
      username: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
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
