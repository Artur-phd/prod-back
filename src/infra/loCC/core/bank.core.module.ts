import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { bankEntities, bankExports, bankProviders } from 'src/core/bank';

@Module({
  imports: [TypeOrmModule.forFeature(bankEntities)],
  providers: bankProviders,
  exports: bankExports,
})
export class BankCoreModule {}
