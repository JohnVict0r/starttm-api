const { Schema } = use('Mongoose');

const Period = new Schema(
  {
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
  },
  {
    _id: false,
  },
);

module.exports = Period;
