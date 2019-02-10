const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');
const { Address } = use('App/Models/Schemes');

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
      },
      eventManager: {
        type: Schema.Types.ObjectId,
        required: true,
        unique: true,
        ref: 'User',
      },
      federation: {
        type: Schema.Types.ObjectId,
        ref: 'Federation',
      },
      address: {
        type: Address,
        required: true,
      },
      traCbtmPaid: {
        type: [Number], // Lista de Anos referentes as TRA-CBTM pagas
      }
    };
  }
}

module.exports = Club.buildModel('Club');
