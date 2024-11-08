import { Module } from '@nestjs/common';
import { FirstControllers, firstImports, FirstProviders } from 'src/api/first';
import { firstExports } from 'src/core/first';

@Module({
  controllers: FirstControllers,
  providers: FirstProviders,
  exports: firstExports,
  imports: firstImports,
})
export class FirstApiModule {}
