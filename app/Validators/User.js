'use strict'

const { validate } = use('Validator');

class User {

    async validateEmail(email) {
        let rules = {
            email: 'email'
        }

        let validation = await validate({ email }, rules);

        if (validation.fails())
            return false;

        return true;
    }


}

module.exports = new User();