'use strict'

const User = use('App/Models/User');
const Arbiter = use('App/Models/Arbiter');

const { abriterF, userF, filterDoc } = use('App/Utils/ModelFilter');

class ArbiterController {


    async index({ request, response }) {

        const arbiters = await Arbiter.find().populate('user', userF);
        response.status(200).send(arbiters);
    }

    async show({ request, response }) {

        const { email } = request.all();


    }

    async store({ request, response }) {

    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: personF };


    }

}

module.exports = ArbiterController
