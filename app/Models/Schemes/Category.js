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

const Category = new Schema({
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  ranking: {
    type: [Ranking],
    required: true,
  },
  rating: {
    type: [Rating],
    required: true,
  },
});

module.exports = Category;
