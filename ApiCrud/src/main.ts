import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({    
    methods: ['GET', 'POST'],
    //preflightContinue: false,
  });
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      //forbidNonWhitelisted: true,
    })
  )
  await app.listen(process.env.API_PORT || 3000);
}
bootstrap();
