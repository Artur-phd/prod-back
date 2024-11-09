import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userEntities, userExports, userProviders } from 'src/core/user';

@Module({
  imports: [TypeOrmModule.forFeature(userEntities)],
  providers: userProviders,
  exports: userExports,
})
export class UserCoreModule {}
