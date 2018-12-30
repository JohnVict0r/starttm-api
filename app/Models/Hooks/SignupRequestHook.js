const SignupRequestHook = (exports = module.exports = {});

const User = use('App/Models/User');
const ValidationEx = use('App/Exceptions/ValidationException');

SignupRequestHook.checkDuplicateUser = async (singup) => {
  const user = await User.findOne({
    $or: [{ email: singup.email }, { username: singup.username }],
  });

  if (user) throw new ValidationEx('A user already exists');
};
