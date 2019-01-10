const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');
const RefV = use('App/Validators/Ref');

class Club extends BaseModel {
  static boot({ schema }) {
    this.index({ clubManager: 1, eventManager: 1 }, { background: true, unique: true });
  }

  static get schema() {
    return {
      name: {
        type: String,
        required: true,
        unique: true,
      },
      manager: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
        validate: new RefV('User').validator,
      },
      eventManager: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
        validate: new RefV('User').validator,
      },
      federation: {
        type: Schema.Types.ObjectId,
        ref: 'Federation',
        validate: new RefV('User').validator,
      },
    };
  }
}

module.exports = Club.buildModel('Club');
