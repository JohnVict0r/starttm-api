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
      required: false,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
  },
  {
    autoIndex: false,
  },
);

module.exports = Address;
