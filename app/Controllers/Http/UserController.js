'use strict'

const User = use('App/Models/User');
const Role = use('App/Models/Role');

const { userF, roleF } = use('App/Utils/ModelFilter');
const { AuthEx, NotFoundEx } = use('App/Exceptions');

const Hash = use('Hash');

class UserController {

    async index({ request, response }) {
        const { email, password } = await request.all();

        let user = await User.findOne({ email }, userF).populate('roles', roleF);

        if (!user) throw new NotFoundEx("User not found.");

        let isCheck = await Hash.verify(password, user.password);

        if (!isCheck) throw new AuthEx('Incorret username or password.');

        delete user._doc['password'];

        response.status(200).send(user);
    }

}

module.exports = UserController