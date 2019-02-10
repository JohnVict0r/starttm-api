const BaseModel = use('MongooseModel');
const { ufs } = use('App/Utils/Data/Address');

class Federation extends BaseModel {
  static boot() {
    this.index({ name: 1 }, { background: true });
  }

  static get schema() {
    return {
      uf: {
        type: String,
        required: true,
        enum: ufs,
      },
      name: {
        type: String,
        required: true,
        unique: true,
      },
      initials: {
        type: String,
        required: true,
      },
      pictureUrl: {
        type: String,
      }
    };
  }
}

module.exports = Federation.buildModel('Federation');
