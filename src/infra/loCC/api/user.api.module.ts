import { Module } from '@nestjs/common';
import { userControllers, userImports } from 'src/api/user';
import { userExports, userProviders } from 'src/core/user';

@Module({
  controllers: userControllers,
  providers: userProviders,
  exports: userExports,
  imports: userImports,
})
export class UserApiModule {}
