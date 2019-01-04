const md5 = require('md5');

const SignupRequest = use('App/Models/Auth/SignupRequest');
const Mail = use('Mail');
const Env = use('Env');

const appUrl = `${Env.get('APP_URL')}/confirmations`;

class SubscriptionController {
  async store({ request, response }) {
    const { username, email, password } = request.all();
    const token = md5(email + password + username);

    const signup = await SignupRequest.create({ ...request.all(), token });

    await Mail.send('emails.signup', { ...signup._doc, appUrl }, (message) => {
      message
        .to(email)
        .from('starttm@account.com')
        .subject('Confirm Email Address');
    });

    response.status(202).send({
      message: 'Confirmation email has been send',
      link: `${appUrl}/${token}`,
    });
  }
}

module.exports = SubscriptionController;
