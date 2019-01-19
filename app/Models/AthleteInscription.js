const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

class Inscription extends BaseModel {
  static boot() {}

  static get schema() {
    return {
      athlete: {
        type: Schema.Types.ObjectId,
        ref: 'Athlete',
        required: true,
      },
      entry: {
        type: String,
        required: true,
      },
    };
  }
}

module.exports = Inscription.buildModel('Inscription');
