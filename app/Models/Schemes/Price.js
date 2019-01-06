const { Schema } = use('Mongoose');

const Price = new Schema(
  {
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
  },
  {
    autoIndex: false,
  },
);

module.exports = Price;
