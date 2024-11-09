import { AuthApiModule } from './auth.api.module';
import { BankApiModule } from './bank.api.module';
import { FirstApiModule } from './first.api.module';
import { UserApiModule } from './user.api.module';

export const apiModules = [
  FirstApiModule,
  BankApiModule,
  UserApiModule,
  AuthApiModule,
];

export * from './api.module';
