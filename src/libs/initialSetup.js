import Role from '../models/role';

export const roleCreation = async () => {
  const count = await Role.estimatedDocumentCount();
  if (count > 0) return;

  try {
    await Promise.all([
      new Role({ name: 'gerente', location: 'centronegocio' }).save(),
      new Role({ name: 'jefenegocio', location: 'centronegocio' }).save(),
      new Role({ name: 'gestor', location: 'centronegocio' }).save(),
      new Role({ name: 'gestor', location: 'fuvex' }).save(),
      new Role({ name: 'supevisor', location: 'fuvex' }).save(),
      new Role({ name: 'promotor', location: 'fuvex' }).save(),
    ]);
  } catch (error) {
    console.error(err);
  }
}