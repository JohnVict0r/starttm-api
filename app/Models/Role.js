const BaseModel = use('MongooseModel');
const { Schema } = use('Mongoose');
const RefV = use('App/Validators/Ref');

class Role extends BaseModel {
  static boot() {
    this.index({ type: 1, active: 1 }, { background: true });
  }

  static get schema() {
    return {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        validate: new RefV('User').validator,
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
