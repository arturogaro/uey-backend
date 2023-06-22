import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`process.env.PORT: ${process.env.PORT}`);
  console.log(`process.env.DB_URL: ${process.env.DB_URL}`);
  console.log(`process.env.DB_USER: ${process.env.DB_USER}`);
  console.log(`process.env.DB_PASSWORD: ${process.env.DB_PASSWORD}`);
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*'],
    methods: ['GET'],
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
