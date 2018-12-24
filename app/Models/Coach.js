

const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

class Coach extends BaseModel {
  static boot({ schema }) {
    this.index({ user: 1 }, { background: true });
  }

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'User',
      },
      club: {
        type: Schema.Types.ObjectId,
        unique: true,
        required: true,
        ref: 'Club',
      },
    };
  }
}

module.exports = Coach.buildModel('Coach');
