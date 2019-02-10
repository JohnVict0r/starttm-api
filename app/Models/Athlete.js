const BaseModel = use('MongooseModel');
const { Schema } = use('mongoose');

class Athlete extends BaseModel {
  static boot({ schema }) { }

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
      traCbtmPaid: {
        type: [Number], // Lista de Anos referentes as TRA-CBTM pagas
      }
    };
  }
}

module.exports = Athlete.buildModel('Athlete');
