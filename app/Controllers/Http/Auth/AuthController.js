'use strict'

const User = use('App/Models/User');
const Token = use('App/Models/Token');
const Hash = use('Hash');

const AuthenticationException = use('App/Exceptions/AuthenticationException');

class AuthController {

    // Login User
    async login({ request, auth, response }) {

        let { username, email, password, remember } = request.all();

        let user = !!username ? await User.findOne({ username }) : await User.findOne({ email });

        if (!!user) {
            let checked = await Hash.verify(password, user.password);
            let result = "No Result";

            if (checked)
                result = await auth.generate(user, true);
            else
                throw new AuthenticationException("Password incorrect");

            response.send(result);
        }
        else {
            throw new AuthenticationException("Username or email not found");
        }

    }
}

module.exports = AuthController
