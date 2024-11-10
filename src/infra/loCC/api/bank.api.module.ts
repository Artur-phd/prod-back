import { Module } from '@nestjs/common';
import { bankControllers, bankImports, bankProviders } from 'src/api/bank';
@Module({
  controllers: bankControllers,
  providers: bankProviders,
  exports: bankProviders,
  imports: bankImports,
})
export class BankApiModule {}
