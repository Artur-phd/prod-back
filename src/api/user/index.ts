import { UserCoreModule } from 'src/infra/loCC/core/user.core.module';
import { UserHttpController } from './controllers/user.http.controller';
import { UserUseCase } from './use-cases';

export const userControllers = [UserHttpController];

export const userProviders = [UserUseCase];

export const userImports = [UserCoreModule];
