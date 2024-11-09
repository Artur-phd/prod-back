import { Module } from '@nestjs/common';
import { userControllers, userImports, userProviders } from 'src/api/user';

@Module({
  controllers: userControllers,
  providers: userProviders,
  exports: userProviders,
  imports: userImports,
})
export class UserApiModule {}
