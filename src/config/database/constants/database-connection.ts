import { AuroraMysqlConnectionCredentialsOptions } from 'typeorm/driver/aurora-mysql/AuroraMysqlConnectionCredentialsOptions';

export const DatabaseConnection: AuroraMysqlConnectionCredentialsOptions = {
  host: process.env.DBHOST,
  port: Number(process.env.DBPORT),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBDATABASE,
};
