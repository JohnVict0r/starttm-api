'use strict'

const BaseModel = use('MongooseModel');
const validator = use('App/Validators/User');

class UserRequest extends BaseModel {

    static boot({ schema }) {
        // All data will be deleted after 3 minutes
        this.index({ 'created_at': 1 }, { expireAfterSeconds: 120 });
    }

    static get schema() {
        return {
            email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                validate: {
                    isAsync: true,
                    validator: validator.validateEmail,
                    message: 'Is not a valid email',

                }
            },
            username: {
                type: String,
                required: true,
                unique: true,
            },
            password: {
                type: String,
                required: true,
            },
            confirmationToken: {
                type: String,
                unique: true,
                required: true,
            },
        }
    }


}

module.exports = UserRequest.buildModel('UserRequest');
