import Role from '../models/role';

export const roleCreation = async () => {
  const count = await Role.estimatedDocumentCount();
  if (count > 0) return;

  try {
    await Promise.all([
      new Role({ NAME: 'ADMIN', LOCATION: 'BBVA' }).save(),
      new Role({ NAME: 'JEFE', LOCATION: 'BBVA' }).save(),
      new Role({ NAME: 'SUPERVISOR', LOCATION: 'FUVEX' }).save(),
      new Role({ NAME: 'PROMOTOR', LOCATION: 'FUVEX' }).save(),
    ]);
  } catch (error) {
    console.error(err);
  }
}