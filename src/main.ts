import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module.js';
import 'reflect-metadata';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('App is running on http://localhost:3000');
}
bootstrap();
