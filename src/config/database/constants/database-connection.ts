export const DatabaseConnection: any = {
  type: 'mysql',
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
  logging: false,
  synchronize: false,
};
