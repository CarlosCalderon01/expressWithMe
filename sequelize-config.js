// sequelize-config.js
export default function (environment) {
  return {
    development: {
      username: 'postgres',
      password: '2956939xD',
      database: 'MyAppLD',
      host: '127.0.0.1',
      dialect: 'postgres',
      port: 5432
    },
    production: {
      // Configuraciones de producción, si es necesario
    }
  }[environment];
};
