'use strict'

const NotFoundUserRequestException = use('App/Exceptions/NotFoundException');

const UserRequest = use('App/Models/UserRequest');
const User = use('App/Models/User');
const Mail = use('Mail');

const randomString = require('random-string');

class RegisterControlController {


    // Request a new user
    async requestUser({ request }) {

        const user = await UserRequest.create({
            ...request.all(),
            confirmationToken: randomString({ length: 50 })
        });

        let { confirmationToken, username } = user;

        await Mail.send('emails.signup', { confirmationToken, username }, message => {
            message
                .to(user.email)
                .from('hello@adonisjs.com')
                .subject('Please confirm your email address')
        });

    }

    // Create a new user
    async confirmUser({ params }) {
        const userRequest = await UserRequest.findOne({ confirmationToken: params.token, username: params.username });

        if (!userRequest)
            throw new NotFoundException('User request not found!', 11);

        UserRequest.deleteOne(userRequest);

        await User.create({ ...userRequest });
    }


}

module.exports = RegisterControlController