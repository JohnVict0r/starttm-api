const UserHook = (exports = module.exports = {});

const Hash = use('Hash');

UserHook.hashPassword = async (user) => {
  user.password = await Hash.make(user.password);
};
