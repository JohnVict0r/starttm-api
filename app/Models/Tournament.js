const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');
const RefV = use('App/Validators/Ref');

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
        validate: new RefV('Federation').validator,
      },
      athletes: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Athlete',
          validate: new RefV('Athlete').validator,
        },
      ],
      coaches: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Coach',
          validate: new RefV('Coach').validator,
        },
      ],
      arbiters: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Arbiter',
          validate: new RefV('Arbiter').validator,
        },
      ],
    };
  }
}

module.exports = Tournament.buildModel('Tournament');
