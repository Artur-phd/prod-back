import { GroupBillEntity, GroupBillTransactionalEntity } from './entities';
import { GroupBillService } from './services';

export const bankEntities = [GroupBillEntity, GroupBillTransactionalEntity];

export const bankProviders = [GroupBillService];

export const bankExports = [GroupBillService];
