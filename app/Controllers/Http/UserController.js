'use strict'

const User = use('App/Models/User');
const Role = use('App/Models/Role');

const { userF, roleF } = use('App/Utils/ModelFilter');

const Hash = use('Hash');

class UserController {

    async index({ response }) {

        let users = await User.find();

        response.send(users);
    }

    async show({ request, response }) {

        const { id } = await request.params;

        let user = await User.findOne({ _id: id }, userF).populate('roles', roleF);

        response.status(200).send(user);
    }

}

module.exports = UserController