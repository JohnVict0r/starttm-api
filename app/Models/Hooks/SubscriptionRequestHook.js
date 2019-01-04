const SubscriptionRequestHook = (exports = module.exports = {});

const User = use('App/Models/User');

const { UniqueResourceException } = use('App/Exceptions');
SubscriptionRequestHook.checkDuplicateUser = async (singup) => {
  const user = await User.findOne({
    $or: [{ email: singup.email }, { username: singup.username }],
  });

  if (user) throw new UniqueResourceException('That user already exists', 400);
};
