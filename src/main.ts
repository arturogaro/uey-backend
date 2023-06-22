import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*'],
    methods: ['GET'],
  });

  console.log(`process.env.PORT: ${process.env.PORT}`);
  console.log(`process.env.DB_URL: ${process.env.DB_URL}`);
  console.log(`process.env.DB_USER: ${process.env.DB_USER}`);
  console.log(`process.env.DB_PASSWORD: ${process.env.DB_PASSWORD}`);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
