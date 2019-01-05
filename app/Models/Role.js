const BaseModel = use('MongooseModel');

class Role extends BaseModel {
  static boot() {
    this.index({ type: 1, active: 1 }, { background: true, unique: true });
  }

  static get schema() {
    return {
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
          'ATHLETE',
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
