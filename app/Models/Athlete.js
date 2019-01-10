const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

const RefV = use('App/Validators/Ref');

class Athlete extends BaseModel {
  static boot({ schema }) {}

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
        validate: new RefV('User').validator,
      },
      rating: {
        type: Number,
        required: true,
      },
      federation: {
        type: Schema.Types.ObjectId,
        ref: 'Federation',
      },
    };
  }
}

module.exports = Athlete.buildModel('Athlete');
