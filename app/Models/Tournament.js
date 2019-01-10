const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');
const {
  Period, Address, Price, Category,
} = use('App/Models/Schemes');

class Tournament extends BaseModel {
  static boot() {}

  static get schema() {
    return {
      title: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      price: {
        type: Price,
        required: true,
      },
      date: {
        type: Period,
        required: true,
      },
      address: {
        type: Address,
        required: true,
      },
      categories: {
        type: [Category],
      },
      federation: {
        type: Schema.Types.ObjectId,
        ref: 'Federation',
        required: true,
      },
      athletes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Athlete',
        },
      ],
      coaches: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Coach',
        },
      ],
      arbiters: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Arbiter',
        },
      ],
    };
  }
}

module.exports = Tournament.buildModel('Tournament');
