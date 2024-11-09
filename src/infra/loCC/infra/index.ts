import { AppConfigInfraModule } from './app-config.infra.module';
import { PostgresDatabaseModule } from './postgres.database.module';

export const infraModules = [PostgresDatabaseModule, AppConfigInfraModule];

export * from './postgres.database.module';
export * from './app-config.infra.module';
