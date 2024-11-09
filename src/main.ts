import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/loCC/app.module';
import { AppFactory } from './app-factory';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = AppFactory.logger;
  initializeTransactionalContext();
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger,
  });

  console.log(__dirname, '..', 'views');
  app.setViewEngine('pug');
  app.setBaseViewsDir(join(__dirname, '..', 'views'));

  await new AppFactory(app).useGlobalPipes().useCors().listen();
}
bootstrap();
