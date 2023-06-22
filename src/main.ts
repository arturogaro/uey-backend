import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductSeeder } from './seeder/seeder';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3001',
      'https://99ce-2806-2f0-90e1-b04f-58ce-25ab-d421-cc85.ngrok-free.app',
    ],
    methods: ['GET'],
  });

  const productSeeder = app.get(ProductSeeder);
  await productSeeder.seed();

  await app.listen(3000);
}
bootstrap();
