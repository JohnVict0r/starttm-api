const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');

class Role extends BaseModel {
  static boot({ schema }) {
    this.index({ user: 1, type: 1, active: 1 }, { background: true, unique: true, sparse: true });
  }

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        required: true,
      },
      startDate: {
        type: Date,
        required: true,
      },
      endDate: {
        type: Date,
      },
      type: {
        type: String,
        required: true,
        enum: [
          'ATLETHE',
          'COACH',
          'ARBITER',
          'FEDERATION_PRESIDENT',
          'CLUB_PRESIDENT',
          'EVENT_MANAGER',
        ],
      },
      active: {
        type: Boolean,
        default: true,
      },
    };
  }
}

module.exports = Role.buildModel('Role');
