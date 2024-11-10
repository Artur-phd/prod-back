import { BankCoreModule } from 'src/infra/loCC/core/bank.core.module';
import { GroupBillHttpController } from './controllers/group-bill.controller';
import { GroupBillUseCase } from './use-cases';

export const bankControllers = [GroupBillHttpController];

export const bankProviders = [GroupBillUseCase];

export const bankImports = [BankCoreModule];
