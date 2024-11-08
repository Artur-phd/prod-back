import { Module } from '@nestjs/common';
import { firstProviders } from 'src/core/first';

@Module({
  imports: [],
  providers: firstProviders,
  exports: firstProviders,
})
export class FirstCoreModule {}
