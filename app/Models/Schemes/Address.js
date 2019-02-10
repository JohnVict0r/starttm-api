const { Schema } = use('Mongoose');

const Address = new Schema(
  {
    street: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
      min: 0,
    },
    neighborhood: {
      type: String,
      required: true,
    },
    cep: {
      type: String,
      required: true,
    },
    complement: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    _id: false,
  },
);

module.exports = Address;
