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
  static boot({ schema }) {}

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
      athletes: {
        type: Schema.Types.ObjectId,
        refs: 'Athlete',
      },
      coaches: {
        type: Schema.Types.ObjectId,
        refs: 'Coach',
      },
      arbiters: {
        type: Schema.Types.ObjectId,
        refs: 'Arbiter',
      },
      address: {
        type: Schema.Types.ObjectId,
        refs: 'Address',
      },
      federation: {
        type: Schema.Types.ObjectId,
        refs: 'Federation',
      },
    };
  }
}

module.exports = Tournament.buildModel('Tournament');
