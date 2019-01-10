const { Schema } = use('Mongoose');
const { rating } = use('App/Utils/Data/Category');

const Rating = new Schema({
  name: {
    type: String,
    required: true,
    enum: rating,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});

const Ranking = new Schema({
  name: {
    type: String,
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
});

const Section = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: [Rating],
    unique: true,
    sparse: true,
    default: undefined,
  },
  ranking: {
    type: [Ranking],
    unique: true,
    sparse: true,
    default: undefined,
  },
});

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  sections: {
    type: [Section],
    required: true,
  },
});

module.exports = Category;
