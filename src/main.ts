import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //se TRUE ele remove as chaves que não estão no DTO
      transform: true, //tenta transformar no tipo necessário geralmente quando recebemos string globalmente(pois estamos usando no GlobalPipes)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap(); //lembrar de tirar o void
