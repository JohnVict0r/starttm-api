'use strict'

const SingupRequestHook = exports = module.exports = {}

const User = use('App/Models/User');
const ValidationEx = use('App/Exceptions/ValidationException');

SingupRequestHook.checkDuplicateUser = async (singup) => {

    let user = await User.findOne({
        $or: [
            { email: singup.email },
            { username: singup.username }
        ]
    });

    if (!!user)
        throw new ValidationEx("A user already exists");

}
