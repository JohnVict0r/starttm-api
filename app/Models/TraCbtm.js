const BaseModel = use('MongooseModel');

class TraCbtm extends BaseModel {
  static boot() { }

  static get schema() {
    return {
      Ano: {
        type: Number,
        required: true,
        unique: true,
      },
      active: {
        type: Boolean,
        default: true,
      },
    };
  }
}

module.exports = TraCbtm.buildModel('TraCbtm');
