const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

const PriceSchema = new Schema({
  rating: {
    type: Number,
    required: true,
  },
  ranking: {
    type: Number,
    required: true,
  },
  all: {
    type: Number,
  },
});

const DateSchema = new Schema({
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
});

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
        enum: [],
        required: true,
      },
      price: {
        type: PriceSchema,
        required: true,
      },
      date: {
        type: DateSchema,
        required: true,
      },
      address: {
        type: Schema.Types.ObjectId,
        refs: 'Address',
      },
      federation: {
        type: Schema.Types.ObjectId,
        refs: 'Federation',
      },
      athletes: [
        {
          type: Schema.Types.ObjectId,
          refs: 'Athlete',
          unique: true,
        },
      ],
      coaches: [
        {
          type: Schema.Types.ObjectId,
          refs: 'Coach',
          unique: true,
        },
      ],
      arbiters: [
        {
          type: Schema.Types.ObjectId,
          refs: 'Arbiter',
          unique: true,
        },
      ],
    };
  }
}

module.exports = Tournament.buildModel('Tournament');
