/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Role = use('Role');

class RoleSeeder {
  async run() {
    // role administrator
    const AdminRole = await Role.findOrCreate(
      {
        name: 'Administrator',
      },
      {
        name: 'Administrator',
        slug: 'administrator',
        description: 'manage administration privileges',
      },
    );
    // role atleta
    const AtletheRole = await Role.findOrCreate(
      {
        name: 'ATLETHE',
      },
      {
        name: 'ATLETHE',
        slug: 'atlethe',
        description: 'atlethe privileges',
      },
    );

    console.log(AdminRole);
    console.log(AtletheRole);
  }
}

module.exports = RoleSeeder;
