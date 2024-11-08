import { MiddlewareConsumer, Module } from '@nestjs/common';
import { apiModules } from '.';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { LoggerMiddleware } from 'src/shared/middlewares';

@Module({
  imports: [
    ...apiModules,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
})
export class ApiModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
