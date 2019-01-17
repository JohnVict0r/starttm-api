const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Athlete extends BaseModel {
  static boot({ schema }) {}

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
      },
      rating: {
        type: Number,
        required: true,
      },
      federation: {
        type: Schema.Types.ObjectId,
        ref: 'Federation',
      },
      // tra
    };
  }
}

module.exports = Athlete.buildModel('Athlete');
