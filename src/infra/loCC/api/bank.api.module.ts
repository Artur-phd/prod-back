import { Module } from '@nestjs/common';
import { bankControllers, bankImports, bankProviders } from 'src/api/bank';
import { bankExports } from 'src/core/bank';

@Module({
  controllers: bankControllers,
  providers: bankProviders,
  exports: bankExports,
  imports: bankImports,
})
export class BankApiModule {}
