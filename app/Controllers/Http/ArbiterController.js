'use strict'

const User = use('App/Models/User');
const Arbiter = use('App/Models/Arbiter');

const { baseF, arbiterF, userF, filterDoc } = use('App/Utils/ModelFilter');

class ArbiterController {


    async index({ request, response }) {

        const arbiters = await Arbiter.find();
        response.status(200).send(arbiters);
    }

    async show({ request, response }) {

        const { users_id, id } = request.params;

        const arbiter = await Arbiter.findOne({ user: users_id, _id: id }, baseF).populate('user', userF);

        response.status(200).send(arbiter);
    }

    async store({ request, response }) {

        const { users_id } = request.params;

        const arbiter = await Arbiter.create({ users_id });

        arbiter._doc = filterDoc(arbiter._doc, arbiterF);

        response.status(200).send(arbiter);
    }

}

module.exports = ArbiterController