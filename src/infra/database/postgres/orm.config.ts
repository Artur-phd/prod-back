import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { ConfigLoaders, ConfigTypes } from 'src/infra/app-config';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';
import { userEntities } from 'src/core/user';
import { bankEntities } from 'src/core/bank';

export const ormConfig = (
  dbConfig: ConfigTypes.DatabaseConfigType | object,
): TypeOrmModuleOptions => {
  const migrationsDir = join(__dirname, 'migrations', '**/*.js');
  return {
    ...dbConfig,
    type: 'postgres',
    logging: true,
    synchronize: false,
    migrations: [migrationsDir],
    entities: [...userEntities, ...bankEntities],
    autoLoadEntities: true,
    migrationsRun: true,
  };
};

config();

export default new DataSource(
  ormConfig(ConfigLoaders.databaseLoader()) as DataSourceOptions,
);
