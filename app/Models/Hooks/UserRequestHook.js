'use strict'

const UserRequestHook = exports = module.exports = {}

const User = use('App/Models/User');

const ValidationException = use('App/Exceptions/ValidationException');

UserRequestHook.verifyDuplicateUser = async ({ username, email }) => {
    let user = await User.findOne({ username, email });

    if (!!user)
        throw new ValidationException('Duplicate Key: The user already exists!', 400, 11000);
}
