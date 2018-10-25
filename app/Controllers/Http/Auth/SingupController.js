'use strict'

const md5 = require('md5');

const SingupRequest = use('App/Models/Auth/SingupRequest');
const User = use('App/Models/User');
const Mail = use('Mail');

const NotFoundEx = use('App/Exceptions/NotFoundException');


class SingupController {

    async register({ request, response }) {

        let { username, email, password } = request.all();
        let token = md5(email + password + username);

        let singup = await SingupRequest.create({ ...request.all(), token });

        await Mail.send('emails.singup', singup, (message) => {
            message
                .to(email)
                .from('starttm@account.com')
                .subject('Confirm Email Address')
        });

        response.status(202).send("Confirmation email has been sent.");
    }

    async confirm({ params, response }) {

        let singup = await SingupRequest.findOne({ token: params.token });

        if (!singup)
            throw new NotFoundEx();

        await SingupRequest.deleteOne({ token: params.token });

        let { email, username, password } = singup;

        await User.create({email, username, password});

        response.status(201).send("User has been registred.")
    }
}

module.exports = SingupController
