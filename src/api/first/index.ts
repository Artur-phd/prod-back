import { FirstCoreModule } from 'src/infra/loCC/core/first.core.module';
import { FirstHttpController } from './controllers';
import { FirstUseCase } from './use-cases';

export const FirstControllers = [FirstHttpController];

export const FirstProviders = [FirstUseCase];

export const firstImports = [FirstCoreModule];
